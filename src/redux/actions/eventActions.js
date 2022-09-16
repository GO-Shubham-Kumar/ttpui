import { TRIGGER_EVENTS_SUCCESS, 
    TRIGGER_EVENTS_REQUEST, 
    TRIGGER_EVENTS_ERROR, 
} from './actionTypes';
import { fetchMode, loginUser, storeLoginSessionData } from './../../utils/helpers/authHelpers';
import { saveSessionData } from '../../utils/helpers/sessionHelpers';
import { fetchConfigs, fetchLanguage, fetchSeatTypes } from '../../utils/helpers/initialConfigshelpers';
import { SERVER_ERROR_TEXT } from '../../utils/constants';


export let handleEventSuccess = (data) => {
  console.log('res from config actions', data)
  return {
    type: TRIGGER_EVENTS_SUCCESS,
    payload: {
        configs : data.configs,
        pps_seats : data.pps_seats
    },
    message: data.message || '',
  };
}

export function handleEventRequest() {
  return {
    type: TRIGGER_EVENTS_REQUEST,
    payload : {
        message: 'loading',
    }
  };
}

// to handle error
export function handleEventError(err) {
  return {
    type: TRIGGER_EVENTS_ERROR,
    payload: {
      message: err,
    },
  };
}

//function to fetch initial configs 
export const triggerEventAction = (data) => {
    return async (dispatch) => {
        try{
            dispatch(handleEventRequest());
            const data = await triggerEvent(data);
            console.log('trigger response', data);
            return dispatch(handleEventSuccess(data))
        }catch(err){
            console.log('err in triggering data', err);
            return dispatch(handleEventError(err))
        }   
    }
}

