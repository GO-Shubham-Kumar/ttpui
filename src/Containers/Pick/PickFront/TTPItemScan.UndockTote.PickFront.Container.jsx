import {
  APP_SOURCE,
  BIN,
  EVENT_TYPE_CANCEL_SCAN,
  EVENT_TYPE_EXCEPTION_PRESS,
  TOTE,
} from '../../../utils/constants'
import { fetchDetailsFromData, mapLegendsData } from '../../../utils/helpers/commonHelpers'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import TTPItemScanUndockTotePickFront from '../../../Components/Pick/PickFront/TTPItemScan.UndockTote.PickFront'
import { triggerEventAction } from '../../../redux/actions/eventActions'

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

  const [legendData, setLegendData] = useState([])
  const [productDetails, setProductDetails] = useState({})
  const [productImages, setProductImages] = useState([])

  useEffect(() => {
    if (data.state_data) {
      const {
        state_data,
        state_data: { cancel_scan_enabled, legends, product_info },
      } = data

      setCancelButtonEnable(cancel_scan_enabled)

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
    }
  }, [data])

  const onExceptionHandler = () => {
    const eventData = {
      event_name: EVENT_TYPE_EXCEPTION_PRESS,
      source: APP_SOURCE,
    }
    dispatch(triggerEventAction(eventData))
  }

  return (
    <TTPItemScanUndockTotePickFront
      productDetails={productDetails}
      productInfo={productImages}
      legends={legendData}
      onExceptionHandler={onExceptionHandler}
      {...props}
    />
  )
}

export default TTPItemScanUndockTotePickFrontContainer
