import {bridge} from '../../bridge';

export const display = (visible: boolean): void => {
    bridge.dispatch(`loading.${visible ? 'Show' : 'Hide'}`);
};
