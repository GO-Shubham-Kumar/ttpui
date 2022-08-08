import { loginUser } from './../../utils/services/authServices';
import { LOGINSUCCESS, LOGINCHECKFAILURE, LOGINERROR, LOGINREQUEST, LOGOUTERROR, LOGOUTREQUEST,LOGOUTSUCCESS } from './actionTypes';
import { AUTHTOKEN } from './../../inc/config';

export let handleLoginSuccess = (res) => {
  console.log('res from loginactions', res)
  return {
    type: LOGINSUCCESS,
    payload: res,
    // message: res.message,
  };
}

export function handleLoginRequest() {
  return {
    type: LOGINREQUEST,
    payload : {
        message: 'loading',
    }
  };
}

// to handle error
export function handleLoginError(err) {
  return {
    type: LOGINERROR,
    payload: {
      message: err,
    },
  };
}
export function handleCheckLoginFailure() {
  return {
    type: LOGINCHECKFAILURE,
    payload : {}
  };
}

export let handleLogOutSuccess = (res) => {
  return {
    type: LOGOUTSUCCESS,
    payload: {
      message: res.message,
      data : res
    },
  };
}

export function handleLogOutRequest() {
  return {
    type: LOGOUTREQUEST,
    payload : {
        message: 'loading',
    }
  };
}

// to handle error
export function handleLogOutError(err) {
  return {
    type: LOGOUTERROR,
    payload: {
      message: err,
    },
  };
}

export let handleResetPasswordSuccess = (res) => {
  return {
    type: RESETPASSWORDSUCCESS,
    payload: { 
      message: res.message
    } 
  };
}

export function handleResetPasswordRequest() {
  return {
    type: RESETPASSWORDREQUEST,
    payload: {
      message: 'loading'
    }
  };
}

// to handle error
export function handleResetPasswordError(err) {
  return {
    type: RESETPASSWORDERROR,
    payload: {
      message: err
    }
  };
}

export function loginAction(username, password) {
  console.log('test')
  return dispatch => {
    dispatch(handleLoginRequest());
    loginUser(username, password).then((res)=>{
      console.log('res in login', res);
      if(res.status === 200){
        let { data } = res;
        if(data.status){
          // localStorage.setItem('authtoken', data.token)
          return dispatch(handleLoginSuccess(data));
        }else{        
          return dispatch(handleLoginError(data.message));
        }
      }else{
        return dispatch(handleLoginError(res.data.message));
      }
    }).catch((err)=>{
      console.log('err',err)
      if(err.message){
        return dispatch(handleLoginError(err.message));
      }else{        
        return dispatch(handleLoginError(err));
      }
    })
      
    }
}

export function checkLoginAction(token) {
  return (dispatch) => {
    dispatch(handleLoginRequest());
    checkLogin(token).then((res)=>{
      console.log('res', res);
      let {data} =res;
      if(data.status){
        return dispatch(handleLoginSuccess(data));
      }else if(!data.status){
        localStorage.removeItem(AUTHTOKEN);
        return dispatch(handleLoginError(res.message));
      }
    }).catch((err)=>{
      console.log('err',err)
      // if(err){
        return dispatch(handleLoginError(err.message));
      // }else{        
      //   return dispatch(handleLoginError(err));
      // }
    })
  }
}

export function logOutAction() {
  console.log('logout clicked here')
  return (dispatch) => {
    dispatch(handleLogOutRequest());
    return logout().then((res)=>{
      console.log('response', res);
      if(res.status && res.status === 204){
          localStorage.removeItem(AUTHTOKEN)
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
