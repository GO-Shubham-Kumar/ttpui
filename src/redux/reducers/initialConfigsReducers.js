import { INITIALCONFIGERROR, INITIALCONFIGREQUEST, INITIALCONFIGSUCCESS } from './../actions/actionTypes'
const initialState = {
    success : false,
    isFetching : false,
    configs : {},
    pps_seats : [],
    err : ''
}


  // receiving response sent by action according to type of action
  export default function initialConfigsReducers(state = initialState, action) {
      const { payload, type } = action;
      console.log(action,'action');
      console.log(payload,'payload');
    
    switch (type) {
        case INITIALCONFIGSUCCESS:
            console.log('---')
        return { 
                ...state,
                isFetching: false,
                success : true,
                configs : payload.configs,
                pps_seats : payload.pps_seats,
            };
            break;
    
        case INITIALCONFIGERROR:
            return { 
                ...state,
                isFetching: false,
                success : false,
                err : 'Error Fetching Data',
            };
        break;
    
        case INITIALCONFIGREQUEST:
            return { 
                ...state,
                isFetching : true,
            };
        break;  

        default:
            return state;
        }
  }
  