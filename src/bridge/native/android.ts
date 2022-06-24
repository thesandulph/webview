import {BridgeActionType} from '../bridge.types';

declare const window: any;

const prepareData = (payload?: any): any => {
    return payload ? JSON.stringify(payload) : undefined;
};

export const androidBridge: BridgeActionType = (name, payload?) => {
    window.parent.Android.DoAction(name, prepareData(payload));
};
