export enum PichakEncryptStatusEnum {
    SUCCESS = 0,
    UNKNOWN_ERROR = 101,
    PUBLIC_KEY_NOT_EXIST_ERROR = 102,
}

export type PichakSafePacketType = {
    encryptedKey: string;
    encryptedData: string;
    iv: string;
};

// todo: add payload type
export type PichakVerifyPinPayloadType = any;

export type PichakEncryptPayloadType = {
    trackId: string;
    data: string;
};

export type PichakDecryptPayloadType = {
    trackId: string;
    encryptedData: string;
    iv: string;
};

export type PichakEncryptResponseType = {
    trackId: string;
    safePacket: PichakSafePacketType;
    statusCode: PichakEncryptStatusEnum;
};

export type PichakDecryptResponseType = {
    trackId: string;
    decryptedData: string;
    statusCode: PichakEncryptStatusEnum;
};
