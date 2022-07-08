export type QrCodeType =  'all' | 'qr' | 'linear' | '2d';

export type QrCodeMapType = Record<QrCodeType, number>;

export type QrCodeScanCallbackType = {
    result: string;
};
