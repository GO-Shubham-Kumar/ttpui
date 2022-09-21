import PutBack from "../../Components/Put/PutBack";
import React from 'react';
import { useSelector } from "react-redux";

const PutBackContainer = () => {
    
    const STATE_DATA = useSelector( state => state.mainStateReducer)
    return <PutBack {...STATE_DATA}/>
}

export default PutBackContainer;