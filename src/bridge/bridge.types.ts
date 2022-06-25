import {
    BroadcastType,
    SubscribeType,
} from './event.types';

export type PlatformType = 'android' | 'ios' | 'pwa';

export type DispatcherType = (name: string, payload?: any) => void;

export type SetupOptionsType = {
    broadcast: BroadcastType,
    subscribe: SubscribeType,
};

export type SetupType = (platform: PlatformType, options: SetupOptionsType) => void;

export interface IBridge {
    platform: PlatformType;
    setup: SetupType;
    dispatch: DispatcherType;
    broadcast: BroadcastType;
    subscribe: SubscribeType;
}
