import {
  PACKING_BOX_SCREEN,
  PICK_FRONT_DOCK_TOTE_BIN_SCREEN,
  PICK_FRONT_DOCK_TOTE_SCREEN,
  PICK_FRONT_MORE_ITEM_SCAN_SCREEN,
  PICK_FRONT_PPTL_PRESS_SCREEN,
  PICK_FRONT_TTP_ITEM_SCAN_SCREEN,
  PICK_FRONT_UNDOCK_TOTE_SCREEN,
  PICK_FRONT_WAITING_FOR_MSU_SCREEN,
  PLACE_ENTITY_DATA,
  PLACE_TOTE_AND_CONFIRM,
  PUT_TOTE_INDUCTION,
  SCAN_PALLET_ID_DATA,
  TEST_DATA,
  TEST_DATA_2,
  UD_PUT_FRONT_ENTITY_SCAN
} from "./../../utils/testData";
import {
  UPDATE_STATE_DATA_CLEAR,
  UPDATE_STATE_DATA_ERROR,
  UPDATE_STATE_DATA_REQUEST,
  UPDATE_STATE_DATA_SUCCESS,
} from "./actionTypes";

import { SERVER_ERROR_TEXT } from "../../utils/constants";
import { UD_PUT_FRONT_PLACE_ITEMS_IN_RACK } from "../../utils/screenIds";

export let handleUpdateStateDataSuccess = (data) => {
  console.log("res from loginactions", data);
  return {
    type: UPDATE_STATE_DATA_SUCCESS,
    payload: {
      data,
    },
    // message: res.message,
  };
};

export function handleUpdateStateDataRequest() {
  return {
    type: UPDATE_STATE_DATA_REQUEST,
    payload: {
      message: "loading",
    },
  };
}

export function handleUpdateStateDataClear(err) {
  return {
    type: UPDATE_STATE_DATA_CLEAR,
    payload: {
      message: err || SERVER_ERROR_TEXT,
    },
  };
}

export const updateStateData = (data) => {
  return (dispatch) => {
    if (data) {
      console.log("state data --", data);
      const dummyData = PACKING_BOX_SCREEN;
      if (data.state_data)
        return dispatch(handleUpdateStateDataSuccess(dummyData));
    }
  };
};
