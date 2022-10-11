import { APP_SOURCE, EVENT_TYPE_CANCEL_SCAN } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';

import ScanEntity from './../../../Components/Put/ScanEntity/ScanEntity';
import { triggerEventAction } from '../../../redux/actions/eventActions';

const ScanEntityContainer = ({...props}) => {

    const dispatch = useDispatch()
    const { data } = useSelector( state => state.mainStateReducer)
    const handleCancelScan = () => {
        const {state_data : { rack_id } } = data;
        const eventData = {
            event_name : EVENT_TYPE_CANCEL_SCAN,
            event_data : {
              barcode: rack_id
            },
            source : APP_SOURCE
        }
        dispatch(triggerEventAction(eventData))
      }

    return <ScanEntity {...props} handleCancelScan={handleCancelScan}  />
}

export default ScanEntityContainer;