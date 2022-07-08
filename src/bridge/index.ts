import {bridge as core} from './bridge';
import {
    confirm,
    loading,
    message,
    native,
    payment,
    qrCode,
} from './methods'

export * as event from './event';
export * as sw from './sw';

export * from './bridge.types';
export * from './event.types';
export * from './sw.types';
export * from './methods/index.types';

export const bridge = {
    core,
    confirm,
    loading,
    message,
    native,
    payment,
    qrCode,
};
