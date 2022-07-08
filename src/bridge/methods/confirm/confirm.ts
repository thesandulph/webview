import {bridge} from '../../bridge';
import {UnsubscribeCallbackRecordType} from '../../event.types';
import {
    ConfirmDisplayPayloadType,
    ConfirmDisplayEventType,
} from './confirm.types';

const unsubscribe: UnsubscribeCallbackRecordType = {
    displayConfirm: () => {},
};

export const display = (payload: ConfirmDisplayPayloadType): Promise<void> => {
    return new Promise((resolve, reject) => {
        unsubscribe.displayConfirm();
        unsubscribe.displayConfirm = bridge.subscribe('confirmBox.Closed',  (event: ConfirmDisplayEventType) => {
            if (event) {
                return resolve();
            }
            return reject();
        });
        bridge.dispatch('confirmBox.Show', {
            title: payload.title,
            message: payload.message,
            okButtonTitle: payload.resolveButton,
            cancelButtonTitle: payload.rejectButton,
        });
    });
};
