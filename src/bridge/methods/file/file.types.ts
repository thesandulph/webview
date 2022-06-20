export enum FileEnum {
    Image = 'image',
    Video = 'video',
    Audio = 'audio',
    Other = 'other',
}

export type FileValueType = `${FileEnum}`;

export type FileUploadHeaderType = {
    key: string;
    value: any;
};

export type FileUploadHeaderObjectType = Record<string, any>;

export type FileUploadConstraintsType = {
    AllowedExtensions: string;
    FileType: FileValueType;
    MaxDuration: string | number;
    MaxFileSize: string | number;
    MaxWidth: string | number;
    MaxHeight: string | number;
    MinWidth: string | number;
    MinHeight: string | number;
};

export type FileUploadBodyType = {
    BodyValues: FileUploadHeaderType[];
    HeaderValues: FileUploadHeaderType[];
    Title: string;
    Description: string;
    DestinationUrl: string;
    Constraints: FileUploadConstraintsType;
};

export type FileUploadCompletedPayloadType = {
    errorCode: string | number;
    errorMessage: string;
    serverResponse: any;
};

export type FileUploadPayloadType = {
    httpHeader: FileUploadHeaderObjectType;
    httpBody: FileUploadHeaderObjectType;
    type: FileValueType;
    title: string;
    description: string;
    url: string;
    allowedExtensions: string;
    fileSize: string | number;
    duration: string | number;
    maxWidth: string | number;
    maxHeight: string | number;
    minWidth: string | number;
    minHeight: string | number;
};

export type FileUploadAudioPayloadType = Omit<FileUploadPayloadType, 'type' | 'allowedExtensions' | 'maxWidth' | 'maxHeight' | 'minWidth' | 'minHeight'>;

export type FileUploadImagePayloadType = Omit<FileUploadPayloadType, 'type' | 'allowedExtensions' | 'duration'>;

export type FileUploadVideoPayloadType = Omit<FileUploadPayloadType, 'type' | 'allowedExtensions'>;
