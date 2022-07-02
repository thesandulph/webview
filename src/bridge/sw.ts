import * as event from './event';
import {
    SwRegistration,
    SwSubscribeCallbackType,
    SwUnsubscribeCallbackType,
} from './sw.types';

const events = {
    ready: 'sw:ready',
    update: 'sw:update',
    success: 'sw:success',
};

navigator.serviceWorker.ready.then((registration) => {
    event.broadcast(events.ready, registration);
});

export const config = {
    onUpdate: (registration: ServiceWorkerRegistration) => {
        event.broadcast(events.update, registration);
    },
    onSuccess: (registration: ServiceWorkerRegistration) => {
        event.broadcast(events.success, registration);
    },
};

export const subscribe = (callback: SwSubscribeCallbackType): SwUnsubscribeCallbackType => {
    const unsubscribe= {
        ready: event.subscribe(events.ready, (registration: SwRegistration) => callback(registration, 'ready')),
        update: event.subscribe(events.update, (registration: SwRegistration) => callback(registration, 'update')),
        success: event.subscribe(events.success, (registration: SwRegistration) => callback(registration, 'success')),
    };
    return () => {
        unsubscribe.ready();
        unsubscribe.update();
        unsubscribe.success();
    };
};

export const hasUpdate = (registration: SwRegistration) => {
    return registration?.waiting?.state === 'installed';
};

export const skipWaiting = (registration: SwRegistration, reload: boolean) => {
    registration?.waiting?.postMessage({type: 'SKIP_WAITING'});
    registration?.waiting?.addEventListener('statechange', (event: any) => {
        if (reload && event.target.state === 'activated') {
            window.location.reload();
        }
    });
};
