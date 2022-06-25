import {bridge} from '../../bridge';
import {
    SubscribeCallbackType,
    UnsubscribeCallbackRecordType,
} from '../../event.types';


const unsubscribe: UnsubscribeCallbackRecordType = {
    scan: () => {
    },
};

export const scan = (code: number, callback: SubscribeCallbackType): void => {
    unsubscribe.scan();
    unsubscribe.scan = bridge.subscribe('qrCodeScanResult', callback);
    bridge.dispatch('qrCodeScan', {
        barcodeFormatCode: code,
    });
};
