import {
    CLEAR_NOTIFICATION,
    TRIGGER_NOTIFICATION_ERROR,
    TRIGGER_NOTIFICATION_REQUEST,
    TRIGGER_NOTIFICATION_SUCCESS,
} from './../actions/actionTypes'

import { SERVER_ERROR_TEXT } from '../../utils/constants';
const initialState = {
    data : {},
    isFetching : false,
    success : false,
    error : false,
    message : ''
}


  // receiving response sent by action according to type of action
  export default function notificationsReducer(state = initialState, action) {
      const { payload, type } = action;
    switch (type) {
        case TRIGGER_NOTIFICATION_SUCCESS:
            console.log('---')
        return { 
                ...state,
                isFetching: false,
                success : true,
                data : payload.data,
            };
            break;
    
        case TRIGGER_NOTIFICATION_ERROR:
            return { 
                ...state,
                isFetching: false,
                success : false,
                error : true,
                message : payload.err || SERVER_ERROR_TEXT
            };
        break;
    
        case TRIGGER_NOTIFICATION_REQUEST:
            return { 
                ...state,
                isFetching : true,
            };
        break;  

        case CLEAR_NOTIFICATION:
            return { 
                ...state,
            };
        break;

        default:
            return state;
        }
  }
  