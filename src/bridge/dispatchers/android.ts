declare const window: any;

const prepareData = (payload?: any): string | undefined => {
    return payload ? JSON.stringify(payload) : undefined;
};

export const android = (name: string, payload?: any) => {
    try {
        console.log('=> ANDROID', name, ' :::>>><<<::: ', payload || 'NO PAYLOAD')
        window.parent.Android.DoAction(name, prepareData(payload));
    } catch (error) {
        console.error('Error in android dispatcher:', error);
    }
};
