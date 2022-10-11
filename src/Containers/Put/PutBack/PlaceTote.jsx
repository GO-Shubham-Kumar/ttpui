import {
  APP_SOURCE,
  EVENT_TYPE_CANCEL_SCAN,
  EVENT_TYPE_PROCESS_BARCODE,
  EVENT_TYPE_SEND_TOTE,
} from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";

import PlaceTote from "../../../Components/Put/PlaceTote/PlaceTote";
import { triggerEventAction } from "../../../redux/actions/eventActions";
import { useState } from "react";

function PlaceToteContainer({ ...props }) {
  const subHeader = "";
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.mainStateReducer);
  const handleSendTote = () => {
    const {
      state_data: { item_uid },
    } = data;
    const eventData = {
      event_name: EVENT_TYPE_SEND_TOTE,
      event_data: {
        barcode: item_uid,
      },
      source: APP_SOURCE,
    };
    dispatch(triggerEventAction(eventData));
  };
  return (
    <>
      <PlaceTote {...props} subHeader={subHeader} handleSendTote={handleSendTote} />
    </>
  );
}

export default PlaceToteContainer;
