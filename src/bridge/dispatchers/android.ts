import {DispatcherType} from '../bridge.types';

declare const window: any;

const prepareData = (payload?: any): any => {
    return payload ? JSON.stringify(payload) : undefined;
};

export const android: DispatcherType = (name, payload?) => {
    window.parent.Android.DoAction(name, prepareData(payload));
};
