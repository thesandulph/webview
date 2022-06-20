import {BridgeActionType} from '../bridge.types';

declare const window: any;

export const pwaBridge: BridgeActionType = (action, payload = null) => {
    const callback = action.split('.').reduce((accumulator: any, item: string) => accumulator[item], window.parent);
    callback(payload);
};
