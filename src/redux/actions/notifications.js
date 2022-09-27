import { TRIGGER_NOTIFICATION_SUCCESS, 
    TRIGGER_NOTIFICATION_REQUEST, 
    TRIGGER_NOTIFICATION_ERROR,
    CLEAR_NOTIFICATION, 
} from './actionTypes';


export let handleEventSuccess = (data) => {
  console.log('res from notification actions', data)
  return {
    type: TRIGGER_NOTIFICATION_SUCCESS,
    payload: {
        data : data
    },
    message: data.message || '',
  };
}

export function handleEventRequest() {
  return {
    type: TRIGGER_NOTIFICATION_REQUEST,
    payload : {
        message: 'loading',
    }
  };
}

// to handle error
export function handleEventError(err) {
  return {
    type: TRIGGER_NOTIFICATION_ERROR,
    payload: {
      message: err,
    },
  };
}

export function handleNotificationClear(){
    return {
        type: CLEAR_NOTIFICATION,
        payload: {
          message: '',
        },
      };
}

//function to fetch initial configs 
export const triggerNotificationction = (data) => {
    return async (dispatch) => {
        try{
            dispatch(handleEventRequest());
            return dispatch(handleEventSuccess(data))
        }catch(err){
            console.log('err in triggering notifications', err);
            return dispatch(handleEventError(err))
        }   
    }
}

