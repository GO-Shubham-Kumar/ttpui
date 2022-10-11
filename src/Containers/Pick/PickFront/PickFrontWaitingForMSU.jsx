import {
  APP_SOURCE,
  BIN,
  EVENT_CLOSE_PALLET_MODAL,
  EVENT_TYPE_CANCEL_SCAN,
  TOTE,
} from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import WaitingForMSU from "../../../Components/Pick/WaitingForMSU/WaitingForMSU";

function PickFrontWaitingForMSUContainer({ data, ...props }) {
  const [title, setTitle] = useState("Wait for Tote");
  const { success, error, isFetching } = useSelector(
    (state) => state.serverEvents
  );

  useEffect(() => {
    if (success && data.state_data) {
      const {
        state_data: { title },
      } = data;
      if (title) setTitle(title);
    }
  }, [data, success, error, isFetching ]);

  let legends = [
    {
      color: "blue",
      text: "Inventory Totes",
    },
    {
      color: "#7BAABA",
      text: "Order Totes",
    },
  ];

  return (
    <WaitingForMSU
      legends={legends}
      {...props}
      // title={title}
    />
  );
}

export default PickFrontWaitingForMSUContainer;
