import type { RootState } from "../";
import type { Middleware } from "redux";
import type { Action } from "@reduxjs/toolkit";
import type { MessageEvent } from "types";

import { pusher } from "api/chatApp";
import {
    startConnecting,
    connectionEstablished,
    receiveMessage
} from "../slices/chat";
import { parseMessageEvent } from "utils";
import { chatAppConfig } from "../../constants";



const chatMiddleware: Middleware<object, RootState> = (store) => (next) => (action: Action): void => {
    if (startConnecting.match(action)) {

        pusher.connection.bind("connected", () => {
            store.dispatch(connectionEstablished());
        });

        const chanels = chatAppConfig.chanels.map((chanel) => pusher.subscribe(chanel));

        chanels.forEach((chanel) => chanel.bind("message", (data: MessageEvent): void => {
            store.dispatch(receiveMessage(parseMessageEvent(data)));
        }));

    }
    next(action);
};

export default chatMiddleware;