import {bridge} from '../../bridge';
import {
    SubscribeCallbackType,
    UnsubscribeCallbackRecordType,
} from '../../event.types';
import {
    PichakVerifyPinPayloadType,
    PichakEncryptPayloadType,
    PichakDecryptPayloadType,
    PichakEncryptResponseType,
    PichakDecryptResponseType
} from './pichak.types';

const unsubscribe: UnsubscribeCallbackRecordType = {
    verifyPin: () => {},
    encrypt: () => {},
    decrypt: () => {},
    encryptBulk: () => {},
    decryptBulk: () => {},
};

const prepareData = <T>(payload: any): T => {
    return JSON.parse(payload) as T;
};

export const verifyPin = (payload: PichakVerifyPinPayloadType, callback: SubscribeCallbackType): void => {
    unsubscribe.verifyPin();
    unsubscribe.verifyPin = bridge.subscribe('pichakPinVerificationResult', callback);
    bridge.dispatch('pichakPinVerification', payload);
};

export const encrypt = (payload: PichakEncryptPayloadType): Promise<PichakEncryptResponseType> => {
    return new Promise((resolve, reject) => {
        unsubscribe.encrypt();
        unsubscribe.encrypt = bridge.subscribe('encryptPichakPacketResult', (data: string) => {
            try {
                resolve(prepareData<PichakEncryptResponseType>(data));
            } catch (error) {
                reject(error);
            }
        });
        bridge.dispatch('encryptPichakPacket', payload);
    });
};

export const decrypt = (payload: PichakDecryptPayloadType): Promise<PichakDecryptResponseType> => {
    return new Promise((resolve, reject) => {
        unsubscribe.decrypt();
        unsubscribe.decrypt = bridge.subscribe('decryptPichakPacketResult', (data: string) => {
            try {
                resolve(prepareData<PichakDecryptResponseType>(data));
            } catch (error) {
                reject(error);
            }
        });
        bridge.dispatch('decryptPichakPacket', payload);
    });
};

export const encryptBulk = (payload: PichakEncryptPayloadType[]): Promise<PichakEncryptResponseType[]> => {
    return new Promise((resolve, reject) => {
        unsubscribe.encryptBulk();
        unsubscribe.encryptBulk = bridge.subscribe('encryptPichakPacketListResult', (data: string) => {
            try {
                resolve(prepareData<PichakEncryptResponseType[]>(data));
            } catch (error) {
                reject(error);
            }
        });
        bridge.dispatch('encryptPichakPacketList', payload);
    });
}

export const decryptBulk = (payload: PichakDecryptPayloadType[]): Promise<PichakDecryptResponseType[]> => {
    return new Promise((resolve, reject) => {
        unsubscribe.decryptBulk();
        unsubscribe.decryptBulk = bridge.subscribe('decryptPichakPacketListResult', (data: string) => {
            try {
                resolve(prepareData<PichakDecryptResponseType[]>(data));
            } catch (error) {
                reject(error);
            }
        });
        bridge.dispatch('decryptPichakPacketList', payload);
    });
};
