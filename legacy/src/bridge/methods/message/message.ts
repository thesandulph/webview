import {bridge} from '../../bridge';
import {
    MessageMapType,
    MessageDisplayPayloadType,
} from './message.types';

const typeMap: MessageMapType = {
    general: 0,
    info: 1,
    success: 2,
    error: 3,
    fatal: 4,
};

const prepareMessage = (payload: MessageDisplayPayloadType): string[] => {
    return Array.isArray(payload.message) ? payload.message : [payload.message];
};

const prepareType = (payload: MessageDisplayPayloadType): number => {
    return typeMap[payload.type];
};

export const display = (payload: MessageDisplayPayloadType): void => {
    bridge.dispatch('messageBox.Show', {
        title: payload.title,
        message: prepareMessage(payload),
        type: prepareType(payload),
    });
};
