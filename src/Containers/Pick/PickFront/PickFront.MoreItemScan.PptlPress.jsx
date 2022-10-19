import {
  APP_SOURCE,
  EVENT_TYPE_CANCEL_SCAN,
  EVENT_TYPE_TOTE_FULL,
  EXCEPTION_BUTTON_PRESS,
} from '../../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import ExceptionPickFront from './Exception.PickFront'
import { PICK_FRONT_MISSING_OR_UNSCANNABLE_DAMAGED_ITEM } from '../../../utils/screenIds'
import PickFrontMoreItemScan from '../../../Components/Pick/PlaceEntity/PickFront.MoreItemScan.PptlPress'

function PickFrontMoreItemScanContainer({ ...props }) {
  const [showModal, setShowModal] = useState(false)
  const { data } = useSelector((state) => state.mainStateReducer)
  const dispatch = useDispatch()
  const [totalQty, setTotalQty] = useState(0)
  const [isKqAllowed, setIsKqAllowed] = useState(false)
  const [kqDirection, setKqDirection] = useState(false)
  const [quantity, setQuantity] = useState(0)
  // const [subHeader, setsubHeader] = useState('')
  const [isExceptionScreen, setIsExceptionScreen] = useState(false)

  useEffect(() => {
    if (props.screenId === PICK_FRONT_MISSING_OR_UNSCANNABLE_DAMAGED_ITEM) {
      setIsExceptionScreen(true)
    }
  }, [props.screenId])

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

  let prdtdetails = {
    'Item Serieal': 'GHTSJIT67085',
    'Product Name': 'Iphone',
    Color: 'Black',
    'Dim (cm)': '27 x 16 x 56',
  }

  let prdtinfo = [
    'static/media/src/assets/images/bg1.png',
    'static/media/src/assets/images/bg2.png',
    'static/media/src/assets/images/bg3.png',
  ]

  const onChangeQuantityHandler = () => {}

  const onExceptionClickHandler = () => {
    const {
      state_data: { rack_id },
    } = data
    const eventData = {
      event_name: EXCEPTION_BUTTON_PRESS,
      source: APP_SOURCE,
    }
  }

  const onMarkFullHandler = () => {
    const {
      state_data: { rack_id },
    } = data
    const eventData = {
      event_name: EVENT_TYPE_TOTE_FULL,
      event_data: {
        barcode: rack_id,
      },
      source: APP_SOURCE,
    }
  }

  const onCancelScanHandler = () => {
    const {
      state_data: { rack_id },
    } = data
    const eventData = {
      event_name: EVENT_TYPE_CANCEL_SCAN,
      event_data: {
        barcode: rack_id,
      },
      source: APP_SOURCE,
    }
    // dispatch(triggerEventAction(eventData))
  }

  const onToteFullHandler = () => {
    const {
      state_data: { rack_id },
    } = data
    const eventData = {
      event_name: EVENT_TYPE_TOTE_FULL,
      event_data: {
        barcode: rack_id,
      },
      source: APP_SOURCE,
    }
    // dispatch(triggerEventAction(eventData))
  }

  const getExceptionScreen = () => {
    return <ExceptionPickFront data={data.state_data} />
  }

  return (
    <PickFrontMoreItemScan
      legends={legends}
      productDetails={prdtdetails}
      prdtinfo={prdtinfo}
      qty={quantity}
      totalEntities={totalQty}
      allowedKqDirection={kqDirection}
      onChangeQuantityHandler={onChangeQuantityHandler}
      onExceptionClickHandler={onExceptionClickHandler}
      onMarkFullHandler={onMarkFullHandler}
      onCancelScanHandler={onCancelScanHandler}
      onToteFullHandler={onToteFullHandler}
      isExceptionScreen={isExceptionScreen}
      exceptionScreen={isExceptionScreen ? getExceptionScreen() : null}
      {...props}
    />
  )
}

export default PickFrontMoreItemScanContainer
