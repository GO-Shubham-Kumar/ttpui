import * as TEST_DATA from './../../utils/testData'

import {
  UPDATE_STATE_DATA_CLEAR,
  UPDATE_STATE_DATA_ERROR,
  UPDATE_STATE_DATA_REQUEST,
  UPDATE_STATE_DATA_SUCCESS,
} from './actionTypes'

import { SERVER_ERROR_TEXT } from '../../utils/constants'

export let handleUpdateStateDataSuccess = (data) => {
  return {
    type: UPDATE_STATE_DATA_SUCCESS,
    payload: {
      data,
    },
    // message: res.message,
  }
}

export function handleUpdateStateDataRequest() {
  return {
    type: UPDATE_STATE_DATA_REQUEST,
    payload: {
      message: 'loading',
    },
  }
}

// to handle error
export function handleUpdateStateDataError(err) {
  return {
    type: UPDATE_STATE_DATA_ERROR,
    payload: {
      message: err || SERVER_ERROR_TEXT,
    },
  }
}

export function handleUpdateStateDataClear(err) {
  return {
    type: UPDATE_STATE_DATA_CLEAR,
    payload: {
      message: err || SERVER_ERROR_TEXT,
    },
  }
}

export const updateStateData = (data) => {
  return (dispatch) => {
    if (data) {
      console.log('state data --', data)
      const dummyData = TEST_DATA.PICK_FRONT_PPTL_PRESS_SCREEN
      if (data.state_data) return dispatch(handleUpdateStateDataSuccess(data))
    }
  }
}
