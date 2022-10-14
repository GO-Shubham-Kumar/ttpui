import { BIN, PICK_VALID_SCREEN_ID, TOTE, VALID_SCREEN_ID } from "../../utils/constants";
import {
  PICK_FRONT_DOCK_TOTE,
  PICK_FRONT_MORE_ITEM_SCAN,
  PICK_FRONT_PPTL_PRESS,
  PICK_FRONT_SCAN_OR_WAIT_FOR_CONTAINER,
  PICK_FRONT_TTP_ITEM_SCAN,
  PICK_FRONT_UNDOCK_TOTE,
  PICK_FRONT_WAITING_FOR_MSU,
} from "../../utils/screenIds";
import {
  capitalizeFirstLetter,
  fetchDetailsFromData,
  getCurrentDetailsData,
  getNavConfig,
  getPreviousDetailsData,
  manupulateServerMessges,
} from "../../utils/helpers/commonHelpers";
import {
  mapConveyorBinData,
  mapConveyorToteData,
} from "../../utils/helpers/conveyorHelpers";
import { useEffect, useState } from "react";

import InvalidScreen from "../Common/InvalidScreen";
import Loader from "../Common/Loader";
import PickFrontDockToteContainer from "./../../Containers/Pick/PickFront/PickFront.DockTote";
import PickFrontMoreItemScanContainer from "../../Containers/Pick/PickFront/PickFront.MoreItemScan.PptlPress";
import PickFrontTtpItemScanContainer from "../../Containers/Pick/PickFront/PickFront.TtpItemScan.UndockTote";
import PickFrontWaitingForMSUContainer from "../../Containers/Pick/PickFront/PickFrontWaitingForMSU";
import ScanPackingboxContainer from "../../Containers/Pick/PickFront/ScanPackingbox";

const PickFront = ({ data, isFetching, success, error }) => {
  const [headerMsg, setHeaderMsg] = useState({});
  const [screenId, setScreenId] = useState("");
  const [previousDetails, setPreviousDetails] = useState({});
  const [currentDetails, setCurrentDetails] = useState({});
  const [seatMode, setSeatMode] = useState("");
  const [conveyorToteData, setConveyorToteData] = useState([]);
  const [conveyorBinData, setConveyorBinData] = useState([]);
  const [conveyorIdle, setConveyorIdle] = useState(true);
  const [conveyorDisabled, setConveyorDisabled] = useState(false);
  const [title, setTitle] = useState("Wait for Tote");

  useEffect(() => {
    if (!isFetching && success && data.state_data) {
      const {
        state_data: {
          header_msge_list,
          screen_id,
          previous_put_details,
          current_put_details,
          mode,
        },
      } = data;
      setScreenId(screen_id);
      setSeatMode(capitalizeFirstLetter(mode));
      const previousDetailsData = fetchDetailsFromData(previous_put_details);
      const currentDetailsData = getCurrentDetailsData(current_put_details);
      let msgObj = "";
      msgObj = getNavConfig(header_msge_list, mode, screen_id);
      if (msgObj.length === 1) msgObj = msgObj[0].description;
      console.log('msgObj', header_msge_list);
      setHeaderMsg(msgObj);
      setCurrentDetails(currentDetailsData);
      setPreviousDetails(previousDetailsData);
      setConveyorData(data);
    }
  }, [isFetching, success, error, data]);
  console.log("screen id", screenId);

  //fetch conveyor data and create data for to component
  const setConveyorData = (data) => {
    const {
      state_data,
      state_data: {
        title,
        cancel_scan_enabled,
        ppsbin_list,
        pps_tote_list,
        pps_tote_list_disabled,
        is_idle,
      },
    } = data;
    if (title) setTitle(title);
    console.log("pps_tote_list_disabled", pps_tote_list_disabled);
    if (ppsbin_list && ppsbin_list.length > 0) {
      let ppsData = [...ppsbin_list];
      console.log("ppsData", ppsData);
      ppsData = mapConveyorBinData(ppsData, BIN);
      setConveyorBinData(ppsData);
    }
    if (pps_tote_list) {
      let ppsToteData = [...pps_tote_list];
      console.log("pps_tote_list", ppsToteData);
      ppsToteData = mapConveyorToteData(ppsToteData, TOTE);
      setConveyorToteData(ppsToteData);
    }
    if (state_data.hasOwnProperty("pps_tote_list_disabled"))
      setConveyorDisabled(pps_tote_list_disabled);
    if (state_data.hasOwnProperty("is_idle")) setConveyorIdle(is_idle);
  };

  if (screenId === PICK_FRONT_WAITING_FOR_MSU)
    return (
      <PickFrontWaitingForMSUContainer
        headerMsg={headerMsg}
        previousDetails={previousDetails}
        data={data}
        currentDetails={currentDetails}
        seatMode={seatMode}
        conveyorToteData={conveyorToteData}
        conveyorBinData={conveyorBinData}
        conveyorIdle={conveyorIdle}
        conveyorDisabled={conveyorDisabled}
        title={title}
      />
    );

  if (screenId === PICK_FRONT_DOCK_TOTE)
    return (
      <PickFrontDockToteContainer
        headerMsg={headerMsg}
        previousDetails={previousDetails}
        data={data}
        currentDetails={currentDetails}
        seatMode={seatMode}
        conveyorToteData={conveyorToteData}
        conveyorBinData={conveyorBinData}
        conveyorIdle={conveyorIdle}
        conveyorDisabled={conveyorDisabled}
        title={title}
      />
    );

  if (
    screenId === PICK_FRONT_TTP_ITEM_SCAN ||
    screenId === PICK_FRONT_UNDOCK_TOTE
  )
    return (
      <PickFrontTtpItemScanContainer
        headerMsg={headerMsg}
        previousDetails={previousDetails}
        data={data}
        currentDetails={currentDetails}
        seatMode={seatMode}
        conveyorToteData={conveyorToteData}
        conveyorBinData={conveyorBinData}
        conveyorIdle={conveyorIdle}
        conveyorDisabled={conveyorDisabled}
        title={title}
      />
    );
  if (
    screenId === PICK_FRONT_MORE_ITEM_SCAN ||
    screenId === PICK_FRONT_PPTL_PRESS
  )
    return (
      <PickFrontMoreItemScanContainer
        headerMsg={headerMsg}
        previousDetails={previousDetails}
        data={data}
        currentDetails={currentDetails}
        seatMode={seatMode}
        conveyorToteData={conveyorToteData}
        conveyorBinData={conveyorBinData}
        conveyorIdle={conveyorIdle}
        conveyorDisabled={conveyorDisabled}
        title={title}
      />
    );
    if (
      screenId === PICK_FRONT_SCAN_OR_WAIT_FOR_CONTAINER
    )
      return (
        <ScanPackingboxContainer
          headerMsg={headerMsg}
          previousDetails={previousDetails}
          data={data}
          currentDetails={currentDetails}
          seatMode={seatMode}
          conveyorToteData={conveyorToteData}
          conveyorBinData={conveyorBinData}
          conveyorIdle={conveyorIdle}
          conveyorDisabled={conveyorDisabled}
          title={title}
        />
      );
    
  if (screenId && PICK_VALID_SCREEN_ID.indexOf(screenId) < 0)
    return <InvalidScreen />;
  return <Loader />;
};

export default PickFront;
