import { createSlice } from "@reduxjs/toolkit";

export const unameSlice = createSlice({
    name: "uname",
    initialState: {
        value: null,
    },
    reducers: {
        setUname: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setUname } = unameSlice.actions;

export const selectUname = (state) => state.uname.value;

export default unameSlice.reducer;
