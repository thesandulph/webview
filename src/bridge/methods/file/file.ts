import {bridge} from '../../bridge';
import {UnsubscribeObjectType} from '../../bridge.types';
import {
    FileUploadBodyType,
    FileUploadPayloadType,
    FileUploadAudioPayloadType,
    FileUploadImagePayloadType,
    FileUploadVideoPayloadType,
    FileUploadCompletedPayloadType,
} from './file.types';

const unsubscribe: UnsubscribeObjectType = {
    upload: () => {
    },
};

const prepareBody = (payload: FileUploadPayloadType): FileUploadBodyType => {
    const bodyValues = Object.keys(payload.httpBody).map((item) => ({
        key: item,
        value: payload.httpBody[item],
    }))
    const headerValues = Object.keys(payload.httpHeader).map((item) => ({
        key: item,
        value: payload.httpHeader[item],
    }))
    return {
        BodyValues: bodyValues,
        HeaderValues: headerValues,
        Title: payload.title,
        Description: payload.description,
        DestinationUrl: payload.url,
        Constraints: {
            AllowedExtensions: payload.allowedExtensions,
            MaxFileSize: payload.fileSize,
            FileType: payload.type,
            MaxDuration: payload.duration,
            MaxWidth: payload.maxWidth,
            MaxHeight: payload.maxHeight,
            MinWidth: payload.minWidth,
            MinHeight: payload.minHeight,
        },
    };
};

const prepareErrorMessage = (code: string | number, message: string): string => {
    if (message && message.trim()) {
        return message;
    }
    switch (+code) {
        case -1:
            return 'لطفاً ارتباط خود را چک کنید.';
        case -2:
            return 'خطای داخلی سیستم.';
        case -3:
            return 'لطفاً ارتباط خود را چک کنید.';
        case -4:
            return 'خطای نامشخص.';
        case -5:
            return 'انصراف توسط کاربر.';
        default:
            return 'خطای نامشخص';
    }
};

export const upload = (payload: FileUploadPayloadType): Promise<any> => {
    return new Promise((resolve, reject) => {
        console.log('=====> check', bridge.platform === 'android' , ' -:- ', JSON.stringify(payload));
        if (bridge.platform === 'android') {
            console.log('=====> prepareBody');
            unsubscribe.upload = bridge.subscribeEvent('file.UploadCompleted', (event: any) => {
                console.log('=====> EVENT', event);
                unsubscribe.upload();
                const response = JSON.parse(event);
                response.errorCode = isNaN(response.errorCode) ? 0 : +response.errorCode;
                if (response.errorCode) {
                    let errorMessage = '';
                    if (response.errorCode !== -5) {
                        errorMessage = prepareErrorMessage(response.errorCode, response.errorMessage);
                    }
                    reject(errorMessage);
                } else {
                    resolve(response);
                }
            });
            bridge.callAction('file.Upload');
        } else {
            reject('این متد تنها مربوط به پلتفرم اندروید میباشد');
        }
    });
};

export const uploadAudio = (payload: FileUploadAudioPayloadType): Promise<any> => {
    return upload({
        ...payload,
        maxWidth: 0,
        maxHeight: 0,
        minWidth: 0,
        minHeight: 0,
        type: 'audio',
        allowedExtensions: '.mp3,.wma,.aac,.wav,.wave,.mid,.ogg'
    });
};

export const uploadImage = (payload: FileUploadImagePayloadType): Promise<any> => {
    return upload({
        ...payload,
        duration: 0,
        type: 'image',
        allowedExtensions: '.jpg,.jpeg,.png,.gif'
    });
};

export const uploadVideo = (payload: FileUploadVideoPayloadType): Promise<any> => {
    return upload({
        ...payload,
        type: 'video',
        allowedExtensions: '.mp4,.avi,.3gp,.flv,.mkv,.wmv,.mov'
    });
};

export const uploadCompleted = (payload: FileUploadCompletedPayloadType): void => {
    bridge.triggerEvent('file.UploadCompleted', JSON.stringify(payload));
};
