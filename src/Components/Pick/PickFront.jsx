import {
  PICK_FRONT_DOCK_TOTE,
  PICK_FRONT_MORE_ITEM_SCAN,
  PICK_FRONT_PPTL_PRESS,
  PICK_FRONT_TTP_ITEM_SCAN,
  PICK_FRONT_UNDOCK_TOTE,
} from "../../utils/screenIds";
import {
  capitalizeFirstLetter,
  fetchDetailsFromData,
  getCurrentDetailsData,
  getNavConfig,
  getPreviousDetailsData,
  manupulateServerMessges,
} from "../../utils/helpers/commonHelpers";
import { useEffect, useState } from "react";

import InvalidScreen from "../Common/InvalidScreen";
import Loader from "../Common/Loader";
import PickFrontDockToteContainer from "./../../Containers/Pick/PickFront/PickFront.DockTote";
import PickFrontMoreItemScanContainer from "../../Containers/Pick/PickFront/PickFront.MoreItemScan.PptlPress";
import PickFrontTtpItemScanContainer from "../../Containers/Pick/PickFront/PickFront.TtpItemScan.UndockTote";
import { VALID_SCREEN_ID } from "../../utils/constants";

const PickFront = ({ data, isFetching, success, error }) => {
  const [headerMsg, setHeaderMsg] = useState("");
  const [screenId, setScreenId] = useState("");
  const [previousDetails, setPreviousDetails] = useState({});
  const [currentDetails, setCurrentDetails] = useState({});
  const [seatMode, setSeatMode] = useState("");

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
      console.log(msgObj);
      setHeaderMsg(msgObj);
      setCurrentDetails(currentDetailsData);
      setPreviousDetails(previousDetailsData);
    }
  }, [isFetching, success, error, data]);
  console.log('screen id', screenId)

  
  if (screenId === PICK_FRONT_DOCK_TOTE) return (
      <PickFrontDockToteContainer
        headerMsg={headerMsg}
        previousDetails={previousDetails}
        data={data}
        currentDetails={currentDetails}
        seatMode={seatMode}
      />
    );

  if (
    screenId === PICK_FRONT_TTP_ITEM_SCAN ||
    screenId === PICK_FRONT_UNDOCK_TOTE
  ) return (
      <PickFrontTtpItemScanContainer
        headerMsg={headerMsg}
        previousDetails={previousDetails}
        data={data}
        currentDetails={currentDetails}
        seatMode={seatMode}
      />
    );
  if (
    screenId === PICK_FRONT_MORE_ITEM_SCAN ||
    screenId === PICK_FRONT_PPTL_PRESS
  ) return (
      <PickFrontMoreItemScanContainer
        headerMsg={headerMsg}
        previousDetails={previousDetails}
        data={data}
        currentDetails={currentDetails}
        seatMode={seatMode}
      />
    );

  if (screenId && VALID_SCREEN_ID.indexOf(screenId) < 0) return <InvalidScreen />;
  return <Loader />;
};

export default PickFront;
