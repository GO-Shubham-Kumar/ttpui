import * as Constant from '../../../utils/constants'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import BinScanPackingBoxScreen from '../../../Components/Pick/BinScanPackingBox.Screen'
import { mapLegendsData } from '../../../utils/helpers/commonHelpers'

const BinScanPackingBoxContainer = ({ data, ...props }) => {
  const [boxType, setBoxType] = useState('XXYYYZZZZ')
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
    <BinScanPackingBoxScreen
      boxType={boxType}
      legends={legends}
      seatMode={seatMode}
      onCancelScanHandler={onCancelScanHandler}
      {...props}
    />
  )
}

export default BinScanPackingBoxContainer
