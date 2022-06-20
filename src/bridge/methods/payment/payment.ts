import {bridge} from '../../bridge';
import {
    EventCallbackType,
    UnsubscribeObjectType
} from '../../bridge.types';
import {PaymentStartPayloadType} from './payment.types';

const unsubscribe: UnsubscribeObjectType = {
    start: () => {
    },
};

export const start = (payload: PaymentStartPayloadType, callback: EventCallbackType): void => {
    unsubscribe.start = bridge.subscribeEvent('payment.Completed', (event: any) => {
        unsubscribe.start();
        if (bridge.platform !== 'pwa') {
            if (event.indexOf('"host_response":""{') > -1) {
                event = event.replace('"host_response":""{', '"host_response":"{');
                event = event.replace('"}"","host_response_sign', '"}","host_response_sign');
            } else {
                const start = '"host_response":"{';
                const end = '"}"';
                if (event.indexOf(start) > -1 && event.indexOf(end) > -1) {
                    const slice = event.substring(event.indexOf(start) + start.length, event.indexOf(end) + end.length - 1);
                    const offset = {
                        last: '',
                        character: '',
                    };
                    for (let index = 0; index < slice.length; index++) {
                        let character = slice[index];
                        if (character === '"' && offset.character !== "\\") {
                            character = "\\" + character;
                        }
                        offset.last += character;
                        offset.character = character;
                    }
                    event = event.substring(0, event.indexOf(start)) + start + offset.last + event.substring(event.indexOf(end) + end.length - 1);
                }
            }
            const pattern = /("|')unique_tran_id("|')\s*:\s*(\d+)/;
            const result = pattern.exec(event) || [];
            event = event.replace(result[0], `"unique_tran_id":"'${result[3]}'"`);
        }
        callback({
            ...JSON.parse(event),
            paymentId: payload.PaymentId,
        });
    });
    bridge.callAction('payment.Start', payload);
};
