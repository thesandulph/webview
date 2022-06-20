import {bridge} from '../../bridge';
import {
    EventCallbackType,
    UnsubscribeObjectType
} from '../../bridge.types';
import {
    DeepLinkPayloadType,
    SharePayloadType,
    FrequentlyInputType,
} from './native.types';

const unsubscribe: UnsubscribeObjectType = {
    subscribeToBack: () => {
    },
    plusButton: () => {
    },
    refreshButton: () => {
    },
    foreground: () => {
    },
    getData: () => {
    },
    setFrequentlyInputData: () => {
    },
    payment: () => {
    },
};

export const deepLink = (payload: DeepLinkPayloadType) => {
    bridge.callAction('openDeepLink', payload);
};

export const openUrl = (url: string) => {
    bridge.callAction('system.OpenUrl', {
        url,
        preferredApp: bridge.platform,
    });
};

export const share = (payload: SharePayloadType) => {
    bridge.callAction('onShare', payload);
};

export const foreground = (callback: EventCallbackType) => {
    unsubscribe.foreground();
    unsubscribe.foreground = bridge.subscribeEvent('comeForeground', callback);
};

export const getData = (callback: EventCallbackType) => {
    unsubscribe.getData();
    unsubscribe.getData = bridge.subscribeEvent('setExtraData', callback);
    bridge.callAction('getExtraData');
};

export const setFrequentlyInput = (payload: FrequentlyInputType, callback: EventCallbackType) => {
    unsubscribe.setFrequentlyInputData();
    unsubscribe.setFrequentlyInputData = bridge.subscribeEvent('setFrequentlyInputData', callback);
    bridge.callAction('getFrequentlyInputData', payload);
};

export const setPageTitle = (title: string) => {
    bridge.callAction('pageTitle.Set', title);
};

export const goBack = () => {
    bridge.callAction('goBack');
};

export const nativeBack = () => {
    bridge.triggerEvent('backButton.Pressed');
};

export const subscribeToBack = (callback: EventCallbackType) => {
    unsubscribe.subscribeToBack();
    unsubscribe.subscribeToBack = bridge.subscribeEvent('backButton.Pressed', callback);
};

export const showPlusButton = (callback: EventCallbackType) => {
    bridge.callAction('plusButton.Show');
    unsubscribe.plusButton();
    unsubscribe.plusButton = bridge.subscribeEvent('plusButton.Pressed', callback);
};

export const hidePlusButton = () => {
    unsubscribe.plusButton();
    bridge.callAction('plusButton.Hide');
};

export const showRefreshButton = (callback: EventCallbackType) => {
    bridge.callAction('refreshButton.Show');
    unsubscribe.refreshButton();
    unsubscribe.refreshButton = bridge.subscribeEvent('refreshButton.Pressed', callback);
};

export const hideRefreshButton = () => {
    unsubscribe.refreshButton();
    bridge.callAction('refreshButton.Hide');
};
