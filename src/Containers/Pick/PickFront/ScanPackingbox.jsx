import ScanPackingBox from "../../../Components/Pick/ScanPackingBox/ScanPackingBox";
import { Modal, Typography, Table } from "operational-component-lib";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ScanPackingBoxContainer({ ...props }) {
  const [showModal, setShowModal] = useState(false);
  const [boxType, setBoxtype] = useState("XXYYYZZZZ");
  const [seatMode, setSeatMode] = useState("Pick");
  const { data } = useSelector((state) => state.mainStateReducer);
  const dispatch = useDispatch();

  let header = [
    {
      active: true,
      description: "Scan a Packing box",
      label: "Dock Packing Box",
      step: 1,
    },
    {
      active: false,
      description: "",
      label: "Scan Entity and confirm",
      step: 2,
    },
  ];

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


  const onConfirmHandler = () => {
    alert("ss");
    setShowModal(true);
  };

  return <ScanPackingBox header={header} boxtype={boxType}  legends={legends} seatMode={seatMode}/>;
}

export default ScanPackingBoxContainer;
