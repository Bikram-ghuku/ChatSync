import { createSlice } from "@reduxjs/toolkit";

export const unameSlice = createSlice({
    name: "uname",
    initialState: {
        value: null,
        token: null,
    },
    reducers: {
        setUname: (state, action) => {
            state.name = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setUname, setToken } = unameSlice.actions;

export const selectUname = (state) => state.uname.name;
export const selectToken = (state) => state.uname.token;

export default unameSlice.reducer;
