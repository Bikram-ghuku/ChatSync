import { createSlice } from "@reduxjs/toolkit";

export const unameSlice = createSlice({
    name: "uname",
    initialState: {
        name: null,
        token: null,
        id: null,
    },
    reducers: {
        setUname: (state, action) => {
            state.name = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setId: (state, action) => {
            state.id = action.payload;
        },
    },
});

export const { setUname, setToken, setId } = unameSlice.actions;

export const selectUname = (state) => state.uname.name;
export const selectToken = (state) => state.uname.token;
export const selectId = (state) => state.uname.id;

export default unameSlice.reducer;
