import { Modal, Table, Typography } from "operational-component-lib";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import ScanPackingBox from "./../../../Components/Pick/ScanPackingBox/ScanPackingBox";
import { mapLegendsData } from "../../../utils/helpers/commonHelpers";

function ScanPackingBoxContainer({ data, ...props }) {
  const [boxType, setBoxType] = useState("XXYYYZZZZ");
  const [seatMode, setSeatMode] = useState("Pick");
  const [legends, setLegends] = useState([]);
  const dispatch = useDispatch();

useEffect(()=>{
  const { state_data: { packing_box_type, legend } } = data;
  if(packing_box_type && packing_box_type !== "undefined") setBoxType(packing_box_type)
  if(legend){
    let legendsData = Object.assign([], legend);
    legendsData = mapLegendsData(legendsData)
    console.log('legendsData', legendsData)
    setLegends(legendsData)
  }
},[ data ] )

  // let legends = [
  //   {
  //     color: "blue",
  //     text: "Inventory Totes",
  //   },
  //   {
  //     color: "#7BAABA",
  //     text: "Packing Box",
  //   },
  // ];

  return (
    <ScanPackingBox
      boxtype={boxType}
      legends={legends}
      seatMode={seatMode}
      {...props}
    />
  );
}

export default ScanPackingBoxContainer;
