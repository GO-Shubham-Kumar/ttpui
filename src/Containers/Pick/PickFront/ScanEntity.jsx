import ScanEntityPick from "../../../Components/Pick/ScanEntity/ScanEntity";
import { Modal, Typography, Table } from "operational-component-lib";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ScanEntityPickContainer({...props }) {
  const [showModal, setShowModal] = useState(false);
  const { data } = useSelector((state) => state.mainStateReducer);
  const dispatch = useDispatch();


  const onConfirmHandler = () => {
    alert("ss");
    setShowModal(true);
  };

  let legends = [
    {
      color: "blue",
      text: "Inventory Totes",
    },
    {
      color: "#7BAABA",
      text: "Packing Box",
    },
  ];

  let prdtdetails = {
    "Item Serieal": "GHTSJIT67085",
    "Product Name": "Iphone",
    Color: "Black",
    "Dim (cm)": "27 x 16 x 56",
  };

  let prdtinfo = [
    "static/media/src/assets/images/bg1.png",
    "static/media/src/assets/images/bg2.png",
    "static/media/src/assets/images/bg3.png",
  ];


  return (
    <ScanEntityPick productDetails={prdtdetails} {...props}  prdtinfo={prdtinfo} legends={legends}/>
  );
}

export default ScanEntityPickContainer;
