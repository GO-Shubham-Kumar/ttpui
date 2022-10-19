import { INITIAL_CONFIG_ERROR, INITIAL_CONFIG_REQUEST, INITIAL_CONFIG_SUCCESS, INITIAL_MODE_CONFIG_ERROR, INITIAL_MODE_CONFIG_SUCCESS } from './../actions/actionTypes'
const initialState = {
    success : false,
    error : false,
    isFetching : false,
    configs : {},
    pps_seats : [],
    mode : '',
    message : ''
}


  // receiving response sent by action according to type of action
  export default function initialConfigsReducers(state = initialState, action) {
      const { payload, type } = action;
    switch (type) {
        case INITIAL_CONFIG_SUCCESS:
        return { 
                ...state,
                isFetching: false,
                success : true,
                configs : payload.configs,
                pps_seats : payload.pps_seats,
            };
            break;
    
        case INITIAL_CONFIG_ERROR:
            return { 
                ...state,
                error : true,
                message : 'Error Fetching Data',
                isFetching : false
            };
        break;
    
        case INITIAL_CONFIG_REQUEST:
            return { 
                ...state,
                isFetching : true,
            };
        break;  
        case INITIAL_MODE_CONFIG_SUCCESS:
        return { 
            ...state,
                success : true,
                mode : payload.data,
                configs : payload.configs,
                pps_seats : payload.pps_seats,
            };
        default:
            return state;
        }
  }
  