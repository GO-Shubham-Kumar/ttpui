import { 
  LOGIN_SUCCESS, 
  LOGIN_CHECK_FAILURE, 
  LOGIN_ERROR, 
  LOGIN_REQUEST, 
  LOGOUT_ERROR, 
  LOGOUT_REQUEST, 
  LOGOUT_SUCCESS 
} from './actionTypes';
import { emptyLoginSessionData, fetchMode, loginUser, logout, storeLoginSessionData, verifyLogin } from './../../utils/helpers/authHelpers';
import { removeSessionData, retreiveSessionData, saveSessionData } from '../../utils/helpers/sessionHelpers';
import { AUTH, AUTH_TOKEN, BOI_UI, CLIENT_ID, ERROR_INVALID_TOKEN, FETCH_SUCCESS_TEXT, REFRESH_TOKEN, SEAT_NAME, SERVER_ERROR_TEXT, USER_NAME } from '../../utils/constants';
import webSocket, { sendDataToWebSocket } from '../../utils/helpers/webSocketHelpers';


export let handleLoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      data,
      message: data.message || FETCH_SUCCESS_TEXT,
    },
  };
}

export function handleLoginRequest() {
  return {
    type: LOGIN_REQUEST,
    payload : {
        message: 'loading',
    }
  };
}

// to handle error
export function handleLoginError(err) {
  return {
    type: LOGIN_ERROR,
    payload: {
      message: err.message || SERVER_ERROR_TEXT,
    },
  };
}
export function handleCheckLoginFailure() {
  return {
    type: LOGIN_CHECK_FAILURE,
    payload : {}
  };
}

export let handleLogOutSuccess = (data) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: {
      message: data.message,
      data : data
    },
  };
}

export function handleLogOutRequest() {
  return {
    type: LOGOUT_REQUEST,
    payload : {
        message: 'loading',
    }
  };
}

// to handle error
export function handleLogOutError(err) {
  return {
    type: LOGOUT_ERROR,
    payload: {
      message: err,
    },
  };
}

export const loginAction = (username, password, seat_name, role) => {
  return async dispatch => {
    dispatch(handleLoginRequest());
    const mode = await fetchMode(seat_name)
    loginUser(username, password, seat_name, role).then((res)=>{
      if(res.status === 200){
        let { data : { access_token, refresh_token, user_name } } = res;
        const webSocketData = {
          data_type: AUTH,
          data: {
            [AUTH_TOKEN]: access_token,
            [SEAT_NAME]: seat_name,
          },
        }
        storeLoginSessionData(access_token, refresh_token, seat_name, user_name || username, webSocketData);
        sendDataToWebSocket(webSocketData)
        return dispatch(handleLoginSuccess(access_token));
      }else{
        return dispatch(handleLoginError(res));
      }
    }).catch((err)=>{
        console.log('err loggin in user',err.response)
        emptyLoginSessionData()   
        let message = err.response.status === 401 ? 'Invalid Username/Password' : SERVER_ERROR_TEXT
        err.message = message
        return dispatch(handleLoginError({message}));
    })
      
    }
}

//verify is a user have a valid auth_token
export const verifyLoginAction = () => {
  return async (dispatch) => {
    try{
      dispatch(handleLoginRequest());
      const data = await verifyLogin();
      let { auth_token, refresh_token, username, seat_name } = data;
      const webSocketData = {
        data_type: AUTH,
        data: {
          [AUTH_TOKEN]: auth_token,
          [SEAT_NAME]: seat_name,
        },
      }
      storeLoginSessionData(auth_token, refresh_token, seat_name, username)
      sendDataToWebSocket(webSocketData)
      return dispatch(handleLoginSuccess(data));
    }catch(err){
        emptyLoginSessionData() 
        const message = ERROR_INVALID_TOKEN;
        return dispatch(handleLoginError({message}))
    }
  }
}

export function logOutAction() {
  return (dispatch) => {
    dispatch(handleLogOutRequest());
    const REFRESH_TOKEN = retreiveSessionData(REFRESH_TOKEN);
    const SEAT_NAME = retreiveSessionData(SEAT_NAME);
    const USER_NAME = retreiveSessionData(USER_NAME);
    const logoutData = {
      "token": JSON.parse(sessionStorage.getItem("sessionData"))["data"]["auth-token"],
      "context": {
        "username": USER_NAME,
        "packStationId": SEAT_NAME,
        "entity_id": SEAT_NAME,
        "app_name": BOI_UI,
        "client_id":  CLIENT_ID,
        "refresh_token": REFRESH_TOKEN,
        "logout_reason": 'logoutReason'
      }
    }
    return logout(logoutData).then((res)=>{
      console.log('response', res);
      if(res.status && res.status === 204){
          emptyLoginSessionData() 
          return dispatch(handleLogOutSuccess(res));
      }
      return dispatch(handleLogOutError('Something Went Wrong!'));
    }).catch((err)=>{
      console.log('err',err)
      if(err.message){
        return dispatch(handleLogOutError(err.message));
      }else{        
        return dispatch(handleLogOutError(err));
      }
    })
  }
}