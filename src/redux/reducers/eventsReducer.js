import {
    TRIGGER_EVENTS_ERROR,
    TRIGGER_EVENTS_REQUEST,
    TRIGGER_EVENTS_SUCCESS,
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
  export default function eventsReducer(state = initialState, action) {
      const { payload, type } = action;   
    switch (type) {
        case TRIGGER_EVENTS_SUCCESS:
            console.log('---')
        return { 
                ...state,
                isFetching: false,
                success : true,
                data : payload.data,
            };
            break;
    
        case TRIGGER_EVENTS_ERROR:
            return { 
                ...state,
                isFetching: false,
                success : false,
                error : true,
                message : payload.err || SERVER_ERROR_TEXT
            };
        break;
    
        case TRIGGER_EVENTS_REQUEST:
            return { 
                ...state,
                isFetching : true,
            };
        break;  
        default:
            return state;
        }
  }
  