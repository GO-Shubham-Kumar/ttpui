import PlaceEntityPick from "../../../Components/Pick/PlaceEntity/PlaceEntity";
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
  const [subHeader, setsubHeader] = useState("");

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

  const onChangeQuantityHandler = () => {};

  const onExceptionClickHandler = () => {
    alert("Exception Screen");
  };

  const onMarkFullHandler= () => {
    alert("marked full");
  };

  const onCancelScanHandler = () => {
    alert("Scan cancel request sent");
  };

  const onToteFullHandler = () => {
    alert("tote marked full");
  };


  return (
    <PlaceEntityPick
      legends={legends}
      productDetails={prdtdetails}
      prdtinfo={prdtinfo}
      qty={quantity}
      totalEntities={totalQty}
      allowedKqDirection={kqDirection}
      onChangeQuantityHandler={onChangeQuantityHandler}
      onExceptionClickHandler={onExceptionClickHandler}
      onMarkFullHandler={onMarkFullHandler}
      onCancelScanHandler={onCancelScanHandler}
      onToteFullHandler={onToteFullHandler}
      {...props}
    />
  );
}

export default PlaceEntityPickContainer;
