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
        this.dispatch = dispatcher[platform] || this.dispatch;
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
        console.error('Platform property not specified, you must be call `bridge.core.setup`, platform must be one of `android | ios | pwa`');
    }

    broadcast(name: string, payload?: any): void {
        console.error('broadcast method is not defined, you must be call `bridge.core.setup` and define broadcast method in options arguments');
    }

    subscribe(name: string, callback: SubscribeCallbackType): UnsubscribeCallbackType {
        console.error('subscribe method is not defined, you must be call `bridge.core.setup` and define subscribe method in options arguments');
        return () => {};
    }
}

export const bridge = new Bridge();
