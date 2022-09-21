import ScanPallet from '../../../Components/Put/ScanPallet/ScanPallet';
import { getPreviousDetailsData } from '../../../utils/helpers/commonHelpers';

function ScanPalletContainer({ data, ...props }){
    
    return <ScanPallet {...props} />
}

export default ScanPalletContainer;