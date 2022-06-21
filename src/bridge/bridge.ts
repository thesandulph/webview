import {
    PlatformType,
    IBridgeCore,
    EventCallbackType,
    UnsubscribeType,
} from './bridge.types';
import {
    androidBridge,
    iosBridge,
    pwaBridge,
} from './native';

declare const window: any;

class Bridge implements IBridgeCore {
    static _platform: PlatformType;

    set platform(value) {
        if (!Bridge._platform) {
            Bridge._platform = value;
        }
    }

    get platform() {
        return Bridge._platform;
    }

    setup(platform: PlatformType): void {
        this.platform = platform;
        this.setupWindow();
        this.callAction('webApp.Ready');
    }

    setupWindow() {
        window.webApp = {
            trigger: this.triggerEvent,
        };
    }

    callAction(name: string, payload?: any): void {
        try {
            console.log('=====> callAction', this.platform);
            console.log('=====> callAction name:', name);
            console.log('=====> callAction payload:', payload);
            if (!this.platform) {
                throw new Error('Platform property not specified, you must be call `bridge.ready( [PLATFORM] )`, PLATFORM must be one of `android | ios | pwa`');
            }
            if (this.platform === 'android') {
                androidBridge(name, payload);
            }
            if (this.platform === 'ios') {
                iosBridge(name, payload);
            }
            if (this.platform === 'pwa') {
                pwaBridge(name, payload);
            }
        } catch (error) {
            throw error;
        }
    }

    triggerEvent(name: string, payload?: any): void {
        const event = new CustomEvent(name, {detail: payload});
        window.dispatchEvent(event);
    }

    subscribeEvent(name: string, callback: EventCallbackType): UnsubscribeType {
        console.log('=====> subscribeEvent', name)
        const subscription = (event: any) => {
            console.log('=====> subscribeEvent.subscription', name, JSON.stringify(event))
            callback(event.detail)
        };
        window.addEventListener(name, subscription);
        return () => {
            window.removeEventListener(name, subscription);
        };
    }
}

export const bridge = new Bridge();
