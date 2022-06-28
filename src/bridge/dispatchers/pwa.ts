declare const window: any;


const prepareCallback = (name: string): Function => {
    return name.split('.')
        .reduce((accumulator: any, item: string) => accumulator[item], window.parent);
};

export const pwa = (name: string, payload?: any) => {
    try {
        const callback = prepareCallback(name);
        callback(payload);
    } catch (error) {
        console.error('Error in pwa dispatcher:', error);
    }
};
