import {useMemo} from 'react';

export type QueryParamsType = Record<string, string>;

export const parseQueryParams = (search = '?'): QueryParamsType => {
    const query = search.startsWith('?') ? search.split('?')[1] : search;
    return query.split('&').reduce((accumulator, item) => {
        const [key, value] = item.split('=');
        return {
            ...accumulator,
            [key]: value,
        };
    }, {});
};

export const useQueryParams = (search: string): QueryParamsType => {
    return useMemo(() => {
        return parseQueryParams(search);
    }, [search]);
};
