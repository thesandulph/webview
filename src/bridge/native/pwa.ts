import {BridgeActionType} from '../bridge.types';

declare const window: any;

export const pwaBridge: BridgeActionType = (name, payload?) => {
    console.log('=====> pwaBridge name:', name);
    console.log('=====> pwaBridge payload:', payload);
    const callback = name.split('.').reduce((accumulator: any, item: string) => accumulator[item], window.parent);
    callback(payload || undefined);
};
