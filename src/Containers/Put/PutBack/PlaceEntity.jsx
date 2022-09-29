import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { triggerEventAction } from "../../../redux/actions/eventActions";
import { APP_SOURCE, EVENT_TYPE_CANCEL_SCAN } from "../../../utils/constants";
import { fetchDetailsFromData } from "../../../utils/helpers/commonHelpers";
import PlaceEntity from "./../../../Components/Put/PlaceEntity/PlaceEntity"

const PlaceEntityContainer = ({...props}) => {
    const dispatch = useDispatch();
    const [ skuQty, setSkuQty ] = useState('');
    const [ productDetails, setProductDetails ] = useState({});
    const [ productImages, setProductImages ] = useState([]);
    const [quantity, setQuantity] = useState(0)
    const [currentQty, setCurrentQty] = useState(0)
    const [totalQty, setTotalQty] = useState(0)
    const [isKqAllowed, setIsKqAllowed] = useState(false)
    const [kqDirection, setKqDirection] = useState(false)
    const { data : mainData } = useSelector(state => state.mainStateReducer) ;
    
    useEffect(()=>{
      if(mainData.state_data){
        let productInfo = {}
        let productimage = []
        const { state_data } = mainData;
        const { product_info, scan_details, rack_details : { rack_type_rec } } = state_data;
        if(rack_type_rec && rack_type_rec[0]){
          setSkuQty(rack_type_rec[0]['put_qty'])
        }
      
        productInfo = fetchDetailsFromData(product_info || [])
        if(productInfo['product_local_image_url']){
          if(Array.isArray(productInfo['product_local_image_url'])) productimage = productInfo['product_local_image_url']
          else productimage.push(productInfo['product_local_image_url'])
          console.log('productimage', productimage)
          setProductImages(productimage);
        }
        if(productInfo.hasOwnProperty('product_local_image_url')){
          delete productInfo.product_local_image_url;
          console.log('productDetails', productInfo)
        } 
        setProductDetails(productInfo)

        if(scan_details && Object.keys(scan_details).length > 0){
          if(scan_details.hasOwnProperty('total_qty')){
            const { kq_allowed, current_qty, total_qty, kq_direction  } = scan_details;
            console.log('scan_details', scan_details)
            console.log('scan_details', parseInt(current_qty))
            setIsKqAllowed(kq_allowed)
            setQuantity( parseInt(current_qty))
            setTotalQty(total_qty)
            setKqDirection(kq_direction)
          }
        }
      }
    },[mainData])
    const handleCancelScan = () => {
        const {state_data : { item_uid } } = mainData;
        console.log('item_uid', item_uid)
        const eventData = {
              event_name : EVENT_TYPE_CANCEL_SCAN,
              event_data : {
                barcode: item_uid
          },
          source : APP_SOURCE
        }
        console.log('eventData', eventData);
        dispatch(triggerEventAction(eventData))
    }

    const exceptionhandler =() =>{
      console.log('exception called')
    }

    // let KQtotalEntities=20 

    let prdtinfo=[
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    ]

    const onChangeQuantityHandler = (qty) => {
      setQuantity(qty)
      const {state_data : { item_uid } } = mainData;
      const eventData = {
        "event_name": "quantity_update_from_gui",
        "event_data": {
            "item_uid": item_uid,
            "quantity_updated": qty
        },
        source : APP_SOURCE
      };
      dispatch(triggerEventAction(eventData))
    }


    return <PlaceEntity 
      qty={quantity} 
      totalEntities={totalQty} 
      prdtinfo={prdtinfo} 
      handleCancelScan={handleCancelScan}
      actualQty={skuQty}
      productDetails={productDetails}
      productImages={productImages}
      exceptionhandler={exceptionhandler}
      onChangeQuantityHandler={onChangeQuantityHandler}
      allowedKqDirection={kqDirection}
      {...props} 
    />
}

export default PlaceEntityContainer;