import { APP_SOURCE, EVENT_TYPE_CANCEL_SCAN } from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import PlaceEntity from "./../../../Components/Put/PlaceEntity/PlaceEntity";
import { fetchDetailsFromData } from "../../../utils/helpers/commonHelpers";
import { triggerEventAction } from "../../../redux/actions/eventActions";

const PlaceEntityContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const [skuQty, setSkuQty] = useState("");
  const [productDetails, setProductDetails] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [currentQty, setCurrentQty] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [isKqAllowed, setIsKqAllowed] = useState(false);
  const [kqDirection, setKqDirection] = useState(false);
  const { data: mainData, success, error } = useSelector((state) => state.mainStateReducer);

  useEffect(() => {
    if (mainData.state_data) {
      let productInfo = {};
      let productimage = [];
      const { state_data } = mainData;
      const { product_info, scan_details, rack_details } = state_data;
      if (rack_details && rack_details.rack_type_rec && rack_details.rack_type_rec[0]) {
        setSkuQty(rack_details.rack_type_rec[0]["put_qty"]);
      }

      productInfo = fetchDetailsFromData(product_info || []);
      if (productInfo["product_local_image_url"]) {
        if (Array.isArray(productInfo["product_local_image_url"]))
          productimage = productInfo["product_local_image_url"];
        else productimage.push(productInfo["product_local_image_url"]);
        setProductImages(productimage);
      }
      if (productInfo.hasOwnProperty("product_local_image_url")) {
        delete productInfo.product_local_image_url;
      }
      setProductDetails(productInfo);

      if (scan_details && Object.keys(scan_details).length > 0) {
        if (scan_details.hasOwnProperty("total_qty")) {
          const { kq_allowed, current_qty, total_qty, kq_direction } = scan_details;
          setIsKqAllowed(kq_allowed);
          setQuantity(parseInt(current_qty));
          setTotalQty(total_qty);
          setKqDirection(kq_direction);
        }
      }
    }
  }, [mainData]);
  const handleCancelScan = () => {
    const {
      state_data: { item_uid },
    } = mainData;
    const eventData = {
      event_name: EVENT_TYPE_CANCEL_SCAN,
      event_data: {
        barcode: item_uid,
      },
      source: APP_SOURCE,
    };
    dispatch(triggerEventAction(eventData));
  };

  const exceptionHandler = () => {};


  const onChangeQuantityHandler = (qty) => {
    setQuantity(qty);
    const {
      state_data: { item_uid },
    } = mainData;
    const eventData = {
      event_name: "quantity_update_from_gui",
      event_data: {
        item_uid: item_uid,
        quantity_updated: qty,
      },
      source: APP_SOURCE,
    };
    dispatch(triggerEventAction(eventData));
  };

  return (
    <PlaceEntity
      qty={quantity}
      totalEntities={totalQty}
      handleCancelScan={handleCancelScan}
      actualQty={skuQty}
      productDetails={productDetails}
      productImages={productImages}
      exceptionHandler={exceptionHandler}
      onChangeQuantityHandler={onChangeQuantityHandler}
      allowedKqDirection={kqDirection}
      {...props}
    />
  );
};

export default PlaceEntityContainer;
