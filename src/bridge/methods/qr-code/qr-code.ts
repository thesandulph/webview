import {bridge} from '../../bridge';
import {
    SubscribeCallbackType,
    UnsubscribeCallbackRecordType,
} from '../../event.types';
import {
    QrCodeType,
    QrCodeMapType,
    QrCodeScanCallbackType,
} from './qr-code.types';

const typeMap: QrCodeMapType = {
    all: 1,
    qr: 2,
    linear: 3,
    '2d': 4,
};

const unsubscribe: UnsubscribeCallbackRecordType = {
    scan: () => {},
};

export const scan = (payload: QrCodeType, callback: SubscribeCallbackType<QrCodeScanCallbackType>): void => {
    unsubscribe.scan();
    unsubscribe.scan = bridge.subscribe('qrCodeScanResult', callback);
    bridge.dispatch('qrCodeScan', {
        barcodeFormatCode: typeMap[payload],
    });
};
