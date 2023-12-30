import { configureStore } from "@reduxjs/toolkit";
import chatIdReducer from "./slices/chatidSlice";
import unameReducer from "./slices/unameslice";

export default configureStore({
    reducer: {
        chatId: chatIdReducer,
        uname: unameReducer,
    },
    });