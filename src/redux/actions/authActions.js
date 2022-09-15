import { emptyLoginSessionData, fetchMode, loginUser, storeLoginSessionData, verifyLogin } from './../../utils/helpers/authHelpers';
import { LOGIN_SUCCESS, LOGIN_CHECK_FAILURE, LOGIN_ERROR, LOGIN_REQUEST, LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './actionTypes';
import { removeSessionData, saveSessionData } from '../../utils/helpers/sessionHelpers';
import { AUTH, AUTH_TOKEN, FETCH_SUCCESS_TEXT, SEAT_NAME, SERVER_ERROR_TEXT } from '../../utils/constants';
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
      message: err || SERVER_ERROR_TEXT,
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

export function loginAction(username, password, seat_name, role) {
  return async dispatch => {
    dispatch(handleLoginRequest());
    const mode = await fetchMode(seat_name)
    loginUser(username, password, seat_name, role).then((res)=>{
      console.log('login res', seat_name);
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
        console.log('err',err)
        emptyLoginSessionData()   
        let message = '';
        if(err.res && err.res.data.message) message = err.res.data.message
        return dispatch(handleLoginError(err));
    })
      
    }
}

//verify is a user have a valid auth_token
export function verifyLoginAction() {
  return (dispatch) => {
    dispatch(handleLoginRequest());
    verifyLogin().then((data)=>{
      // console.log('session data', JSON.parse(data.auth_token));
      let { auth_token, refresh_token, username, seat_name } = data;
      const webSocketData = {
        data_type: "auth",
        data: {
          [AUTH_TOKEN]: auth_token,
          [SEAT_NAME]: seat_name,
        },
      }
      sendDataToWebSocket(webSocketData)
      return dispatch(handleLoginSuccess(data));
    }).catch((err)=>{
        console.log('err---',err);
        emptyLoginSessionData()
        return dispatch(handleLoginError(err.message));
    })
  }
}

// export function logOutAction() {
//   console.log('logout clicked here')
//   return (dispatch) => {
//     dispatch(handleLogOutRequest());
//     return logout().then((res)=>{
//       console.log('response', res);
//       if(res.status && res.status === 204){
//           localStorage.removeItem(AUTH_TOKEN)
//           return dispatch(handleLogOutSuccess(res));
//       }
//       return dispatch(handleLogOutError('Something Went Wrong!'));
//     }).catch((err)=>{
//       console.log('err',err)
//       if(err.message){
//         return dispatch(handleLogOutError(err.message));
//       }else{        
//         return dispatch(handleLogOutError(err));
//       }
//     })
//   }
// }
