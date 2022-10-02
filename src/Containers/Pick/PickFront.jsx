import PickFront from "../../Components/Pick/PickFront";
import React from 'react';
import { useSelector } from "react-redux";

const PickFrontContainer = () => {
    
    const STATE_DATA = useSelector( state => state.mainStateReducer)
    return <PickFront {...STATE_DATA}/>
}

export default PickFrontContainer;