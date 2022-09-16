import { LOGIN_SUCCESS, LOGIN_CHECK_FAILURE, LOGIN_ERROR, LOGIN_REQUEST, LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './../actions/actionTypes'
const initialState = {
    isLoggedIn : false,
    isFetching : true,
    success : false,
    data : {},
    err : false,
    message : ''
}


  // receiving response sent by action according to type of action
  export default function authReducer(state = initialState, action) {
    const { payload, type } = action
    console.log(action,'action login');
    switch (type) {
    case LOGIN_SUCCESS:
    return {
          ...state, 
          isLoggedIn: true,
          isFetching: false,
          success: true,
          data : payload.data
        };
        break;
  
    case LOGIN_ERROR:
        return { 
          ...state,
          success : false,
          error: true,
          message: payload.message,
          isFetching : false
        };
    break;
  
    case LOGIN_REQUEST:
        return { 
          ...state,
          isFetching : true
         };
    break;  
    case LOGOUT_REQUEST:
        return { 
          ...state,
          isFetching : true,
        };
        break;
        
    case LOGOUT_SUCCESS:
        return { 
          ...state,
          err:''
        };
        break;
        
    case LOGOUT_ERROR:
        return { 
          ...state,
          success:false,
          err:action.message
        };
        break;
      default:
        return state;
    }
  }
  