import { useDispatch, useSelector } from 'react-redux';
import { triggerEventAction } from '../../../redux/actions/eventActions';
import { EVENT_TYPE_CANCEL_SCAN } from '../../../utils/constants';
import ScanEntity from './../../../Components/Put/ScanEntity/ScanEntity';

const ScanEntityContainer = ({...props}) => {

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

    return <ScanEntity {...props} handleCancelScan={handleCancelScan}  />
}

export default ScanEntityContainer;