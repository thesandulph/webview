import {bridge} from '../../bridge';
import {
    EventCallbackType,
    UnsubscribeObjectType,
} from '../../bridge.types';
import {
    OtpFetchPayloadType,
    OtpRegisterPayloadType,
    OtpGetStatusPayloadType,
} from './otp.types';

const unsubscribe: UnsubscribeObjectType = {
    fetch: () => {},
    register: () => {},
    getStatus: () => {},
    getToken: () => {},
};

export const fetch = (payload: OtpFetchPayloadType, callback: EventCallbackType): void => {
    unsubscribe.fetch();
    unsubscribe.fetch = bridge.subscribeEvent('getOtpCallback', callback);
    bridge.callAction('getOtp', payload);
};

export const register = (payload: OtpRegisterPayloadType, callback: EventCallbackType): void => {
    unsubscribe.register();
    unsubscribe.register = bridge.subscribeEvent('registerOtpCallback', callback);
    bridge.callAction('registerOtp', payload);
};

export const getStatus = (payload: OtpGetStatusPayloadType, callback: EventCallbackType): void => {
    unsubscribe.getStatus();
    unsubscribe.getStatus = bridge.subscribeEvent('getOtpStatusCallback', callback);
    bridge.callAction('getOtpStatus', payload);
};

export const getToken = (callback: EventCallbackType): void => {
    unsubscribe.getToken();
    unsubscribe.getToken = bridge.subscribeEvent('otpTrustedToken', callback);
    bridge.callAction('getToken');
};
