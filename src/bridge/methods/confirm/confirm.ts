import {bridge} from '../../bridge';
import {UnsubscribeObjectType} from '../../bridge.types';
import {ConfirmDisplayPayloadType} from './confirm.types';

const unsubscribe: UnsubscribeObjectType = {
    displayConfirm: () => {},
};

export const display = (payload: ConfirmDisplayPayloadType): Promise<any> => {
    return new Promise((resolve, reject) => {
        unsubscribe.displayConfirm();
        unsubscribe.displayConfirm = bridge.subscribeEvent('confirmBox.Closed',  (event: any) => {
            if (event === 1) {
                resolve(event);
            } else {
                reject(event)
            }
        });
        bridge.callAction('confirmBox.Show', {
            title: payload.title,
            message: payload.message,
            okButtonTitle: payload.resolveButton,
            cancelButtonTitle: payload.rejectButton,
        });
    });
};
