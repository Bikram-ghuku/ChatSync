import { createSlice } from "@reduxjs/toolkit";

export const chatIdSlice = createSlice({
    name: "chatId",
    initialState: {
        value: null,
    },
    reducers: {
        setChatId: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setChatId } = chatIdSlice.actions;

export const selectChatId = (state) => state.chatId.value;

export default chatIdSlice.reducer;
