import { 
  LOGIN_SUCCESS, 
  LOGIN_CHECK_FAILURE, 
  LOGIN_ERROR, 
  LOGIN_REQUEST, 
  LOGOUT_ERROR, 
  LOGOUT_REQUEST, 
  LOGOUT_SUCCESS, 
  LOGIN_VALIDATION_ERROR
} from './actionTypes';
import { emptyLoginSessionData, fetchMode, loginUser, logout, storeLoginSessionData, verifyLogin } from './../../utils/helpers/authHelpers';
import { retreiveSessionData } from '../../utils/helpers/sessionHelpers';
import { 
  AUTH, 
  AUTH_TOKEN, 
  BOI_UI, CLIENT_ID, 
  ERROR_INVALID_TOKEN, 
  FETCH_SUCCESS_TEXT, 
  NOTIFICATION_TYPE_ERROR, 
  NOTIFICATION_TYPE_INFO, 
  REFRESH_TOKEN, 
  SEAT_NAME, 
  SERVER_ERROR_TEXT, 
  SOMETHING_WENT_WRONG, 
  USER_NAME 
} from '../../utils/constants';
import { sendDataToWebSocket } from '../../utils/helpers/webSocketHelpers';
import { handleUpdateStateDataClear } from './mainStateDataActions';


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

export function handleLoginValidationError(err) {
  return {
    type: LOGIN_VALIDATION_ERROR,
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
      message: err.message,
      data : err
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
        emptyLoginSessionData();
        let message =SERVER_ERROR_TEXT
        if(err.response.status === 401){
          message =  err.response.data.reason
          return dispatch(handleLoginValidationError({message}))
        }
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
      console.log('auth_token, refresh_token, username, seat_name', auth_token, refresh_token, username, seat_name)
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

export function logOutAction(websocketError) {
  return (dispatch) => {
    dispatch(handleLogOutRequest());
    const AUTHTOKEN = retreiveSessionData(AUTH_TOKEN);
    const REFRESHTOKEN = retreiveSessionData(REFRESH_TOKEN);
    const SEATNAME = retreiveSessionData(SEAT_NAME);
    const USERNAME = retreiveSessionData(USER_NAME);
    const logoutData = {
      "token": AUTHTOKEN,
      "context": {
        "username": USERNAME,
        "packStationId": SEATNAME,
        "entity_id": SEATNAME,
        "app_name": BOI_UI,
        "client_id":  CLIENT_ID,
        "refresh_token": REFRESHTOKEN,
        "logout_reason": 'logoutReason'
      }
    }
    return logout(logoutData).then((res)=>{
      console.log('response', res);
      const data = {
        message : res.data.message,
        level : NOTIFICATION_TYPE_INFO
      }
      if(websocketError){
        console.log('websocketError', websocketError)
        data['message'] = websocketError.message
        data['level'] = NOTIFICATION_TYPE_ERROR
      }
      if(res.status && res.status === 200){
          emptyLoginSessionData();
          dispatch(handleUpdateStateDataClear())
          return dispatch(handleLogOutSuccess(data));
      }
      data['message'] = SOMETHING_WENT_WRONG
      data['level'] = NOTIFICATION_TYPE_ERROR
      console.log('websocketError',websocketError);
      return dispatch(handleLogOutError(data));
    }).catch((err)=>{
      console.log('err',err);
      const data  ={
        message : err.message ? err.message : SERVER_ERROR_TEXT,
        level  : NOTIFICATION_TYPE_ERROR
      }
      return dispatch(handleLogOutError(data));
    })
  }
}