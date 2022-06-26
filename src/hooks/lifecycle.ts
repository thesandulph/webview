import {useEffect} from 'react';

export type UseDidMountType = () => void;

export const useDidMount = (callback: UseDidMountType) => {
    useEffect(() => {
        callback();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
