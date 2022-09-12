import { LOGINSUCCESS, LOGINCHECKFAILURE, LOGINERROR, LOGINREQUEST, LOGOUTERROR, LOGOUTREQUEST, LOGOUTSUCCESS } from './../actions/actionTypes'
const insitialState = {
    isLoggedin : false,
    isFetching : false,
    authdone : false,
    user : {},
    err : ''
}


  // receiving response sent by action according to type of action
  export default function authReducer(state = initialState, action) {
    console.log(action,'action');
    const { payload } = action
    switch (action.type) {
    case LOGINSUCCESS:
    return { 
          isLoggedIn: true,
          isFetching: true,
          user : payload.user
        };
        break;
  
    case LOGINERROR:
        return { 
          isLoggedIn: false,
          isFetching: false,
          authDone : false,
          err: payload.message
        };
    break;
  
    case LOGINREQUEST:
        return { 
          loginRequest: true,
          authDone:false,
          err:''
         };
    break;  
    case LOGOUTREQUEST:
        return { 
          ...state,
          isFetching : true,
          err:''

        };
        break;
        
    case LOGOUTSUCCESS:
        return { 
          isLoggedIn: false,
          isFetching : false,
          authDone: true,
          user : '',
          err:action.message
        };
        break;
        
    case LOGOUTERROR:
        return { 
          ...state,
          isFetching : false,
          authDone:true,
          err:action.message
        };
        break;
      default:
        return state;
    }
  }
  