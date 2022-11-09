import * as SCREEN_ID from '../../../utils/screenIds'

import {
  APP_SOURCE,
  EVENT_BIN_FULL_CONFIRMED,
  EVENT_TYPE_CANCEL_SCAN_ALL,
  EVENT_TYPE_QUANTITY_UPDATE_FROM_GUI,
  EXCEPTION_BUTTON_PRESS
} from '../../../utils/constants'
import React, { useEffect, useState } from 'react'
import { fetchDetailsFromData, mapLegendsData } from '../../../utils/helpers/commonHelpers'
import { useDispatch, useSelector } from 'react-redux'

import ExceptionPickFrontContainer from './Exception.PickFront.Container'
import MoreItemScanPPTLPressPickFront from '../../../Components/Pick/PickFront/MoreItemScan.PPTLPress.PickFront.'
import { PICK_FRONT_MISSING_OR_UNSCANNABLE_DAMAGED_ITEM } from '../../../utils/screenIds'
import { triggerEventAction } from '../../../redux/actions/eventActions'

/*
  Screen IDs.
  PICK_FRONT_MORE_ITEM_SCAN: pick_front_more_item_scan
  PICK_FRONT_PPTL_PRESS: pick_front_pptl_press
*/

const MoreItemScanPPTLPressPickFrontContainer = ({ ...props }) => {
  const [showModal, setShowModal] = useState(false)
  const { data } = useSelector((state) => state.mainStateReducer)
  const dispatch = useDispatch()
  const [totalQty, setTotalQty] = useState(0)
  const [isKqAllowed, setIsKqAllowed] = useState(false)
  const [kqDirection] = useState('both')
  const [quantity, setQuantity] = useState(0)
  // const [subHeader, setsubHeader] = useState('')
  const [isExceptionScreen, setIsExceptionScreen] = useState(false)
  const [legendData, setLegendData] = useState([])
  const [productDetails, setProductDetails] = useState({})
  const [productImages, setProductImages] = useState([])
  const [isToteBtnEnabled, setIsToteBtnEnabled] = useState(false)

  useEffect(() => {
    if (props.screenId === PICK_FRONT_MISSING_OR_UNSCANNABLE_DAMAGED_ITEM) {
      setIsExceptionScreen(true)
    }
    const {
      state_data: { legends, product_info, scan_details, button_press_allowed },
    } = data
    console.log(button_press_allowed)
    if (button_press_allowed) setIsToteBtnEnabled(button_press_allowed)

    const { current_qty, kq_allowed, total_qty } = scan_details || {}
    if (total_qty) setTotalQty(parseInt(total_qty))
    if (current_qty) setQuantity(parseInt(current_qty))
    if (kq_allowed) setIsKqAllowed(kq_allowed)

    if (legends) {
      let legendObj = Object.assign([], legends)
      legendObj = mapLegendsData(legendObj)
      setLegendData(legendObj)
    }

    //getting product details
    let productImg = []
    let productInfo = fetchDetailsFromData(product_info || [])
    if (productInfo['product_local_image_url']) {
      if (Array.isArray(productInfo['product_local_image_url'])) {
        productImg = productInfo['product_local_image_url']
      } else productImg.push(productInfo['product_local_image_url'])
      setProductImages(productImg)
    }
    if (productInfo.hasOwnProperty('product_local_image_url')) {
      delete productInfo.product_local_image_url
    }
    setProductDetails(productInfo)
  }, [props.screenId, data])

  const onChangeQuantityHandler = (qty) => {
    const eventData = {
      event_name: EVENT_TYPE_QUANTITY_UPDATE_FROM_GUI,
      event_data: {
        quantity: qty,
      },
      source: APP_SOURCE,
    }
    dispatch(triggerEventAction(eventData))
  }

  const onExceptionClickHandler = () => {
    const {
      state_data: { rack_id },
    } = data
    const eventData = {
      event_name: EXCEPTION_BUTTON_PRESS,
      source: APP_SOURCE,
    }
    dispatch(triggerEventAction(eventData))
  }

  const onMarkFullHandler = () => {
    const eventData = {
      event_name: EVENT_TYPE_QUANTITY_UPDATE_FROM_GUI,
      event_data: {
        quantity: totalQty,
      },
      source: APP_SOURCE,
    }
    dispatch(triggerEventAction(eventData))
  }

  const onCancelScanHandler = () => {
    const eventData = {
      event_name: EVENT_TYPE_CANCEL_SCAN_ALL,
      source: APP_SOURCE,
    }
    dispatch(triggerEventAction(eventData))
  }

  const onToteFullHandler = () => {
    const eventData = {
      event_name: EVENT_BIN_FULL_CONFIRMED,
      event_data: {
        quantity: quantity,
      },
      source: APP_SOURCE,
    }
    dispatch(triggerEventAction(eventData))
  }

  const getExceptionScreen = () => {
    return <ExceptionPickFrontContainer data={data.state_data} />
  }

  return (
    <MoreItemScanPPTLPressPickFront
      legends={legendData}
      productDetails={productDetails}
      productImages={productImages}
      qty={quantity}
      totalEntities={totalQty}
      allowedKqDirection={kqDirection}
      isKqAllowed={isKqAllowed}
      onChangeQuantityHandler={onChangeQuantityHandler}
      onExceptionClickHandler={onExceptionClickHandler}
      onMarkFullHandler={onMarkFullHandler}
      onCancelScanHandler={onCancelScanHandler}
      onToteFullHandler={onToteFullHandler}
      isExceptionScreen={isExceptionScreen}
      exceptionScreen={isExceptionScreen ? getExceptionScreen() : null}
      showEntityDetails={props.screenId === SCREEN_ID.PICK_FRONT_PPTL_PRESS ? false : true}
      isToteBtnEnabled={isToteBtnEnabled}
      {...props}
    />
  )
}

export default MoreItemScanPPTLPressPickFrontContainer
