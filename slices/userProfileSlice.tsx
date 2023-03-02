import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    about: "",
    country: "",
    state: "",
    lat: "",
    lng: "",
    relationship: "",
    reason: "",
    pic: ""
};

export const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        setUserAbout: (state, action) => {
            state.about = action.payload
        },
        setUserCountry: (state, action) => {
            state.country = action.payload
        },
        setUserState: (state, action) => {
            state.state = action.payload
        },
        setUserRelationship: (state, action) => {
            state.relationship = action.payload
        },
        setUserReason: (state, action) => {
            state.reason = action.payload
        },
        setUserLat: (state, action) => {
            state.lat = action.payload
        },
        setUserLng: (state, action) => {
            state.lng = action.payload
        },
        setUserPic: (state,  action: PayloadAction<string>) => {
            state.pic = action.payload
        }
    }
});

export const { setUserAbout, setUserPic, setUserCountry, setUserState, setUserRelationship, setUserReason, setUserLat, setUserLng } = userProfileSlice.actions;

export const selectUserCountry = (state:any) => state.userProfile.country;
export const selectUserState = (state:any) => state.userProfile.state;
export const selectUserRelationship = (state:any) => state.userProfile.relationship;
export const selectUserAbout = (state:any) => state.userProfile.about;
export const selectUserReason = (state:any) => state.userProfile.reason;
export const selectUserLat = (state:any) => state.userProfile.lat;
export const selectUserLng = (state:any) => state.userProfile.lng;
export const selectUserPic = (state:any) => state.userProfile.pic;

export default userProfileSlice.reducer;
