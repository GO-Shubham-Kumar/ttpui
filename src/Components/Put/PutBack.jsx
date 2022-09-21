import { useEffect, useState } from "react";
import ScanPalletContainer from "../../Containers/Put/PutBack/ScanPallet";
import ScanToteContainer from "../../Containers/Put/PutBack/ScanTote";
import { getCurrentDetailsData, getPreviousDetailsData, manupulateServerMessges } from "../../utils/helpers/commonHelpers";
import { SCREEN_ID_MAPPING, UD_PUT_FRONT_TOTE_SCAN, UD_PUT_TOTE_INDUCTION } from "../../utils/screenIds";
import Loader from "../Common/Loader";

const PutBack  =({ data, isFetching, success, error }) => {
    console.log('-state data', isFetching, success, error, data);
    let headerMessage = '';
    const [ headerMsg, setHeaderMsg ] = useState('');
    const [ screenId, setScreenId ] = useState('');
    const [ previousDetails, setPreviousDetails ] = useState({});
    const [ currentDetails, setCurrentDetails ] = useState({});
    useEffect(()=>{
        if(!isFetching && success && data.state_data){
            const { state_data : { header_msge_list, screen_id, previous_put_details, current_put_details } } = data;
            setScreenId(screen_id)
            const msgObj = manupulateServerMessges(header_msge_list);
            const previousDetailsData = getPreviousDetailsData(previous_put_details);
            const currentDetailsData = getCurrentDetailsData(current_put_details);
            console.log('currentDetailsData', currentDetailsData);
            setHeaderMsg(msgObj.value)
            setCurrentDetails(currentDetailsData)
            setPreviousDetails(previousDetailsData)
        }
    }, [isFetching, success, error, data])

    if(screenId === UD_PUT_FRONT_TOTE_SCAN) return (
        <ScanPalletContainer 
            headerMsg={headerMsg} 
            previousDetails={previousDetails} 
            data={data}
            currentDetails={currentDetails}
        />
    )
    if(screenId === UD_PUT_TOTE_INDUCTION) return (
        <ScanToteContainer 
            headerMsg={headerMsg} 
            previousDetails={previousDetails} 
            data={data}
            currentDetails={currentDetails}
        />
    )
   return <Loader />
    
}
export default PutBack