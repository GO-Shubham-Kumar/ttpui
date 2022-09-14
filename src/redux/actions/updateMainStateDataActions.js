import { SERVER_ERROR_TEXT } from "../../utils/constants";
import { UPDATESTATEDATAERROR, UPDATESTATEDATAREQUEST, UPDATESTATEDATASUCCESS } from "./actionTypes";


export let handleUpdateStateDataSuccess = (data) => {
    console.log('res from loginactions', data)
    return {
      type: UPDATESTATEDATASUCCESS,
      payload: data,
      // message: res.message,
    };
  }
  
  export function handleUpdateStateDataRequest() {
    return {
      type: UPDATESTATEDATAREQUEST,
      payload : {
          message: 'loading',
      }
    };
  }
  
  // to handle error
  export function handleUpdateStateDataError(err) {
    return {
      type: UPDATESTATEDATAERROR,
      payload: {
        message: err || SERVER_ERROR_TEXT,
      },
    };
  }

export const updateStateData = (data) => {
    return (dispatch)=>{
        if(data){
            console.log('data --', data);
            // let state_data = JSON.parse(data.state_data)
            // console.log('state_data', typeof data);
            // return dispatch(handleUpdateStateDataSuccess(data.state_data))
        }
    }

}