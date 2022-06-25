import {bridge} from '../../bridge';
import {UnsubscribeCallbackRecordType} from '../../event.types';
import {ConfirmDisplayPayloadType} from './confirm.types';

const unsubscribe: UnsubscribeCallbackRecordType = {
    displayConfirm: () => {},
};

export const display = (payload: ConfirmDisplayPayloadType): Promise<any> => {
    return new Promise((resolve, reject) => {
        unsubscribe.displayConfirm();
        unsubscribe.displayConfirm = bridge.subscribe('confirmBox.Closed',  (event: any) => {
            if (event === 1) {
                resolve(event);
            } else {
                reject(event)
            }
        });
        bridge.dispatch('confirmBox.Show', {
            title: payload.title,
            message: payload.message,
            okButtonTitle: payload.resolveButton,
            cancelButtonTitle: payload.rejectButton,
        });
    });
};
