import { loginUser, storeLoginSessionData } from './../../utils/helpers/authHelpers';
import { INITIALCONFIGSUCCESS, INITIALCONFIGREQUEST, INITIALCONFIGERROR } from './actionTypes';
import { saveSessionData } from '../../utils/helpers/sessionHelpers';
import { fetchConfigs, fetchLanguage, fetchSeatTypes } from '../../utils/helpers/initialConfigshelpers';


export let handleConfigSuccess = (data) => {
  console.log('res from config actions', data)
  return {
    type: INITIALCONFIGSUCCESS,
    payload: {
        configs : data.configs,
        pps_seats : data.pps_seats
    },
    // message: res.message,
  };
}

export function handleConfigRequest() {
  return {
    type: INITIALCONFIGREQUEST,
    payload : {
        message: 'loading',
    }
  };
}

// to handle error
export function handleConfigError(err) {
  return {
    type: INITIALCONFIGERROR,
    payload: {
      message: err,
    },
  };
}

//function to fetch initial configs 
export function fetchInitialConfigsAction() {

  return async (dispatch) => {
        dispatch(handleConfigRequest());
        const getConfigs = fetchConfigs();
        const getSeatTypes = fetchSeatTypes();
        const getLanguage = fetchLanguage();
        const allPromises = [ getConfigs, getSeatTypes, getLanguage ];
        await Promise.all(allPromises).then((values)=>{
            console.log('configs', values[0]);
            console.log('pps_seats', values[1]);
            const configs = values[0].data;
            const pps_seats = values[1].data.pps_seats;
            return dispatch(handleConfigSuccess({ configs, pps_seats }))

        }).catch((err) => {
            console.log('err', err);
            return dispatch(handleConfigError(err))
        })
        
    }
}
