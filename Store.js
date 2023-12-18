import { configureStore } from "@reduxjs/toolkit";
import chatIdReducer from "./slices/chatidSlice";

export default configureStore({
    reducer: {
        chatId: chatIdReducer,
    },
    });