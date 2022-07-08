import {bridge} from '../../bridge';
import {
    MessageMapType,
    MessageDisplayPayloadType,
} from './message.types';

const typeMap: MessageMapType = {
    info: 1,
    success: 2,
    error: 3,
    fatal: 4,
};

export const display = (payload: MessageDisplayPayloadType): void => {
    bridge.dispatch('messageBox.Show', {
        title: payload.title,
        message: typeMap[payload.type],
        type: Array.isArray(payload.message) ? payload.message : [payload.message],
    });
};
