import PlaceEntityPick from "../../Components/Pick/PlaceEntity/PlaceEntity";
import ScanTote from "../../Components/Pick/ScanTote/ScanTote";
import { Modal, Typography, Table } from "operational-component-lib";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PlaceEntityPickContainer({ ...props }) {
  const [showModal, setShowModal] = useState(false);
  const { data } = useSelector((state) => state.mainStateReducer);
  const dispatch = useDispatch();
  const [totalQty, setTotalQty] = useState(0);
  const [isKqAllowed, setIsKqAllowed] = useState(false);
  const [kqDirection, setKqDirection] = useState(false);
  const [quantity, setQuantity] = useState(0);

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

  let seatMode = "Pick";

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

  const onChangeQuantityHandler = () => {};

  return (
    <PlaceEntityPick
      header={header}
      legends={legends}
      seatMode={seatMode}
      productDetails={prdtdetails}
      prdtinfo={prdtinfo}
      qty={quantity}
      totalEntities={totalQty}
      allowedKqDirection={kqDirection}
      onChangeQuantityHandler={onChangeQuantityHandler}
    />
  );
}

export default PlaceEntityPickContainer;
