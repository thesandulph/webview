import {DispatcherType} from '../bridge.types';

declare const window: any;

const prepareCallback = (name: string): Function => {
    return name.split('.')
        .reduce((accumulator: any, item: string) => accumulator[item], window.parent) as Function;
}

export const pwa: DispatcherType = (name, payload?) => {
    prepareCallback(name)(payload || undefined);
};
