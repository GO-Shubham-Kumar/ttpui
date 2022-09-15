import { SERVER_ERROR_TEXT } from "../../utils/constants";
import { UPDATE_STATE_DATA_ERROR, UPDATE_STATE_DATA_REQUEST, UPDATE_STATE_DATA_SUCCESS } from "./actionTypes";


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
            // let state_data = JSON.parse(data.state_data)
            // console.log('state_data', typeof data);
            // return dispatch(handleUpdateStateDataSuccess(data.state_data))
        }
    }

}