import { APP_SOURCE, BIN, EVENT_TYPE_CANCEL_SCAN, TOTE } from '../../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import TTPItemScanUndockTotePickFront from '../../../Components/Pick/PickFront/TTPItemScan.UndockTote.PickFront'

/*
  Screen IDs.
  PICK_FRONT_TTP_ITEM_SCAN: pick_front_ttp_item_scan
  PICK_FRONT_UNDOCK_TOTE: pick_front_undock_tote
*/

const TTPItemScanUndockTotePickFrontContainer = ({ data, ...props }) => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [cancelButtonEnable, setCancelButtonEnable] = useState(false)
  const { success, error, isFetching } = useSelector((state) => state.serverEvents)
  const subHeader = ''

  useEffect(() => {
    if (data.state_data) {
      const {
        state_data,
        state_data: { cancel_scan_enabled },
      } = data
      console.log('cancel_scan_enabled', cancel_scan_enabled)
      setCancelButtonEnable(cancel_scan_enabled)
    }
  }, [data])

  let legends = [
    {
      color: 'blue',
      text: 'Inventory Totes',
    },
    {
      color: '#7BAABA',
      text: 'Packing Box',
    },
  ]

  let prdtDetails = {
    'Item Serieal': 'GHTSJIT67085',
    'Product Name': 'Iphone',
    Color: 'Black',
    'Dim (cm)': '27 x 16 x 56',
  }

  let prdtInfo = [
    'static/media/src/assets/images/bg1.png',
    'static/media/src/assets/images/bg2.png',
    'static/media/src/assets/images/bg3.png',
  ]

  const onExceptionHandler = () => {
    const {
      state_data: { rack_id },
    } = data
    console.log('rack_id', rack_id)
    const eventData = {
      event_name: EVENT_TYPE_CANCEL_SCAN,
      event_data: {
        barcode: rack_id,
      },
      source: APP_SOURCE,
    }
    console.log('eventData', eventData)
    // dispatch(triggerEventAction(eventData))
  }

  return (
    <TTPItemScanUndockTotePickFront
      productDetails={prdtDetails}
      {...props}
      prdtinfo={prdtInfo}
      legends={legends}
      onExceptionHandler={onExceptionHandler}
    />
  )
}

export default TTPItemScanUndockTotePickFrontContainer
