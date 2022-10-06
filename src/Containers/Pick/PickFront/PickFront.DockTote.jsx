import PickFrontDockTote from '../../../Components/Pick/ScanTote/PickFront.DockTote';
import { useEffect, useState } from 'react';
import { APP_SOURCE, EVENT_CLOSE_PALLET_MODAL, EVENT_TYPE_CANCEL_SCAN } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { triggerEventAction } from '../../../redux/actions/eventActions';

function PickFrontDockToteContainer({data,...props}) {

  const [ cancelButtonEnable, setCancelButtonEnable ] = useState(false);
    // const { data } = useSelector( (state) => {
    //     console.log('new redux state',state )
    //     return state.mainStateReducer
    // });
    const { success, error, isFetching } = useSelector( state => state.serverEvents )
    const dispatch = useDispatch()
    const subHeader = "";

    useEffect(()=>{
      if(data.state_data){
        const { state_data : { cancel_scan_enabled } } = data;
        console.log("cancel_scan_enabled",cancel_scan_enabled)
        setCancelButtonEnable(cancel_scan_enabled)
    }
    },[data])

    const cancelScanHandler = ()=>{
      alert ("cancel scan request sent")
  }


    let legends = [
        {
          color: "blue",
          text: "Inventory Totes",
        },
        {
          color: "#7BAABA",
          text: "Order Totes",
        },
      ];

    return (
            <PickFrontDockTote  subHeader={subHeader} legends={legends} {...props} cancelButtonEnable ={cancelButtonEnable} cancelScanHandler={cancelScanHandler} />
    )
}

export default PickFrontDockToteContainer;