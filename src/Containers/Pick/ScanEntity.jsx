import ScanEntityPick from "../../Components/Pick/ScanEntity/ScanEntity";
import ScanTote from "../../Components/Pick/ScanTote/ScanTote";
import { Modal, Typography, Table } from "operational-component-lib";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ScanEntityPickContainer({ ...props }) {
  const [showModal, setShowModal] = useState(false);
  const [seatMode, setSeatMode] = useState("Pick");
  const { data } = useSelector((state) => state.mainStateReducer);
  const dispatch = useDispatch();

  let header = [
    {
      active: false,
      description: "Scan a Packing box",
      label: "Dock Packing Box",
      step: 1,
    },
    {
      active: true,
      description: "Scan Entities fron tote and place in Bin",
      label: "Scan Entity and confirm",
      step: 2,
    },
  ];

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
    <ScanEntityPick
      header={header}
      legends={legends}
      seatMode={seatMode}
      productDetails={prdtdetails}
      prdtinfo={prdtinfo}
    />
  );
}

export default ScanEntityPickContainer;
