import { AUTH_TOKEN, PPS_SEATS, REFRESH_TOKEN, SEAT_NAME, SESSION_DATA, USER_NAME } from "../constants";
import { wrappedGet, wrappedFetch } from "../fetchFuncs"
import * as API_URLS from './../api_urls';
import { removeSessionData, retreiveSessionData, saveSessionData } from "./sessionHelpers";
const { REACT_APP_PLATFORM_IP } = process.env;

//function to login a user
export const loginUser = async ( username, password, seat_name, role, barcode ) => {
    return new Promise(async (resolve, reject)=>{
        try{
            let bodyParams = {}
            if (barcode) {
                // if barcode key is present its login via scanner mode
                bodyParams = {
                  username: "d_____", // post discussion with platform (rahul.s)
                  password: "d_____", // d+(5 times _)
                  grant_type: "password",
                  action: "LOGIN",
                  role: [role],
                  context: {
                    entity_id: seat_name,
                    barcode: barcode,
                    app_name: "boi_ui",
                  },
                }
              } else {
                bodyParams = {
                  "grant_type": "password",
                  "client_secret": "rubix",
                  "client_id": "boi_ui",
                  "username": username,
                  "password": password,
                  "action": "LOGIN",
                  "role": [role],
                  "context": {
                    "username": username,
                    "packStationId": seat_name,
                    "entity_id": seat_name,
                    "app_name": "boi_ui"
                  }
                }
              }
            const url = `${REACT_APP_PLATFORM_IP}${API_URLS.AUTH_URL}`;
            console.log('url', url)
            const login = await wrappedFetch(url, 'POST', bodyParams) 
            resolve(login)
        }catch(err){
            console.log('err', err);
            reject(err);
        }
    })
    return {
        res : 200,
        data : {
            status : true,
            user : {
                name : 'Sachin',
                email : 'sachin.kochar@greyorange.com'
            }
        }
    }
}

//get the mode type from the server
export const fetchMode = async (seat_type) => {
  const { REACT_APP_CORE_IP } = process.env;
  const url = `${REACT_APP_CORE_IP}/${API_URLS.PPS_MODE_API_URL}/${seat_type}/mode`;
  return await wrappedGet(url);
}

//store data to session storage
export const storeLoginSessionData = (access_token, refresh_token, seat_name, user_name, wsdata) => {
  console.log('seat_name', seat_name)
  var refreshToken = refresh_token || null
  saveSessionData(REFRESH_TOKEN, refreshToken)
  saveSessionData(USER_NAME, user_name)
  saveSessionData(AUTH_TOKEN, access_token )
  saveSessionData(SEAT_NAME, seat_name )
  saveSessionData(SESSION_DATA, wsdata )
  return
}

//empty data to session storage
export const emptyLoginSessionData = () => {
  removeSessionData(REFRESH_TOKEN)
  removeSessionData(USER_NAME)
  removeSessionData(AUTH_TOKEN )
  removeSessionData(SEAT_NAME )
  removeSessionData(SESSION_DATA )
  return
}

//verify if a user is logged in or the auth token is valid/invalid
export const verifyLogin = () => {
  return new Promise(async (resolve, reject) => {
    try{
        const {REACT_APP_PLATFORM_IP} = process.env
        const auth_token = retreiveSessionData(AUTH_TOKEN)
        const username = retreiveSessionData(USER_NAME)
        const refresh_token = retreiveSessionData(REFRESH_TOKEN)
        const seat_name = retreiveSessionData(SEAT_NAME)
        if(auth_token === null || username === null || refresh_token === null) throw new Error()
        const url = `${REACT_APP_PLATFORM_IP}${API_URLS.VALIDATE_AUTH_URL}`;
        const data = await wrappedGet(url);
        console.log('data valid', data);
        resolve({ auth_token, username, refresh_token, seat_name });
    }catch(err){
      reject(err)
    }
    })
}
