import env from "@/shared/utils/envs";
import {store} from "@/redux/store";
import {PersistPartial} from "redux-persist/es/persistReducer";
import type {BaseQueryFn} from "@reduxjs/toolkit/query";
import type {AxiosError, AxiosRequestConfig} from "axios";
import axios from "axios";

const { API_BASE_URI } = env;

const axiosInstance = axios.create({
    baseURL: API_BASE_URI
})

export const axiosBaseQuery = (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
): BaseQueryFn<
    {
        url: string
        method: AxiosRequestConfig['method']
        data?: AxiosRequestConfig['data']
        params?: AxiosRequestConfig['params']
        headers?: AxiosRequestConfig['headers'],
    },
    unknown,
    unknown
    > =>
    async ({ url, method, data, params, headers }) => {
        
        try {
            console.log("Fhdfhfdhdhd", `Bearer ${store.getState().authReducer.user.token}`)
            const result = await axiosInstance({
                url,
                method,
                data: method === 'GET' ? null :  data,
                params,
                headers: {
                    'Authorization': `Bearer ${store.getState().authReducer.user.token}`
                }
            })
            
            return { data: result.data }
        } catch (axiosError) {
            console.log(axiosError)
            let err = axiosError as AxiosError
    
            console.log(err)
            
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        }
    }

export const returnAPICall = (url: string, method: string) => {
    
    return {
        query: (body: any) => {
            
            if (method === "GET") {
                return ({
                    url: body.url || url,
                    method,
                })
            } else {
                return ({
                    url: body.url || url,
                    method,
                    body
                })
            }
        },
        transformResponse: (response: { data: any; }) => {
            return  response.data
        }
    }
}
