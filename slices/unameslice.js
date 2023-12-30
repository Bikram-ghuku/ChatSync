import { createSlice } from "@reduxjs/toolkit";

export const UnameSlice = createSlice({
    name: "chatId",
    initialState: {
        value: null,
    },
    reducers: {
        setUname: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setChatId } = UnameSlice.actions;

export const selectUname = (state) => state.Uname.value;

export default UnameSlice.reducer;
