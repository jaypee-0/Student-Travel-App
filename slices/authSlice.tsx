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
        }
    }
});


export const { setToken, setID } = authSlice.actions;

export const selectToken = (state:any) => state.auth.token;
export const selectID = (state:any) => state.auth.id;

export default authSlice.reducer;
