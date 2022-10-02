import PlaceBin from "../../../Components/Pick/PlaceBin/PlaceBin";
import { Modal, Typography, Table } from "operational-component-lib";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PlaceBinContainer({ ...props }) {
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
    alert("ss");
    setShowModal(true);
  };

  return <PlaceBin header={header} />;
}

export default PlaceBinContainer;
