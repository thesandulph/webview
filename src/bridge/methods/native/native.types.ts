// todo: add payload type
export type DeepLinkPayloadType = any;

export type OpenUrlPayloadType = {
    url: string;
};

export type FrequentlyInputType = {
    id: number;
};

export type ForegroundCallbackType = {
    timeInBackground: number;
};

export type PagePayloadType = {
    title: string;
};

export type ShowButtonType = 'custom' | 'plus' | 'refresh' | 'info';

export type ShowButtonMapType = Record<ShowButtonType, number>;

export type ShowButtonPayloadType = {
    type: ShowButtonType;
    text?: string;
};

export type ShowButtonCallbackType = {
    id: number;
};
