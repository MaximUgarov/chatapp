export interface MessageMeta {
    type: string,
    licenseId: number,
    messengerType: string,
}

export interface MessageData {
    id: number | string,
    fromApi: boolean,
    fromMe: boolean,
    side: string,
    time: number,
    isForwarded: boolean,
    type: string,
    message: {
        text: string,
        caption: string,
        file: {
            link: string,
            name: string,
            contentType: string,
        },
    },
    quotedMessage: null,
    fromUser: {
        id: number,
        username: string,
        name: string,
        phone: string,
    },
    chat: {
        id: string,
        hash: string,
        type: string,
        phone: string,
        username: string,
        name: string,
        image: string,
    },
    fromApp: null,
    utm: null,
    created: null,
}

export interface MessageEvent {
    queue: string,
    payload: {
        data: Array<MessageData>,
        meta: MessageMeta,
    },
}

export interface ChatMessageMedia {
    link: string,
    name: string,
    contentType: string,
}

export interface ChatMessage {
    messager: string,
    text: string,
    caption: string,
    file: ChatMessageMedia | null,
    fromUser: {
        username: string,
        name: string,
        phone: string,
    },
}

export interface ChatState {
    messages: Array<ChatMessage>,
    isEstablishingConnection: boolean,
    isConnected: boolean,
}