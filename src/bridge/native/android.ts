import {BridgeActionType} from '../bridge.types';

declare const window: any;

export const androidBridge: BridgeActionType = (action, payload = null) => {
    window.parent.Android.DoAction(action, JSON.stringify(payload));
};
