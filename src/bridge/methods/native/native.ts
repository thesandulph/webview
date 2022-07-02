import {bridge} from '../../bridge';
import {
    SubscribeCallbackType,
    UnsubscribeCallbackRecordType,
} from '../../event.types';
import {
    DeepLinkPayloadType,
    SharePayloadType,
    FrequentlyInputType,
} from './native.types';

const unsubscribe: UnsubscribeCallbackRecordType = {
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
    bridge.dispatch('openDeepLink', payload);
};

export const openUrl = (url: string) => {
    bridge.dispatch('system.OpenUrl', {
        url,
        preferredApp: bridge.platform,
    });
};

export const share = (payload: SharePayloadType) => {
    bridge.dispatch('onShare', payload);
};

export const foreground = (callback: SubscribeCallbackType) => {
    unsubscribe.foreground();
    unsubscribe.foreground = bridge.subscribe('comeForeground', callback);
};

export const getData = (callback: SubscribeCallbackType) => {
    unsubscribe.getData();
    unsubscribe.getData = bridge.subscribe('setExtraData', callback);
    bridge.dispatch('getExtraData');
};

export const setFrequentlyInput = (payload: FrequentlyInputType, callback: SubscribeCallbackType) => {
    unsubscribe.setFrequentlyInputData();
    unsubscribe.setFrequentlyInputData = bridge.subscribe('setFrequentlyInputData', callback);
    bridge.dispatch('getFrequentlyInputData', payload);
};

export const setPageTitle = (title: string) => {
    bridge.dispatch('pageTitle.Set', title);
};

export const back = () => {
    bridge.dispatch('goBack');
};

export const pressBack = () => {
    bridge.broadcast('backButton.Pressed');
};

export const handleBack = (callback: SubscribeCallbackType) => {
    unsubscribe.subscribeToBack();
    unsubscribe.subscribeToBack = bridge.subscribe('backButton.Pressed', callback);
};

export const showPlusButton = (callback: SubscribeCallbackType) => {
    bridge.dispatch('plusButton.Show');
    unsubscribe.plusButton();
    unsubscribe.plusButton = bridge.subscribe('plusButton.Pressed', callback);
};

export const hidePlusButton = () => {
    unsubscribe.plusButton();
    bridge.dispatch('plusButton.Hide');
};

export const showRefreshButton = (callback: SubscribeCallbackType) => {
    bridge.dispatch('refreshButton.Show');
    unsubscribe.refreshButton();
    unsubscribe.refreshButton = bridge.subscribe('refreshButton.Pressed', callback);
};

export const hideRefreshButton = () => {
    unsubscribe.refreshButton();
    bridge.dispatch('refreshButton.Hide');
};
