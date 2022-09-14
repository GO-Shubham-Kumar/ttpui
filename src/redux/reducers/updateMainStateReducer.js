import { SERVER_ERROR_TEXT } from '../../utils/constants';
import { INITIALCONFIGERROR, INITIALCONFIGREQUEST, INITIALCONFIGSUCCESS, UPDATESTATEDATAERROR, UPDATESTATEDATASUCCESS } from './../actions/actionTypes'
const initialState = {
    success : false,
    isFetching : false,
    data : {},
    err : ''
}


  // receiving response sent by action according to type of action
  export default function initialConfigsReducers(state = initialState, action) {
      const { payload, type } = action;
      console.log(action,'action');
      console.log(payload,'payload');
    
    switch (type) {
        case UPDATESTATEDATASUCCESS:
            console.log('---')
        return { 
                ...state,
                isFetching: false,
                success : true,
                data : payload.data,
            };
            break;
    
        case UPDATESTATEDATAERROR:
            return { 
                ...state,
                isFetching: false,
                success : false,
                err : payload.err || SERVER_ERROR_TEXT,
            };
        break;
    
        case UPDATESTATEDATAERROR:
            return { 
                ...state,
                isFetching : true,
            };
        break;  

        default:
            return state;
        }
  }
  