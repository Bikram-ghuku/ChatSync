import { configureStore } from "@reduxjs/toolkit";
import chatIdReducer from "./slices/ChatidSlice";
import unameReducer from "./slices/Unameslice";

export default configureStore({
    reducer: {
        chatId: chatIdReducer,
        uname: unameReducer,
    },
    });