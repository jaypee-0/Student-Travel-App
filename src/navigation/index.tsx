import Auth from "./Auth";
import Main from "./Main";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Navigation() {
    //const [token, settoken] = useState(null);
    //console.log(token, "TOKEN");
    //const retrieveData = async (key) => {
    //    try {
    //        const data = await AsyncStorage.getItem(key);
    //        if (data !== null) {
    //            return data;
    //        }
    //    } catch (error) {
    //        console.log(error, "Error Retrieving");
    //    }
    //};
    //useLayoutEffect(async () => {
    //    let token = await retrieveData("token");
    //    settoken(token);
    //}, []);

    let isTokenPresent = useSelector(selectToken)

    return isTokenPresent ? <Main /> : <Auth />;
}
