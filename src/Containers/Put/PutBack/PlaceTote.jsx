import PlaceTote from '../../../Components/Put/PlaceTote/PlaceTote';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EVENT_TYPE_CANCEL_SCAN, EVENT_TYPE_PROCESS_BARCODE, EVENT_TYPE_SEND_TOTE } from '../../../utils/constants';
import { triggerEventAction } from '../../../redux/actions/eventActions';
function PlaceToteContainer({...props}) {
    const subHeader = "";
    const dispatch = useDispatch()
    const { data } = useSelector( state => state.mainStateReducer)
    const handleCancelScan = () => {
        const {state_data : { item_uid } } = data;
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

    const handleSendTote = () => {
    const {state_data : { item_uid } } = data;
    console.log('itemuid', item_uid)
    const eventData = {
            event_name : EVENT_TYPE_SEND_TOTE,
            event_data : {
            barcode: item_uid
        }
    }
    console.log('eventData', eventData);
    // dispatch(triggerEventAction(eventData))
    }
    return (
        <>
            <PlaceTote {...props}  subHeader={subHeader}
                handleCancelScan={handleCancelScan} 
                handleSendTote={handleSendTote}   
            />
        </>
            
    )
}

export default PlaceToteContainer;