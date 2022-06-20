import {bridge} from '../../bridge';
import {EventCallbackType, UnsubscribeObjectType} from '../../bridge.types';


const unsubscribe: UnsubscribeObjectType = {
    scan: () => {
    },
};

export const scan = (code: number, callback: EventCallbackType): void => {
    unsubscribe.scan();
    unsubscribe.scan = bridge.subscribeEvent('qrCodeScanResult', callback);
    bridge.callAction('qrCodeScan', {
        barcodeFormatCode: code,
    });
};
