import { API_URL, CALLBACK_URL, PPS_URL, SEATS_URL } from "../api_urls";
import { AUTH_TOKEN, METHOD_POST, SEAT_NAME } from "../constants"
import { wrappedFetch } from "../fetchFuncs";
import { retreiveSessionData } from "./sessionHelpers"

export const triggerEvent  = (data) => {
    return new Promise((resolve, reject) => {
        try{
            const auth_token = retreiveSessionData(AUTH_TOKEN);
            const seat_name = retreiveSessionData(SEAT_NAME);
            const PPS_ID = seat_name.split("_")[1];
            const { REACT_APP_CORE_IP } = process.env;
            const URL =`${REACT_APP_CORE}${PPS_URL}${PPS_ID}${API_URL}${SEATS_URL}${seat_name}${CALLBACK_URL}`;
            const response = await wrappedFetch(URL, METHOD_POST, JSON.stringify(data) );
            console.log('response', response)
            resolve(response)
        }catch(err){
            console.log('err trigerring event');
            reject(err)
        }
    })
}