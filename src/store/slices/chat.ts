import type { PayloadAction } from "@reduxjs/toolkit";
import type { ChatMessage, ChatState } from "types";
import { createSlice } from "@reduxjs/toolkit";



const initialState: ChatState = {
    messages: [],
    isEstablishingConnection: false,
    isConnected: false
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        startConnecting: (state) => {
            state.isEstablishingConnection = true;
        },
        connectionEstablished: (state) => {
            state.isConnected = true;
            state.isEstablishingConnection = true;
        },
        receiveMessage: (state, action: PayloadAction<Array<ChatMessage>>) => {
            state.messages = state.messages.concat(action.payload);
        },
    },
});

export const { startConnecting, connectionEstablished, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;