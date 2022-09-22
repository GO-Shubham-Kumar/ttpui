import { useEffect, useState } from "react";
import ScanPalletContainer from "../../Containers/Put/PutBack/ScanPallet";
import ScanToteContainer from "../../Containers/Put/PutBack/ScanTote";
import ScanEntityContainer from "../../Containers/Put/PutBack/ScanEntity";
import { getCurrentDetailsData, getNavConfig, getPreviousDetailsData, manupulateServerMessges } from "../../utils/helpers/commonHelpers";
import { SCREEN_ID_MAPPING, UD_PUT_FRONT_TOTE_SCAN, UD_PUT_TOTE_INDUCTION, UD_PUT_FRONT_ENTITY_SCAN, UD_PUT_FRONT_PLACE_ITEMS_IN_RACK } from "../../utils/screenIds";
import Loader from "../Common/Loader";
import { VALID_SCREEN_ID } from "../../utils/constants";
import InvalidScreen from "../Common/InvalidScreen";
import PlaceEntityContainer from "../../Containers/Put/PutBack/PlaceEntity";

const PutBack  =({ data, isFetching, success, error }) => {
    console.log('-state data', isFetching, success, error, data);
    let headerMessage = '';
    const [ headerMsg, setHeaderMsg ] = useState('');
    const [ screenId, setScreenId ] = useState('');
    const [ previousDetails, setPreviousDetails ] = useState({});
    const [ currentDetails, setCurrentDetails ] = useState({});
    const [ seatMode, setSeatMode ] = useState('');
    useEffect(()=>{
        if(!isFetching && success && data.state_data){
            const { state_data : { header_msge_list, screen_id, previous_put_details, current_put_details, mode } } = data;
            setScreenId(screen_id)
            setSeatMode(mode)
            const previousDetailsData = getPreviousDetailsData(previous_put_details);
            console.log('msgObj -- tote', header_msge_list)
            const currentDetailsData = getCurrentDetailsData(current_put_details);
            let msgObj = ''
            msgObj = getNavConfig(header_msge_list, mode, screen_id)
            if(msgObj.length ===1 ) msgObj=msgObj[0].description
            setHeaderMsg(msgObj)
            // }else{

            //     msgObj = manupulateServerMessges(header_msge_list);
            //     console.log('currentDetailsData', currentDetailsData);
            //     setHeaderMsg(msgObj.value)
            // }
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
            seatMode={seatMode}
        />
    )
    if(screenId === UD_PUT_TOTE_INDUCTION) return (
        <ScanToteContainer 
            headerMsg={headerMsg} 
            previousDetails={previousDetails} 
            data={data}
            currentDetails={currentDetails}
            seatMode={seatMode}
        />
    )
    if(screenId === UD_PUT_FRONT_ENTITY_SCAN) return (
        <ScanEntityContainer 
            headerMsg={headerMsg} 
            previousDetails={previousDetails} 
            data={data}
            currentDetails={currentDetails}
            seatMode={seatMode}
        />
    )
    if(screenId === UD_PUT_FRONT_PLACE_ITEMS_IN_RACK) return (
        <PlaceEntityContainer 
            headerMsg={headerMsg} 
            previousDetails={previousDetails} 
            data={data}
            currentDetails={currentDetails}
            seatMode={seatMode}
        />
    )
    if(screenId && VALID_SCREEN_ID.indexOf(screenId) < 0) return <InvalidScreen />
   return <Loader />
    
}
export default PutBack