import { mediaFormats } from "./constants";
import type { ChatMessage, MessageEvent, MessageData, ChatMessageMedia } from "types";

function parseMediaFromMessage(message: MessageData): ChatMessageMedia | null {
    const { file } = message.message;
    if (!file) return null;
    return {
        name: file.name,
        link: file.link,
        contentType: file.contentType ?
            file.contentType.split("/")[0] :
            mediaFormats.find(({ fromats }) =>
                fromats.includes(file.link.split(".").pop() || ""))?.type || "application"
    };
}

export function parseMessageEvent(event: MessageEvent): Array<ChatMessage> {
    const { data, meta } = event.payload;
    return data.filter(({ fromMe }) => !fromMe)
        .map((message: MessageData) => ({
            messager: meta.messengerType,
            text: message.message.text,
            caption: message.message.caption,
            file: parseMediaFromMessage(message),
            fromUser: {
                username: message.fromUser.username,
                name: message.fromUser.name,
                phone: message.fromUser.phone,
            },
        }));
}