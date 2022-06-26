import {useMemo} from 'react';

export type UseQueryParamsType = Record<string, string>;

export const useQueryParams = (search = '?'): UseQueryParamsType => {
    return useMemo(() => {
        const query = search.startsWith('?') ? search.split('?')[1] : search;
        return query.split('&').reduce((accumulator, item) => {
            const [key, value] = item.split('=');
            return {
                ...accumulator,
                [key]: value,
            };
        }, {});
    }, [search]);
};
