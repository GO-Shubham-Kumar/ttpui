import {
  APP_SOURCE,
  EVENT_ACTION_CONFIRM_IRT_BIN,
  EVENT_TYPE_BACK,
  EVENT_TYPE_CANCEL_EXCEPTION,
  EVENT_TYPE_CANCEL_SCAN,
  EVENT_TYPE_DAMAGED,
  EVENT_TYPE_EXCEPTION_PRESS,
  EVENT_TYPE_EXCEPTION_RESPONSE_FROM_GUI,
  EVENT_TYPE_PUT_FRONT_EXCEPTION,
  EVENT_TYPE_QUANTITY_UPDATE_FROM_GUI,
  EVENT_TYPE_RESET,
  EVENT_TYPE_UDP_DAMAGE_EXCEPTION,
  EXCEPTION_TYPE,
} from "../../../utils/constants";
import {
  PUT_FRONT_ITEMS_TO_IRT_BIN,
  UD_PUT_FRONT_DAMAGED_EXCEPTION,
} from "../../../utils/screenIds";
import {
  fetchDetailsFromData,
  getDamagedItemsData,
  getPreviousDetailsData,
} from "../../../utils/helpers/commonHelpers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import PlaceEntity from "./../../../Components/Put/PlaceEntity/PlaceEntity";
import { triggerEventAction } from "../../../redux/actions/eventActions";

const PlaceEntityContainer = ({ screenId, ...props }) => {
  const dispatch = useDispatch();
  const [skuQty, setSkuQty] = useState("");
  const [productDetails, setProductDetails] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [currentQty, setCurrentQty] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [isKqAllowed, setIsKqAllowed] = useState(false);
  const [kqDirection, setKqDirection] = useState(false);
  const [isException, setIsException] = useState(false);
  const {
    data: mainData,
    success,
    error,
  } = useSelector((state) => state.mainStateReducer);

  const [exceptionEnabled, setExceptionEnabled] = useState(false);
  const exceptions = [{ key: "Damaged", value: "damaged" }];
  const [exceptionSelected, setExceptionSelected] = useState("");
  const [exceptionQty, setExceptionQty] = useState(0);
  const [damagedItems, setDamagedItems] = useState([]);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isIRTScanEnabled, setIsIRTScanEnabled] = useState(false);
  const exceptionFinalText =
    "Put exception entity in exception area and press confirm";
  const irtEnabledText =
    "Put exception entity in exception area and scan IRT bin to confirm";
  const TABLE_COLS = [
    {
      id: "type",
      label: "TYPE",
    },
    {
      id: "sku",
      label: "SKU",
    },
    {
      id: "serial",
      label: "Serial",
    },
    {
      id: "qty",
      label: "QTY",
    },
  ];
  useEffect(() => {
    if (mainData.state_data) {
      let productInfo = {};
      let productimage = [];
      const { state_data } = mainData;
      const {
        product_info,
        scan_details,
        rack_details,
        is_only_exception_button_pressed,
        exception_type,
        damaged_items,
        irt_scan_enabled
      } = state_data;
      let damagedItemsData = [];
      let is_exception = is_only_exception_button_pressed || false;
      if (damaged_items && damaged_items.length > 0) {
        damagedItemsData = getDamagedItemsData(damaged_items);
      }
      if (
        rack_details &&
        rack_details.rack_type_rec &&
        rack_details.rack_type_rec[0]
        ) {
          setSkuQty(rack_details.rack_type_rec[0]["put_qty"]);
        }
        
        if (
          is_exception ||
          screenId === UD_PUT_FRONT_DAMAGED_EXCEPTION ||
          screenId === PUT_FRONT_ITEMS_TO_IRT_BIN
          ){
            if(screenId === PUT_FRONT_ITEMS_TO_IRT_BIN) setNextClicked(true)
            else setNextClicked(false)
            is_exception = true;
          }
    
      if (exception_type) {
        const exceptionType = EXCEPTION_TYPE[exception_type];
        setExceptionSelected(exceptionType);
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
          const { kq_allowed, current_qty, total_qty, kq_direction } =
            scan_details;
          setIsKqAllowed(kq_allowed);
          setQuantity(parseInt(current_qty));
          setTotalQty(total_qty);
          setKqDirection(kq_direction);
        }
      }
      setDamagedItems(damagedItemsData);
      setIsException(is_exception);
      if(irt_scan_enabled) setIsIRTScanEnabled(irt_scan_enabled)
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

  const exceptionHandler = () => {
    setExceptionEnabled(true);
    const eventData = {
      event_name: EVENT_TYPE_EXCEPTION_PRESS,
    };
    dispatch(triggerEventAction(eventData));
  };

  const exceptionChangeHandler = (event) => {
    setExceptionSelected(event.target.value);
    const eventData = {
      event_name: "exception",
      event_data: {
        event: EVENT_TYPE_DAMAGED, // only for damaged exception
      },
      source: "ui",
    };
    dispatch(triggerEventAction(eventData));
  };

  const onResetHandler = (value) => {
    const eventData = {
      event_name: EVENT_TYPE_RESET,
      event_data: {},
    };
    dispatch(triggerEventAction(eventData));
  };

  const cancelExceptionHandler = () => {
    setExceptionEnabled(false);
    setExceptionQty(0);
    const eventData = {
      event_name: EVENT_TYPE_CANCEL_EXCEPTION,
      event_data: {},
    };
    dispatch(triggerEventAction(eventData));
  };

  const nextClickHandler = () => {
    const {
      state_data: { exception_type },
    } = mainData;
    const eventData = {
      event_name: EVENT_TYPE_UDP_DAMAGE_EXCEPTION,
      event_data: {
        action: "confirm_button_press",
        event: exception_type || EVENT_TYPE_DAMAGED,
      },
    };
    dispatch(triggerEventAction(eventData));
  };

  const backBtnHandler = () => {
    const {
      state_data: { exception_type },
    } = mainData;
    const eventData = {
      event_name: EVENT_TYPE_BACK,
      event_data: {},
    };
    dispatch(triggerEventAction(eventData));
  };

  const confirmClickHandler = () => {
    const {
      state_data: { exception_type },
    } = mainData;
    const eventData = {
      event_name: EVENT_TYPE_PUT_FRONT_EXCEPTION,
      event_data: {
        action: EVENT_ACTION_CONFIRM_IRT_BIN,
        event: exception_type || EVENT_TYPE_DAMAGED,
      },
    };
    dispatch(triggerEventAction(eventData));
  };

  const onChangeQuantityHandler = (qty) => {
    setQuantity(qty);
    const {
      state_data: { item_uid },
    } = mainData;
    const eventData = {
      event_name: EVENT_TYPE_QUANTITY_UPDATE_FROM_GUI,
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
      isException={isException}
      isKqAllowed={isKqAllowed}
      qty={quantity}
      totalEntities={totalQty}
      handleCancelScan={handleCancelScan}
      actualQty={skuQty}
      productDetails={productDetails}
      productImages={productImages}
      exceptionEnabled={exceptionEnabled}
      exceptionHandler={exceptionHandler}
      exceptions={exceptions}
      exceptionSelected={exceptionSelected}
      exceptionChangeHandler={exceptionChangeHandler}
      exceptionFinalText={exceptionFinalText}
      exceptionQty={exceptionQty}
      resetHandler={onResetHandler}
      cancelExceptionHandler={cancelExceptionHandler}
      isNextClicked={isNextClicked}
      nextClickHandler={nextClickHandler}
      backBtnHandler={backBtnHandler}
      confirmClickHandler={confirmClickHandler}
      onChangeQuantityHandler={onChangeQuantityHandler}
      allowedKqDirection={kqDirection}
      TABLE_COLS={TABLE_COLS}
      screenId={screenId}
      damagedItems={damagedItems}
      isIRTScanEnabled={isIRTScanEnabled}
      irtEnabledText={irtEnabledText}
      {...props}
    />
  );
};

export default PlaceEntityContainer;
