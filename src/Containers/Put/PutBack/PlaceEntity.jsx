import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { triggerEventAction } from "../../../redux/actions/eventActions";
import { EVENT_TYPE_CANCEL_SCAN } from "../../../utils/constants";
import { fetchDetailsFromData } from "../../../utils/helpers/commonHelpers";
import PlaceEntity from "./../../../Components/Put/PlaceEntity/PlaceEntity"

const PlaceEntityContainer = ({...props}) => {
    const dispatch = useDispatch();
    const [ skuQty, setSkuQty ] = useState('');
    const [ productDetails, setProductDetails ] = useState({});
    const [ productImages, setProductImages ] = useState([]);
    const [quantity, setQuantity] = useState(0)
    const { data : mainData } = useSelector(state => state.mainStateReducer) ;
    
    
    useEffect(()=>{
      if(mainData.state_data){
        let productInfo = {}
        let productimage = []
        const { state_data } = mainData;
        const { product_info, rack_details : { rack_type_rec } } = state_data;
        console.log('rack_type_rec', rack_type_rec)
        if(rack_type_rec && rack_type_rec[0]){
          setSkuQty(rack_type_rec[0]['put_qty'])
        }
        console.log('product_info', product_info);
        productInfo = fetchDetailsFromData(product_info || [])
        console.log('productInfo --', productInfo);
        if(productInfo['product_local_image_url']){
          if(Array.isArray(productInfo['product_local_image_url'])) productimage = productInfo['product_local_image_url']
          else productimage.push(productInfo['product_local_image_url'])
          console.log('productimage', productimage)
          setProductImages(productimage);
        }
        if(productInfo['product_local_image_url'] ) delete productInfo['product_local_image_url']
        setProductDetails(productInfo)
      }
    },[mainData])
    const handleCancelScan = () => {
        const {state_data : { item_uid } } = mainData;
        console.log('itemuid', item_uid)
        const eventData = {
              event_name : EVENT_TYPE_CANCEL_SCAN,
              event_data : {
                barcode: item_uid
          }
        }
        console.log('eventData', eventData);
        dispatch(triggerEventAction(eventData))
    }

    const quantityChangeHandler = (qty) =>{
      setQuantity(qty)
    }

    const exceptionhandler =() =>{
      console.log('exception called')
    }

    let KQtotalEntities=20 

    let prdtinfo=[
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    ]


    return <PlaceEntity 
      qty={quantity} 
      totalEntities={KQtotalEntities} 
      prdtinfo={prdtinfo} 
      handleCancelScan={handleCancelScan}
      actualqty={skuQty}
      productDetails={productDetails}
      productImages={productImages}
      quantityChangeHandler={quantityChangeHandler}
      exceptionhandler={exceptionhandler}
      {...props} 
    />
}

export default PlaceEntityContainer;