import {bridge as core} from './bridge';
import {
    confirm,
    file,
    loading,
    message,
    native,
    otp,
    payment,
    pichak,
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
    file,
    loading,
    message,
    native,
    otp,
    payment,
    pichak,
    qrCode,
};
