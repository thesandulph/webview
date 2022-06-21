import {
    BridgeActionType,
    BridgePwaDataType,
} from '../bridge.types';

declare const window: any;

const setupWebViewJavascriptIframe = () => {
    const WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.style.width = '0';
    WVJBIframe.style.border = '3px solid #0f0';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
        document.documentElement.removeChild(WVJBIframe);
    }, 0);
};

const setupWebViewJavascriptBridge = (callback: Function) => {
    if ('WebViewJavascriptBridge' in window) {
        return callback(window.WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    setupWebViewJavascriptIframe();
};

const prepareData = (name: string, payload?: any): BridgePwaDataType => {
    const data: BridgePwaDataType = {
        action: name,
    };
    if (payload) {
        data.value = payload;
    }
    return data;
};

export const iosBridge: BridgeActionType = (name, payload?) => {
    console.log('=====> iosBridge name:', name);
    console.log('=====> iosBridge payload:', payload);
    const data = prepareData(name, payload);
    if (window.parent.setupWebViewJavascriptBridge) {
        window.parent.setupWebViewJavascriptBridge((bridge: any) => {
            bridge.callHandler('doAction', data);
        });
    } else {
        setupWebViewJavascriptBridge((bridge: any) => {
            bridge.callHandler('doAction', data);
        });
    }
};
