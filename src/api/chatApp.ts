import Pusher from "pusher-js";
import { chatAppConfig } from "../constants";

export const pusher = new Pusher("ChatsAppApiProdKey", {
    wsHost: chatAppConfig.wsHost,
    wssPort: chatAppConfig.wssPort,
    disableStats: chatAppConfig.disableStats,
    authEndpoint: chatAppConfig.authEndpoint,
    auth: chatAppConfig.auth,
    enabledTransports: ["ws"],
    forceTLS: chatAppConfig.forceTLS
});