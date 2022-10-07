import {
  APP_SOURCE,
  BIN,
  EVENT_CLOSE_PALLET_MODAL,
  EVENT_TYPE_CANCEL_SCAN,
  TOTE,
} from "../../../utils/constants";
import { mapConveyorBinData, mapConveyorToteData } from "../../../utils/helpers/conveyorHelpers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import PickFrontDockTote from "../../../Components/Pick/ScanTote/PickFront.DockTote";

function PickFrontDockToteContainer({ data, ...props }) {
  const [cancelButtonEnable, setCancelButtonEnable] = useState(false);
  const [conveyorToteData, setConveyorToteData] = useState([]);
  const [conveyorBinData, setConveyorBinData] = useState([]);
  const [conveyorIdle, setConveyorIdle] = useState(true);
  const [conveyorDisabled, setConveyorDisabled] = useState(false);
  const { success, error, isFetching } = useSelector(
    (state) => state.serverEvents
  );
  const dispatch = useDispatch();
  const subHeader = "";

  useEffect(() => {
    if (data.state_data) {
      const {
        state_data, state_data: { cancel_scan_enabled, ppsbin_list, pps_tote_list, pps_tote_list_disabled, is_idle },
      } = data;
      console.log("cancel_scan_enabled", cancel_scan_enabled);
      if(ppsbin_list && ppsbin_list.length > 0){
        let ppsData = [...ppsbin_list]
        console.log('ppsData', ppsData)
        ppsData = mapConveyorBinData(ppsData, BIN);
        setConveyorBinData(ppsData)
      }
      if(pps_tote_list && pps_tote_list.length > 0){
        let ppsToteData = [...pps_tote_list]
        console.log('pps_tote_list', ppsToteData)
        ppsToteData = mapConveyorToteData(ppsToteData, TOTE);
        setConveyorToteData(ppsToteData)
      }
      if(state_data.hasOwnProperty('pps_tote_list_disabled')) setConveyorDisabled(pps_tote_list_disabled)
      if(state_data.hasOwnProperty('is_idle')) setConveyorIdle(is_idle)
      console.log('is_idle', is_idle)
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
      {...props}
      cancelButtonEnable={cancelButtonEnable}
      cancelScanHandler={cancelScanHandler}
      conveyorToteData={conveyorToteData}
      conveyorBinData={conveyorBinData}
      conveyorIdle={conveyorIdle}
      conveyorDisabled={conveyorDisabled}
    />
  );
}

export default PickFrontDockToteContainer;
