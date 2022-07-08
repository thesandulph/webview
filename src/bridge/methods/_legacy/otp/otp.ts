import {bridge} from '../../../bridge';
import {
    SubscribeCallbackType,
    UnsubscribeCallbackRecordType,
} from '../../../event.types';
import {
    OtpFetchPayloadType,
    OtpRegisterPayloadType,
    OtpGetStatusPayloadType,
} from './otp.types';

const unsubscribe: UnsubscribeCallbackRecordType = {
    fetch: () => {},
    register: () => {},
    getStatus: () => {},
    getToken: () => {},
};

export const fetch = (payload: OtpFetchPayloadType, callback: SubscribeCallbackType): void => {
    unsubscribe.fetch();
    unsubscribe.fetch = bridge.subscribe('getOtpCallback', callback);
    bridge.dispatch('getOtp', payload);
};

export const register = (payload: OtpRegisterPayloadType, callback: SubscribeCallbackType): void => {
    unsubscribe.register();
    unsubscribe.register = bridge.subscribe('registerOtpCallback', callback);
    bridge.dispatch('registerOtp', payload);
};

export const getStatus = (payload: OtpGetStatusPayloadType, callback: SubscribeCallbackType): void => {
    unsubscribe.getStatus();
    unsubscribe.getStatus = bridge.subscribe('getOtpStatusCallback', callback);
    bridge.dispatch('getOtpStatus', payload);
};

export const getToken = (callback: SubscribeCallbackType): void => {
    unsubscribe.getToken();
    unsubscribe.getToken = bridge.subscribe('otpTrustedToken', callback);
    bridge.dispatch('getToken');
};
