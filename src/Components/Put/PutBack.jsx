import { SCREEN_ID_MAPPING, UD_PUT_FRONT_ENTITY_SCAN, UD_PUT_FRONT_MISSIN, UD_PUT_FRONT_PLACE_ITEMS_IN_RACK, UD_PUT_FRONT_PLACE_TOTE_ON_CONVEYOR, UD_PUT_FRONT_TOTE_SCAN, UD_PUT_TOTE_INDUCTION } from "../../utils/screenIds";
import { capitalizeFirstLetter, fetchDetailsFromData, getCurrentDetailsData, getNavConfig, getPreviousDetailsData, manupulateServerMessges } from "../../utils/helpers/commonHelpers";
import { useEffect, useState } from "react";

import InvalidScreen from "../Common/InvalidScreen";
import Loader from "../Common/Loader";
import PlaceEntityContainer from "../../Containers/Put/PutBack/PlaceEntity";
import PlaceToteContainer from "../../Containers/Put/PutBack/PlaceTote";
import ScanEntityContainer from "../../Containers/Put/PutBack/ScanEntity";
import ScanPalletContainer from "../../Containers/Put/PutBack/ScanPallet";
import ScanToteContainer from "../../Containers/Put/PutBack/ScanTote";
import { VALID_SCREEN_ID } from "../../utils/constants";

const PutBack  =({ data, isFetching, success, error }) => {
    let headerMessage = '';
    const [ headerMsg, setHeaderMsg ] = useState('');
    const [ screenId, setScreenId ] = useState('');
    const [ previousDetails, setPreviousDetails ] = useState({});
    const [ currentDetails, setCurrentDetails ] = useState({});
    const [ seatMode, setSeatMode ] = useState('');
   
    useEffect(()=>{
        if(!isFetching && success && data.state_data){
            const { state_data : { 
                header_msge_list, 
                screen_id, 
                previous_put_details, 
                current_put_details, 
                mode, 
            } } = data;
            setScreenId(screen_id);
            setSeatMode(capitalizeFirstLetter(mode));
            const previousDetailsData = fetchDetailsFromData(previous_put_details);
            const currentDetailsData = getCurrentDetailsData(current_put_details);
            let msgObj = ''
            msgObj = getNavConfig(header_msge_list, mode, screen_id)
            if(msgObj.length ===1 ) msgObj=msgObj[0].description
            setHeaderMsg(msgObj)
            setCurrentDetails(currentDetailsData)
            setPreviousDetails(previousDetailsData)
        }
    }, [isFetching, success, error, data]);
    
    if(screenId === UD_PUT_FRONT_TOTE_SCAN) return (
        <ScanPalletContainer 
            headerMsg={headerMsg} 
            previousDetails={previousDetails} 
            data={data}
            currentDetails={currentDetails}
            seatMode={seatMode}
        />
    )
    if(screenId === UD_PUT_TOTE_INDUCTION || screenId === UD_PUT_FRONT_MISSIN) return (
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
    if(screenId === UD_PUT_FRONT_PLACE_TOTE_ON_CONVEYOR) return (
        <PlaceToteContainer 
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