import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: '',
  id: '',
  signUpToken: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setID: (state, action) => {
            state.id = action.payload;
        },
        setsignUpToken: (state, action) => {
            state.signUpToken = action.payload;
        }
    }
});


export const { setToken, setID, setsignUpToken } = authSlice.actions;

export const selectToken = (state) => state.auth.token;
export const selectID = (state) => state.auth.id;
export const selectsignUpToken = (state) => state.auth.signUpToken;

export default authSlice.reducer;
