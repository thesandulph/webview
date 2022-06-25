import {DispatcherType} from '../bridge.types';

declare const window: any;

const setupIosIframe = () => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.style.width = '0';
    iframe.style.border = 'unset';
    iframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(iframe);
    setTimeout(function () {
        document.documentElement.removeChild(iframe);
    }, 0);
};

const prepareCallback = (name: string, payload?: any): Function => {
    return (bridge: any) => {
        bridge.callHandler('doAction', {
            action: name,
            ...(payload ? {value: payload} : {})
        });
    };
}

export const ios: DispatcherType = (name, payload?) => {
    const callback = prepareCallback(name, payload);
    if (window.parent.setupWebViewJavascriptBridge) {
        window.parent.setupWebViewJavascriptBridge(callback);
    } else if ('WebViewJavascriptBridge' in window) {
        return callback(window.WebViewJavascriptBridge);
    } else {
        window.WVJBCallbacks = [...(window.WVJBCallbacks || []), callback];
        setupIosIframe();
    }
};
