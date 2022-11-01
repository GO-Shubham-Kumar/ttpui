import { API_URL, CALLBACK_URL, PPS_URL, SEATS_URL } from "../api_urls";
import { AUTH_TOKEN, METHOD_POST, SEAT_NAME } from "../constants"

import { retreiveSessionData } from "./sessionHelpers"
import { wrappedFetch } from "../fetchFuncs";

export const triggerEvent  = (data, seatName) => {
    return new Promise( async (resolve, reject) => {
        try{
            const seat_name = retreiveSessionData(SEAT_NAME);
            const PPS_ID = seat_name.split("_")[1];
            const { CORE_IP } = window.globalConfigs;
            const URL =`${CORE_IP}${PPS_URL}${PPS_ID}${API_URL}${SEATS_URL}/${seat_name}${CALLBACK_URL}`;
            const response = await wrappedFetch(URL, METHOD_POST, data );
            console.log('response', response)
            resolve(response)
        }catch(err){
            console.log('err trigerring event');
            reject(err)
        }
    })
}