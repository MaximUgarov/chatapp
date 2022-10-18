import type { RootState } from "./";



export const messagesSelector = (state: RootState) => state.chat.messages;
export const isConnectedSelector = (state: RootState) => state.chat.isConnected;