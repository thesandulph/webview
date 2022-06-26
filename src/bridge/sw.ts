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
    console.log('=> navigator.serviceWorker.ready:', registration)
});

export const config = {
    onReady: (registration: ServiceWorkerRegistration) => {
        console.log('=> SW Config onReady', registration);
        event.broadcast(events.ready, {type: 'ready', registration});
    },
    onUpdate: (registration: ServiceWorkerRegistration) => {
        console.log('=> SW Config onUpdate', registration);
        event.broadcast(events.update, {type: 'update', registration});
    },
    onSuccess: (registration: ServiceWorkerRegistration) => {
        console.log('=> SW Config onSuccess', registration);
        event.broadcast(events.success, {type: 'success', registration});
    },
};

export const subscribe = (callback: SwSubscribeCallbackType): SwUnsubscribeCallbackType => {
    const unsubscribe= {
        ready: event.subscribe(events.ready, callback),
        update: event.subscribe(events.update, callback),
        success: event.subscribe(events.success, callback),
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

export const skipWaiting = (registration: SwRegistration) => {
    registration?.waiting?.postMessage({type: 'SKIP_WAITING'});
    registration?.waiting?.addEventListener('statechange', (event: any) => {
        if (event.target.state === 'activated') {
            window.location.reload();
        }
    });
};
