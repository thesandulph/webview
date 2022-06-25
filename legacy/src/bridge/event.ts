import {
    BroadcastType,
    SubscribeType,
    SubscribeCallbackType,
    UnsubscribeCallbackType,
} from './event.types';

export const broadcast: BroadcastType = (name: string, payload?: any): void => {
    const event = new CustomEvent(name, {detail: payload});
    window.dispatchEvent(event);
};

export const subscribe: SubscribeType = (name: string, callback: SubscribeCallbackType): UnsubscribeCallbackType => {
    const subscription = (event: any) => callback(event.detail);
    window.addEventListener(name, subscription);
    return () => {
        window.removeEventListener(name, subscription);
    };
};
