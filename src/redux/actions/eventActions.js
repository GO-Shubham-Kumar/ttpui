import { TRIGGER_EVENTS_SUCCESS, 
    TRIGGER_EVENTS_REQUEST, 
    TRIGGER_EVENTS_ERROR, 
} from './actionTypes';
import { SERVER_ERROR_TEXT } from '../../utils/constants';
import { triggerEvent } from '../../utils/helpers/eventsHelpers';


export let handleEventSuccess = (data) => {
  console.log('res from config actions', data)
  return {
    type: TRIGGER_EVENTS_SUCCESS,
    payload: {
        data : data
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
export const triggerEventAction = (data, seatName) => {
    return async (dispatch) => {
        try{
            dispatch(handleEventRequest());
            const res = await triggerEvent(data, seatName);
            console.log('trigger response', res);
            return dispatch(handleEventSuccess(res.data))
        }catch(err){
            console.log('err in triggering data', err);
            return dispatch(handleEventError(err))
        }   
    }
}

