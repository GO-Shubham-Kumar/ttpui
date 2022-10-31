import * as SCREEN_ID from '../../utils/screenIds'

import {
  BIN,
  CONVEYOR_CARRIER_TYPE_PACKING_BOX,
  CONVEYOR_CARRIER_TYPE_TOTE,
  CONVEYOR_TYPE_ORDER_TOTE,
  CONVEYOR_TYPE_PACKING_BOX,
  PICK_VALID_SCREEN_ID,
  TOTE,
  VALID_SCREEN_ID,
} from '../../utils/constants'
import {
  capitalizeFirstLetter,
  fetchDetailsFromData,
  getCurrentDetailsData,
  getNavConfig,
} from '../../utils/helpers/commonHelpers'
import { mapConveyorBinData, mapConveyorToteData } from '../../utils/helpers/conveyorHelpers'
import { useEffect, useState } from 'react'

import BinScanWaitContainer from '../../Containers/Pick/PickFront/BinScanWait.PickFront.Container'
import DockTotePickFrontContainer from '../../Containers/Pick/PickFront/DockTote.PickFront.Container'
import InvalidScreen from '../Common/InvalidScreen'
import Loader from '../Common/Loader'
import MoreItemScanPPTLPressPickFrontContainer from '../../Containers/Pick/PickFront/MoreItemScan.PPTLPress.PickFront.Container'
import TTPItemScanUndockTotePickFrontContainer from '../../Containers/Pick/PickFront/TTPItemScan.UndockTote.PickFront.Container'
import WaitingForMSUPickFrontContainer from '../../Containers/Pick/PickFront/WaitingForMSU.PickFront.Container'

const PickFront = ({ data, isFetching, success, error }) => {
  const [headerMsg, setHeaderMsg] = useState({})
  const [screenId, setScreenId] = useState('')
  const [previousDetails, setPreviousDetails] = useState({})
  const [currentDetails, setCurrentDetails] = useState({})
  const [seatMode, setSeatMode] = useState('')
  const [conveyorToteData, setConveyorToteData] = useState([])
  const [conveyorBinData, setConveyorBinData] = useState([])
  const [conveyorIdle, setConveyorIdle] = useState(true)
  const [conveyorDisabled, setConveyorDisabled] = useState(false)
  const [carrierType, setCarrierType] = useState(CONVEYOR_TYPE_ORDER_TOTE)
  const [title, setTitle] = useState('Wait for Tote')

  useEffect(() => {
    if (!isFetching && success && data.state_data) {
      const {
        state_data: {
          header_msge_list,
          screen_id,
          previous_put_details,
          current_put_details,
          mode,
          carrier_type,
        },
      } = data
      let cType = CONVEYOR_TYPE_ORDER_TOTE
      if (carrier_type == CONVEYOR_CARRIER_TYPE_PACKING_BOX) cType = CONVEYOR_TYPE_PACKING_BOX
      
      setScreenId(screen_id)
      setSeatMode(capitalizeFirstLetter(mode))
      const previousDetailsData = fetchDetailsFromData(previous_put_details)
      const currentDetailsData = getCurrentDetailsData(current_put_details)
      let msgObj = ''
      msgObj = getNavConfig(header_msge_list, mode, screen_id)
      if (msgObj.length === 1) msgObj = msgObj[0].description
      setHeaderMsg(msgObj)
      setCurrentDetails(currentDetailsData)
      setPreviousDetails(previousDetailsData)
      setConveyorData(data, cType)
      setCarrierType(cType)
     
    }
  }, [isFetching, success, error, data])

  //fetch conveyor data and create data for to component
  const setConveyorData = (data, cType) => {
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
    } = data
    if (title) setTitle(title)
    if (ppsbin_list && ppsbin_list.length > 0) {
      let ppsData = [...ppsbin_list]
      ppsData = mapConveyorBinData(ppsData, BIN, cType)
      setConveyorBinData(ppsData)
    }
    if (pps_tote_list) {
      let ppsToteData = [...pps_tote_list]
      ppsToteData = mapConveyorToteData(ppsToteData, TOTE)
      setConveyorToteData(ppsToteData)
    }
    if (state_data.hasOwnProperty('pps_tote_list_disabled')) setConveyorDisabled(pps_tote_list_disabled)
    if (
      state_data.hasOwnProperty('is_idle') &&
      !state_data.is_idle &&
      state_data?.pps_tote_list.every((i) => i?.tote_id === null)
    )
      setConveyorIdle(false)
  }

  if (screenId === SCREEN_ID.PICK_FRONT_WAITING_FOR_MSU)
    return (
      <WaitingForMSUPickFrontContainer
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
        carrierType={carrierType}
      />
    )

  if (screenId === SCREEN_ID.PICK_FRONT_DOCK_TOTE)
    return (
      <DockTotePickFrontContainer
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
        carrierType={carrierType}
      />
    )

  if (screenId === SCREEN_ID.PICK_FRONT_TTP_ITEM_SCAN || screenId === SCREEN_ID.PICK_FRONT_UNDOCK_TOTE)
    return (
      <TTPItemScanUndockTotePickFrontContainer
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
        carrierType={carrierType}
      />
    )
  if (
    screenId === SCREEN_ID.PICK_FRONT_MORE_ITEM_SCAN ||
    screenId === SCREEN_ID.PICK_FRONT_PPTL_PRESS ||
    screenId === SCREEN_ID.PICK_FRONT_MISSING_OR_UNSCANNABLE_DAMAGED_ITEM
  )
    return (
      <MoreItemScanPPTLPressPickFrontContainer
        headerMsg={headerMsg}
        previousDetails={previousDetails}
        currentDetails={currentDetails}
        seatMode={seatMode}
        conveyorToteData={conveyorToteData}
        conveyorBinData={conveyorBinData}
        conveyorIdle={conveyorIdle}
        conveyorDisabled={conveyorDisabled}
        title={title}
        screenId={screenId}
        carrierType={carrierType}
      />
    )
  if (
    screenId === SCREEN_ID.PICK_FRONT_SCAN_OR_WAIT_FOR_CONTAINER ||
    screenId === SCREEN_ID.PICK_FRONT_BIN_SCAN
  )
    return (
      <BinScanWaitContainer
        headerMsg={headerMsg}
        previousDetails={previousDetails}
        data={data?.state_data}
        currentDetails={currentDetails}
        seatMode={seatMode}
        conveyorToteData={conveyorToteData}
        conveyorBinData={conveyorBinData}
        conveyorIdle={conveyorIdle}
        conveyorDisabled={conveyorDisabled}
        title={title}
        carrierType={carrierType}
      />
    )

  if (screenId && PICK_VALID_SCREEN_ID.indexOf(screenId) < 0) return <InvalidScreen />
  return <Loader />
}

export default PickFront
