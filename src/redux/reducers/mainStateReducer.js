import { UPDATE_STATE_DATA_CLEAR, UPDATE_STATE_DATA_ERROR, UPDATE_STATE_DATA_REQUEST, UPDATE_STATE_DATA_SUCCESS } from './../actions/actionTypes'

import { SERVER_ERROR_TEXT } from '../../utils/constants';

const initialState = {
    success : false,
    isFetching : false,
    data : {},
    success : false,
    error : false,
    message : ''
}


  // receiving response sent by action according to type of action
  export default function initialConfigsReducers(state = initialState, action) {
      const { payload, type } = action;  
    switch (type) {
        case UPDATE_STATE_DATA_SUCCESS:
        return { 
                ...state,
                isFetching: false,
                success : true,
                data : payload.data
            };
            break;
    
        case UPDATE_STATE_DATA_ERROR:
            return { 
                ...state,
                isFetching: false,
                success : false,
                error : true,
                message : payload.err || SERVER_ERROR_TEXT
            };
        break;
    
        case UPDATE_STATE_DATA_REQUEST:
            return { 
                ...state,
                isFetching : true,
            };
        break; 
        
        case UPDATE_STATE_DATA_CLEAR:
            return { 
                success : false,
                isFetching : false,
                data : {},
                success : false,
                error : false,
                message : ''
            };
        break; 
        

        default:
            return state;
        }
  }
  