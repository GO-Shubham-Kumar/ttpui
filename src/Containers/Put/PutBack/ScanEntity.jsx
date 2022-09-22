import { useDispatch } from 'react-redux';
import { triggerEventAction } from '../../../redux/actions/eventActions';
import { EVENT_TYPE_CANCEL_SCAN } from '../../../utils/constants';
import ScanEntity from './../../../Components/Put/ScanEntity/ScanEntity';

const ScanEntityContainer = ({...props}) => {

    const dispatch = useDispatch()
    let header = [
        {
            active: false,
            description: "Scan the tote to continue",
            label: "Scan Tote",
            step: 1,
          },
          {
            active: true,
            description: "Place Entity from Pallet",
            label: "Scan Entity",
            step: 2,
          },
          {
            active: false,
            description: "Finished",
            label: "Finish",
            step: 3,
          },
      ]

      let binDetails = {
        'sku qty': 43,
        'sku Id': 123,
        'tote ID': 99
      }

      let palletId="dummypalletID"
      let toteId="dummyToteID"

      const handleCancelScan = () => {
        const eventData = {
              event_name : EVENT_TYPE_CANCEL_SCAN,
              event_data : {
                barcode: "69"
          }
        }
        console.log('eventData', eventData);
        // dispatch(triggerEventAction(eventData))
      }

    return <ScanEntity {...props}  palletId={palletId}  toteId={toteId} handleCancelScan={handleCancelScan}  />
}

export default ScanEntityContainer;