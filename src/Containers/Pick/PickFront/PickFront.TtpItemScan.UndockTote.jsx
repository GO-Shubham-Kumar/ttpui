import { BIN, TOTE } from "../../../utils/constants";
import { Modal, Table, Typography } from "operational-component-lib";
import { mapConveyorBinData, mapConveyorToteData } from "../../../utils/helpers/conveyorHelpers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import PickFrontTtpItemScan from "../../../Components/Pick/ScanEntity/PickFront.TtpItemScan.UndockTote";

function PickFrontTtpItemScanContainer({ data, ...props }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [cancelButtonEnable, setCancelButtonEnable] = useState(false);
  const [conveyorToteData, setConveyorToteData] = useState([]);
  const [conveyorBinData, setConveyorBinData] = useState([]);
  const [conveyorIdle, setConveyorIdle] = useState(true);
  const [conveyorDisabled, setConveyorDisabled] = useState(false);
  const { success, error, isFetching } = useSelector(
    (state) => state.serverEvents
  );
  const subHeader = "";

  useEffect(() => {
    if (data.state_data) {
      const {
        state_data,
        state_data: {
          cancel_scan_enabled,
          ppsbin_list,
          pps_tote_list,
          pps_tote_list_disabled,
          is_idle,
        },
      } = data;
      console.log("cancel_scan_enabled", cancel_scan_enabled);
      if (ppsbin_list && ppsbin_list.length > 0) {
        let ppsData = [...ppsbin_list];
        console.log("ppsData", ppsData);
        ppsData = mapConveyorBinData(ppsData, BIN);
        setConveyorBinData(ppsData);
      }
      if (pps_tote_list && pps_tote_list.length > 0) {
        let ppsToteData = [...pps_tote_list];
        console.log("pps_tote_list", ppsToteData);
        ppsToteData = mapConveyorToteData(ppsToteData, TOTE);
        setConveyorToteData(ppsToteData);
      }
      if (state_data.hasOwnProperty("pps_tote_list_disabled"))
        setConveyorDisabled(pps_tote_list_disabled);
      if (state_data.hasOwnProperty("is_idle")) setConveyorIdle(is_idle);
      console.log("is_idle", is_idle);
      setCancelButtonEnable(cancel_scan_enabled);
    }
  }, [data]);

  let legends = [
    {
      color: "blue",
      text: "Inventory Totes",
    },
    {
      color: "#7BAABA",
      text: "Packing Box",
    },
  ];

  let prdtdetails = {
    "Item Serieal": "GHTSJIT67085",
    "Product Name": "Iphone",
    Color: "Black",
    "Dim (cm)": "27 x 16 x 56",
  };

  let prdtinfo = [
    "static/media/src/assets/images/bg1.png",
    "static/media/src/assets/images/bg2.png",
    "static/media/src/assets/images/bg3.png",
  ];

  return (
    <PickFrontTtpItemScan
      productDetails={prdtdetails}
      {...props}
      prdtinfo={prdtinfo}
      legends={legends}
      conveyorToteData={conveyorToteData}
      conveyorBinData={conveyorBinData}
      conveyorIdle={conveyorIdle}
      conveyorDisabled={conveyorDisabled}
    />
  );
}

export default PickFrontTtpItemScanContainer;
