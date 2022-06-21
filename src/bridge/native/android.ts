import {BridgeActionType} from '../bridge.types';

declare const window: any;

export const androidBridge: BridgeActionType = (name, payload?) => {
    console.log('=====> androidBridge name:', name);
    console.log('=====> androidBridge payload:', payload);
    const data = payload ? JSON.stringify(payload) : undefined;
    window.parent.Android.DoAction(name, data);
};
