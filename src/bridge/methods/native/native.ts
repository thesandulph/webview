import {bridge} from '../../bridge';
import {
    SubscribeCallbackType,
    UnsubscribeCallbackRecordType,
} from '../../event.types';
import {
    DeepLinkPayloadType,
    OpenUrlPayloadType,
    FrequentlyInputType,
    ForegroundCallbackType,
    PagePayloadType,
    ShowButtonMapType,
    ShowButtonCallbackType,
    ShowButtonPayloadType,
} from './native.types';

const unsubscribe: UnsubscribeCallbackRecordType = {
    subscribeToBack: () => {},
    plusButton: () => {},
    refreshButton: () => {},
    foreground: () => {},
    getData: () => {},
    setFrequentlyInputData: () => {},
    payment: () => {},
};

const typeMap: ShowButtonMapType = {
    custom: 0,
    plus: 1,
    refresh: 2,
    info: 3,
};

export const showButton = (payload: ShowButtonPayloadType, callback: SubscribeCallbackType<ShowButtonCallbackType>) => {
    bridge.dispatch('appBarButton.Show', {
        id: typeMap[payload.type],
        ...(payload.text ? {text: payload.text} : {}),
    });
    unsubscribe.plusButton();
    unsubscribe.plusButton = bridge.subscribe('appBarButton.Pressed', callback);
};

export const hideButton = () => {
    unsubscribe.plusButton();
    bridge.dispatch('appBarButton.Hide');
};

export const deepLink = (payload: DeepLinkPayloadType) => {
    bridge.dispatch('openDeepLink', payload);
};

export const openUrl = (payload: OpenUrlPayloadType) => {
    bridge.dispatch('system.OpenUrl', payload);
};

export const foreground = (callback: SubscribeCallbackType<ForegroundCallbackType>) => {
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

export const page = (payload: PagePayloadType) => {
    bridge.dispatch('pageTitle.Set', {
        title: payload.title
    });
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
