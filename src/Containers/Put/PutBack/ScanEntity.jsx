import { useDispatch, useSelector } from 'react-redux';
import { triggerEventAction } from '../../../redux/actions/eventActions';
import { APP_SOURCE, EVENT_TYPE_CANCEL_SCAN } from '../../../utils/constants';
import ScanEntity from './../../../Components/Put/ScanEntity/ScanEntity';

const ScanEntityContainer = ({...props}) => {

    const dispatch = useDispatch()
    const { data } = useSelector( state => state.mainStateReducer)
    const handleCancelScan = () => {
        const {state_data : { rack_id } } = data;
        console.log('rack_id', rack_id)
        const eventData = {
            event_name : EVENT_TYPE_CANCEL_SCAN,
            event_data : {
              barcode: rack_id
            },
            source : APP_SOURCE
        }
        console.log('eventData', eventData);
        dispatch(triggerEventAction(eventData))
      }

    return <ScanEntity {...props} handleCancelScan={handleCancelScan}  />
}

export default ScanEntityContainer;