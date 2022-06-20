import {bridge} from '../../bridge';
import {
    EventCallbackType,
    UnsubscribeObjectType,
} from '../../bridge.types';
import {
    PichakVerifyPinPayloadType,
    PichakEncryptPayloadType,
    PichakDecryptPayloadType,
    PichakEncryptResponseType,
    PichakDecryptResponseType
} from './pichak.types';

const unsubscribe: UnsubscribeObjectType = {
    verifyPin: () => {},
    encrypt: () => {},
    decrypt: () => {},
    encryptBulk: () => {},
    decryptBulk: () => {},
};

const prepareData = <T>(payload: any): T => {
    return JSON.parse(payload) as T;
};

export const verifyPin = (payload: PichakVerifyPinPayloadType, callback: EventCallbackType): void => {
    unsubscribe.verifyPin();
    unsubscribe.verifyPin = bridge.subscribeEvent('pichakPinVerificationResult', callback);
    bridge.callAction('pichakPinVerification', payload);
};

export const encrypt = (payload: PichakEncryptPayloadType): Promise<PichakEncryptResponseType> => {
    return new Promise((resolve, reject) => {
        unsubscribe.encrypt();
        unsubscribe.encrypt = bridge.subscribeEvent('encryptPichakPacketResult', (data: string) => {
            try {
                resolve(prepareData<PichakEncryptResponseType>(data));
            } catch (error) {
                reject(error);
            }
        });
        bridge.callAction('encryptPichakPacket', payload);
    });
};

export const decrypt = (payload: PichakDecryptPayloadType): Promise<PichakDecryptResponseType> => {
    return new Promise((resolve, reject) => {
        unsubscribe.decrypt();
        unsubscribe.decrypt = bridge.subscribeEvent('decryptPichakPacketResult', (data: string) => {
            try {
                resolve(prepareData<PichakDecryptResponseType>(data));
            } catch (error) {
                reject(error);
            }
        });
        bridge.callAction('decryptPichakPacket', payload);
    });
};

export const encryptBulk = (payload: PichakEncryptPayloadType[]): Promise<PichakEncryptResponseType[]> => {
    return new Promise((resolve, reject) => {
        unsubscribe.encryptBulk();
        unsubscribe.encryptBulk = bridge.subscribeEvent('encryptPichakPacketListResult', (data: string) => {
            try {
                resolve(prepareData<PichakEncryptResponseType[]>(data));
            } catch (error) {
                reject(error);
            }
        });
        bridge.callAction('encryptPichakPacketList', payload);
    });
}

export const decryptBulk = (payload: PichakDecryptPayloadType[]): Promise<PichakDecryptResponseType[]> => {
    return new Promise((resolve, reject) => {
        unsubscribe.decryptBulk();
        unsubscribe.decryptBulk = bridge.subscribeEvent('decryptPichakPacketListResult', (data: string) => {
            try {
                resolve(prepareData<PichakDecryptResponseType[]>(data));
            } catch (error) {
                reject(error);
            }
        });
        bridge.callAction('decryptPichakPacketList', payload);
    });
};
