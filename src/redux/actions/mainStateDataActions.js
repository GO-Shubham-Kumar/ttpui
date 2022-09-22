import { SERVER_ERROR_TEXT } from "../../utils/constants";
import { UPDATE_STATE_DATA_ERROR, UPDATE_STATE_DATA_REQUEST, UPDATE_STATE_DATA_SUCCESS } from "./actionTypes";
import {PUT_TOTE_INDUCTION, SCAN_PALLET_ID_DATA, TEST_DATA, TEST_DATA_2, UD_PUT_FRONT_ENTITY_SCAN} from './../../utils/testData';
export let handleUpdateStateDataSuccess = (data) => {
    console.log('res from loginactions', data)
    return {
      type: UPDATE_STATE_DATA_SUCCESS,
      payload: {
        data
        },
      // message: res.message,
    };
  }
  
  export function handleUpdateStateDataRequest() {
    return {
      type: UPDATE_STATE_DATA_REQUEST,
      payload : {
          message: 'loading',
      }
    };
  }
  
  // to handle error
  export function handleUpdateStateDataError(err) {
    return {
      type: UPDATE_STATE_DATA_ERROR,
      payload: {
        message: err || SERVER_ERROR_TEXT,
      },
    };
  }

export const updateStateData = (data) => {
    return (dispatch)=>{
        if(data){
            console.log('state data --', data);
            const dummyData = UD_PUT_FRONT_ENTITY_SCAN
            if(data.state_data) return dispatch(handleUpdateStateDataSuccess(data));

        }
    }

}