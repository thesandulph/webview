import {useCallback, useEffect, useMemo, useState} from 'react';
import {sw, SwRegistration} from '../bridge';

export type UseSwType = {
    updated: boolean;
    registration: SwRegistration;
    skipWaiting: (reload?: boolean) => void;
};

export const useSw = (): UseSwType => {
    const [registration, setRegistration] = useState<SwRegistration | null>(null);

    const updated = useMemo(() => {
        return sw.hasUpdate(registration);
    }, [registration]);

    const skipWaiting = useCallback((reload = false) => {
        sw.skipWaiting(registration, reload);
    }, [registration])

    useEffect(() => {
        const unsubscribe = sw.subscribe((registration) => {
            setRegistration(registration);
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
