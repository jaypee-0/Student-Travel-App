import { createSlice } from "@reduxjs/toolkit";

export interface UserPropsState {
    fullName: string,
    email: string,
    mobileNumber: string,
    password: string
}
export interface UserState  {
    user: UserPropsState;
}

const initialState:UserState = {
    user: {
        fullName: "",
        email: "",
        mobileNumber: "",
        password: ""
    } 
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDoc: (state, action) => {
            state.user = action.payload
        }
    }
});

export const { setUserDoc  } = userSlice.actions;

export const selectUser = (state:any) => state.user;

export default userSlice.reducer;
