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

import PickFrontDockTote from "../../../Components/Pick/ScanTote/PickFront.DockTote";

function PickFrontDockToteContainer({ data, ...props }) {
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
    <PickFrontDockTote
      subHeader={subHeader}
      legends={legends}
      cancelButtonEnable={cancelButtonEnable}
      {...props}
    />
  );
}

export default PickFrontDockToteContainer;
