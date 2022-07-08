export type SubscribeCallbackType<T = any> = (event?: T) => void;

export type UnsubscribeCallbackType = () => void;

export type UnsubscribeCallbackRecordType = Record<string, UnsubscribeCallbackType>;

export type BroadcastType = (name: string, payload?: any) => void;

export type SubscribeType = (name: string, callback: SubscribeCallbackType) => UnsubscribeCallbackType;
