import {BridgeActionType} from '../bridge.types';

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

export const iosBridge: BridgeActionType = (action, payload = null) => {
    const options = {action, value: payload};
    if (window.parent.setupWebViewJavascriptBridge) {
        window.parent.setupWebViewJavascriptBridge((bridge: any) => {
            bridge.callHandler('doAction', options);
        });
    } else {
        setupWebViewJavascriptBridge((bridge: any) => {
            bridge.callHandler('doAction', options);
        });
    }
};
