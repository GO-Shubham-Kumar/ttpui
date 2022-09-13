import { UPDATESTATEDATAERROR, UPDATESTATEDATAREQUEST, UPDATESTATEDATASUCCESS } from "./actionTypes";


export let handleUpdateStateDataSuccess = (res) => {
    console.log('res from loginactions', res)
    return {
      type: UPDATESTATEDATASUCCESS,
      payload: res,
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

