export type SwType = 'ready' | 'update' | 'success';

export type SwRegistration = ServiceWorkerRegistration | null;

export type SwEventType = {
    type: SwType;
    registration: SwRegistration;
};

export type SwSubscribeCallbackType = (event: SwEventType) => void;

export type SwUnsubscribeCallbackType = () => void;
