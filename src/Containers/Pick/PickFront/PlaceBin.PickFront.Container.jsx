import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PlaceBinPickFront from "../../../Components/Pick/PickFront/PlaceBin.PickFront";

/*
  Screen IDs.
  
*/

const PlaceBinPickFrontContainer = ({ ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const { data } = useSelector((state) => state.mainStateReducer);
  const dispatch = useDispatch();

  let header = [
    {
      active: true,
      description: "Place In Bin and confirm",
      label: "Dock Tote",
      step: 1,
    },
    {
      active: false,
      description: "Place Entity into the Tote and scan 11 more",
      label: "Scan Entity and confirm",
      step: 2,
    },
  ];

  const onConfirmHandler = () => {
    setShowModal(true);
  };

  return <PlaceBinPickFront header={header} />;
}

export default PlaceBinPickFrontContainer;
