import * as Constant from '../../../utils/constants'

import { useEffect, useState } from 'react'

import BinScanWaitScreen from '../../../Components/Pick/PickFront/BinScanWait.PickFront'
import { mapLegendsData } from '../../../utils/helpers/commonHelpers'
import { useDispatch } from 'react-redux'

/*
  Screen IDs.
  PICK_FRONT_SCAN_OR_WAIT_FOR_CONTAINER: pick_front_scan_or_wait_for_container
  PICK_FRONT_BIN_SCAN: pick_front_bin_scan
*/

const BinScanWaitContainer = ({ data, ...props }) => {
  const [boxType, setBoxType] = useState('XXYYZZ')
  const [seatMode, setSeatMode] = useState('Pick')
  const [legends, setLegends] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const { packing_box_type, legends } = data

    if (packing_box_type) setBoxType(packing_box_type)
    if (legends) {
      let legendsData = Object.assign([], legends)
      legendsData = mapLegendsData(legendsData)
      setLegends(legendsData)
    }
  }, [data])

  const onCancelScanHandler = () => {
    const {
      state_data: { rack_id },
    } = data
    const eventData = {
      event_name: Constant.EVENT_TYPE_CANCEL_SCAN,
      event_data: {
        barcode: rack_id,
      },
      source: Constant.APP_SOURCE,
    }
    // dispatch(triggerEventAction(eventData))
  }
  
  return (
    <BinScanWaitScreen
      boxType={boxType}
      legends={legends}
      seatMode={seatMode}
      onCancelScanHandler={onCancelScanHandler}
      {...props}
    />
  )
}

export default BinScanWaitContainer
