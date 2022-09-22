import { useSelector } from "react-redux"
import { fetchDetailsFromData } from "../../../utils/helpers/commonHelpers";
import PlaceEntity from "./../../../Components/Put/PlaceEntity/PlaceEntity"

const PlaceEntityContainer = ({...props}) => {
    const { data } = useSelector(state => state.mainStateReducer) ;
    let productInfo = {}
    if(data.state_data){
      const { state_data : { product_info } } = data;
      console.log('product_info', product_info);
      productInfo = fetchDetailsFromData(product_info || [])
      console.log('productInfo --', productInfo);
    }
      let KQenteyqty=3
      let KQtotalEntities=20 
      let actualqty = KQtotalEntities-KQenteyqty

      let prdtinfo=[
        'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
      ]


    return <PlaceEntity {...props} actualqty={actualqty}  qty={KQenteyqty} totalEntities={KQtotalEntities}  prdtinfo={prdtinfo} />
}

export default PlaceEntityContainer;