import {bridge} from '../../bridge';
import {LoadingDisplayPayloadType} from './loading.types';

export const display = (payload: LoadingDisplayPayloadType): void => {
    if (payload.visible) {
        bridge.dispatch('loading.Show');
    } else {
        bridge.dispatch('loading.Hide');
    }
};
