import {useCallback, useEffect, useMemo, useState} from 'react';
import {sw, SwRegistration} from '../bridge';

export type UseSwType = {
    updated: boolean;
    registration: SwRegistration;
    skipWaiting: () => void;
};

export const useSw = (): UseSwType => {
    const [registration, setRegistration] = useState<SwRegistration | null>(null);

    const updated = useMemo(() => {
        return sw.hasUpdate(registration);
    }, [registration]);

    const skipWaiting = useCallback(() => {
        sw.skipWaiting(registration);
    }, [registration])

    useEffect(() => {
        const unsubscribe = sw.subscribe((event) => {
            console.log('=> SW Subscription', event.type, event.registration);
            setRegistration(event.registration);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return {
        updated,
        registration,
        skipWaiting,
    };
};
