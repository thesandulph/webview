export type SwType = 'ready' | 'update' | 'success';

export type SwRegistration = ServiceWorkerRegistration | null;

export type SwSubscribeCallbackType = (registration: SwRegistration, type: SwType) => void;

export type SwUnsubscribeCallbackType = () => void;
