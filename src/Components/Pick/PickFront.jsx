import { useEffect, useState } from "react";
 
import { capitalizeFirstLetter, fetchDetailsFromData, getCurrentDetailsData, getNavConfig, getPreviousDetailsData, manupulateServerMessges } from "../../utils/helpers/commonHelpers";
import {  PICK_FRONT_DOCK_TOTE ,PICK_FRONT_TTP_ITEM_SCAN,PICK_FRONT_MORE_ITEM_SCAN ,PICK_FRONT_PPTL_PRESS,PICK_FRONT_UNDOCK_TOTE} from "../../utils/screenIds";
import Loader from "../Common/Loader";
import { VALID_SCREEN_ID } from "../../utils/constants";
import InvalidScreen from "../Common/InvalidScreen";
import ScanTote from "./../../Containers/Pick/PickFront/ScanTote"
import ScanEntity from "../../Containers/Pick/PickFront/ScanEntity"
import PlaceEntityPickContainer from "../../Containers/Pick/PickFront/PlaceEntity"

const PickFront =({ data, isFetching, success, error }) => {

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
            console.log(msgObj)
            setHeaderMsg(msgObj)
            setCurrentDetails(currentDetailsData)
            setPreviousDetails(previousDetailsData)
        }
    }, [isFetching, success, error, data])


    if(screenId === PICK_FRONT_DOCK_TOTE) return (
        <ScanTote 
            headerMsg={headerMsg} 
            previousDetails={previousDetails} 
            data={data}
            currentDetails={currentDetails}
            seatMode={seatMode}
        />
    )

    if(screenId === PICK_FRONT_TTP_ITEM_SCAN ||  screenId=== PICK_FRONT_UNDOCK_TOTE) return (
        <ScanEntity 
            headerMsg={headerMsg} 
            previousDetails={previousDetails} 
            data={data}
            currentDetails={currentDetails}
            seatMode={seatMode}
        />
    )

    if(screenId === PICK_FRONT_MORE_ITEM_SCAN || screenId === PICK_FRONT_PPTL_PRESS) return (
        <PlaceEntityPickContainer 
            headerMsg={headerMsg} 
            previousDetails={previousDetails} 
            data={data}
            currentDetails={currentDetails}
            seatMode={seatMode}
        />
    )


    // if(screenId === PICK_FRONT_MORE_ITEM_SCAN) return (
    //     <PlaceEntityPickContainer 
    //         headerMsg={headerMsg} 
    //         previousDetails={previousDetails} 
    //         data={data}
    //         currentDetails={currentDetails}
    //         seatMode={seatMode}
    //     />
    // )




    if(screenId && VALID_SCREEN_ID.indexOf(screenId) < 0) return <InvalidScreen />
    return <Loader />
}


export default PickFront
