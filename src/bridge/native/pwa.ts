import {BridgeActionType} from '../bridge.types';

declare const window: any;

const prepareCallback = (name: string): Function => {
    return name
        .split('.')
        .reduce((accumulator: any, item: string) => accumulator[item], window.parent)
}

export const pwaBridge: BridgeActionType = (name, payload?) => {
    prepareCallback(name)(payload || undefined);
};
