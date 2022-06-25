import {
    IBridge,
    PlatformType,
    SetupOptionsType,
} from './bridge.types';
import {
    SubscribeCallbackType,
    UnsubscribeCallbackType,
} from './event.types';
import { dispatcher } from './dispatchers';

declare const window: any;

class Bridge implements IBridge {
    static _platform: PlatformType;

    set platform(value) {
        if (!Bridge._platform) {
            Bridge._platform = value;
        }
    }

    get platform() {
        return Bridge._platform;
    }

    setup(platform: PlatformType, options: SetupOptionsType): void {
        this.platform = platform;
        this.dispatch = dispatcher[platform];
        this.broadcast = options.broadcast;
        this.subscribe = options.subscribe;
        this.setupWindow();
        this.ready();
    }

    private setupWindow() {
        window.webApp = {
            trigger: this.broadcast,
        };
    }

    private ready() {
        this.dispatch('webApp.Ready');
    }

    dispatch(name: string, payload?: any): void {
        throw new Error('Platform property not specified, you must be call `bridge.core.setup`, PLATFORM must be one of `android | ios | pwa`');
    }

    broadcast(name: string, payload?: any): void {
        throw new Error('triggerEvent method is not defined, you must be call `bridge.core.setup` and define triggerEvent method in options arguments');
    }

    subscribe(name: string, callback: SubscribeCallbackType): UnsubscribeCallbackType {
        throw new Error('subscribeEvent method is not defined, you must be call `bridge.core.setup` and define subscribeEvent method in options arguments');
    }
}

export const bridge = new Bridge();
