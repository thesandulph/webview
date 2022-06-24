export enum PlatformEnum {
    Android = 'android',
    Ios = 'ios',
    PWA = 'pwa',
}

export type PlatformType = `${PlatformEnum}`;

export type UnsubscribeType = () => void;

export type UnsubscribeObjectType = Record<string, UnsubscribeType>;

export type EventCallbackType = (event?: any) => void;

export type BridgeSetupType = (platform: PlatformType) => void;

export type BridgeActionType = (name: string, payload?: any) => void;

export type BridgeSubscribeType = (name: string, callback: EventCallbackType) => UnsubscribeType;

export interface IBridgeCore {
    platform: PlatformType;
    setup: BridgeSetupType;
    callAction: BridgeActionType;
    triggerEvent: BridgeActionType;
    subscribeEvent: BridgeSubscribeType;
}
