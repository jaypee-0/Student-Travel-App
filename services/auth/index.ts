import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {
    AUTH_API, 
    CREATE_USER,
    GENERATE_OTP,
    SIGN_IN_USER,
    VERIFY_SIGN_UP_OTP
} from "@/services/constants";
import {DELETE, POST} from "@/services/networking/constants";
import env from "@/shared/utils/envs";
import {RootState} from "@/store/store";

const { API_BASE_URI } = env;
console.log(API_BASE_URI, "<=== API_BASE_URI")

export interface SignInUser {
    email: string,
    password: string
}
export interface SetPin {
    email: string,
    pin: string
}
export interface CreateUser {
    email: string,
    password: string
    authType: string
}
export interface VerifyEmailOTP {
    email: string,
    otp: string,
}
export interface GenerateOTP {
    email: string
}
// Define a service using a base URL and expected endpoints
export const AuthApi = createApi({
    reducerPath: AUTH_API,
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URI,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).authReducer.user?.token
            
            console.log(`Bearer ===>`, token)
            
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            
            return headers
        },
    }),
    endpoints: (build) => ({
        verifySignUpOTP: build.mutation<VerifyEmailOTP, Partial<VerifyEmailOTP> & Pick<VerifyEmailOTP, 'email'>>
        (returnAPICall(VERIFY_SIGN_UP_OTP, POST))     
    }),
})

export const {
    useVerifySignUpOTPMutation,
} = AuthApi
