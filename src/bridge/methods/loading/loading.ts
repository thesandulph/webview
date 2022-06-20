import {bridge} from '../../bridge';

export const display = (visible: boolean): void => {
    bridge.callAction(`loading.${visible ? 'Show' : 'Hide'}`);
};
