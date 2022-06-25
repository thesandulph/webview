export type MessageType = 'general' | 'info' | 'success' | 'error' | 'fatal';

export type MessageMapType = Record<MessageType, number>;

export type MessageDisplayPayloadType = {
    type: MessageType;
    title: string;
    message: string | string[];
};
