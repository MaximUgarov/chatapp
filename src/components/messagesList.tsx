import type { ChatMessage } from "types";
import { MessageItem } from "./messageItem";



interface Props {
    data: Array<ChatMessage>,
}

export function MessagesList({ data }: Props) {
    return <>
        {data.map((messgae, index) =>
            <MessageItem key={index} data={messgae} />
        )}
    </>;
}