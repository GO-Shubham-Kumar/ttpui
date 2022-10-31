import {
  APP_SOURCE,
  BIN,
  EVENT_CLOSE_PALLET_MODAL,
  EVENT_TYPE_CANCEL_SCAN,
  TOTE,
} from "../../../utils/constants";
import {
  mapConveyorBinData,
  mapConveyorToteData,
} from "../../../utils/helpers/conveyorHelpers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import DockTotePickFront from "../../../Components/Pick/PickFront/DockTote.PickFront";

/*
  Screen IDs.
  PICK_FRONT_DOCK_TOTE: pick_front_dock_tote
*/

function DockTotePickFrontContainer({ data, ...props }) {
  const [cancelButtonEnable, setCancelButtonEnable] = useState(false);
  const { success, error, isFetching } = useSelector(
    (state) => state.serverEvents
  );
  const dispatch = useDispatch();
  const subHeader = "";

  useEffect(() => {
    if (data.state_data) {
      const {
        state_data: { cancel_scan_enabled },
      } = data;
      console.log("cancel_scan_enabled", cancel_scan_enabled);
      setCancelButtonEnable(cancel_scan_enabled);
    }
  }, [data]);

  const cancelScanHandler = () => {
    alert("cancel scan request sent");
  };

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
    <DockTotePickFront
      subHeader={subHeader}
      legends={legends}
      cancelButtonEnable={cancelButtonEnable}
      {...props}
    />
  );
}

export default DockTotePickFrontContainer;
