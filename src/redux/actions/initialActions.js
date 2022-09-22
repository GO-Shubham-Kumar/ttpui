import { fetchMode, loginUser, storeLoginSessionData } from './../../utils/helpers/authHelpers';
import { INITIAL_CONFIG_SUCCESS, INITIAL_CONFIG_REQUEST, INITIAL_CONFIG_ERROR, INITIAL_MODE_CONFIG_ERROR, INITIAL_MODE_CONFIG_SUCCESS } from './actionTypes';
import { saveSessionData } from '../../utils/helpers/sessionHelpers';
import { fetchConfigs, fetchLanguage, fetchSeatTypes } from '../../utils/helpers/initialConfigshelpers';
import { ERROR_INVALID_TOKEN, SERVER_ERROR_TEXT } from '../../utils/constants';


export let handleConfigSuccess = (data) => {
  return {
    type: INITIAL_CONFIG_SUCCESS,
    payload: {
        configs : data.configs,
        pps_seats : data.pps_seats
    },
    message: data.message || '',
  };
}

export function handleConfigRequest() {
  return {
    type: INITIAL_CONFIG_REQUEST,
    payload : {
        message: 'loading',
    }
  };
}

// to handle error
export function handleConfigError(err) {
  return {
    type: INITIAL_CONFIG_ERROR,
    payload: {
      message: err.message,
    },
  };
}

export const handleModeConfigSuccess = (data, configs, pps_seats) => {
    return {
      type: INITIAL_MODE_CONFIG_SUCCESS,
      payload: {
        data : data.mode, 
        configs : configs,
        pps_seats : pps_seats
      },
      // message: res.message,
    };
  }

//function to fetch initial configs 
export const fetchInitialConfigsAction = () => {

  return async (dispatch) => {
        dispatch(handleConfigRequest());
        const getConfigs = fetchConfigs();
        const getSeatTypes = fetchSeatTypes();
        const getLanguage = fetchLanguage();
        const allPromises = [ getConfigs, getSeatTypes, getLanguage ];
        Promise.all(allPromises).then((values)=>{
            const configs = values[0].data;
            const pps_seats = values[1].data.pps_seats;
            return dispatch(handleConfigSuccess({ configs, pps_seats }))
        }).catch((err) => {
            console.log('err in config', err);
            return dispatch(handleConfigError(err))
        })
        
    }
}



//function to fetch initial configs 
export const fetchSeatModeAction = (seat, configs, pps_seats ) => {

    return async (dispatch) => {
        try{
            dispatch(handleConfigRequest());
            const res = await fetchMode(seat);
            if(res.status === 200){
                return dispatch(handleModeConfigSuccess(res.data, configs, pps_seats, ))
            }else throw new Error(SERVER_ERROR_TEXT)

        }catch(err){
            console.log('err', err);
            return dispatch(handleConfigError(err))
        }  

          
      }
  }
  