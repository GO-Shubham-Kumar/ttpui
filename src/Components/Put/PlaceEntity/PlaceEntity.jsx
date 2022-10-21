import {
  BinDetails,
  BinMapDetails,
  Button,
  Card,
  CarouselComp,
  ExceptionDetails,
  Header,
  KQ,
  StepperHeader,
  Table,
  Typography
} from "operational-component-lib";
import { Box, Grid } from "@mui/material";
import { PUT_FRONT_ITEMS_TO_IRT_BIN, UD_PUT_FRONT_DAMAGED_EXCEPTION } from "../../../utils/screenIds";
import React, { useEffect } from "react";

import Arrow from "./../../../assets/images/arrow_2.svg";
import ArrowSmall from "./../../../assets/images/arrow_small.png";
import IRTbin from "./../../../assets/images/irt_bin.png";
import ToteImg from "./../../../assets/images/tote_2.svg";

const PlaceEntity = ({ headerMsg, 
    previousDetails, 
    currentDetails, 
    palletId, 
    toteId ,
    isKqAllowed,
    qty, 
    totalEntities, 
    actualQty, 
    seatMode,
    handleCancelScan,
    productDetails,
    productImages,
    isException,
    exceptionHandler,
    exceptions,
    exceptionSelected,
    exceptionChangeHandler,
    exceptionFinalText,
    resetHandler,
    cancelExceptionHandler,
    isNextClicked,
	  nextClickHandler,
    backBtnHandler, 
    confirmClickHandler,
    onChangeQuantityHandler,
    allowedKqDirection,
    screenId,
    TABLE_COLS,
    damagedItems
  }) => {
    const disabledClass = isException && 'disabled-container';
  return (
    <>
      {isException  ? (
       (typeof headerMsg ==='string') && <Header headerText ={headerMsg}/>) : 
      (
        (typeof headerMsg ==='object') &&  <StepperHeader stepperObj={headerMsg} />
      ) }

      <Grid container alignItems="stretch">
        <Grid item xs={12} xl={2.5} md={2.5} sm={12} p={3} pb={0} className={`${disabledClass} grid-seperator`}>
          <BinMapDetails
            toteId={toteId}
            title="Currently Active"
            palletId={palletId}
            details={currentDetails}
          />
          <BinDetails 
            details={previousDetails} 
            title={`Previous ${seatMode}`}
            height="17.2em" />
        </Grid>
        <Grid item xs={12} xl={isException ? 4.75 : 6.5} md={isException ? 4.75 : 6.5}
          sm={12} pl={3} pr={0.5} pt={3} pb={0} className={disabledClass}>
          <Card title="Tote" p={0} mt={0} height={'42.5em'}>
            <Box className="tote-quantity" sx={{ p: 5, pt:10, pb:0, textAlign: "center" }}>
              <Typography variant="h1">{actualQty}</Typography>
              <img alt="pallet" src={Arrow} />
            </Box>
            <Box sx={{ m:10, mt:0,mb:'18.5em',textAlign: "center" }}>
              <img alt="tote image" src={ToteImg} style={{  marginTop:0 }} />
            </Box>
            <div className="separator"></div>
            <Box sx={{ m: 0 }}>
              <Button size="large" variant="outlined" label="Cancel Scan" onClickHandler={handleCancelScan} />
            </Box>
          </Card>
        </Grid>

        {!isException ?
        (
          <Grid item xs={12} xl={3} md={3} sm={12} p={3} pb={0}>
            <Card  p={0} m={0} title="Item Details"  height={'42.5em'} bodySeperator={false} >
              <Box sx={{mb:'3em', minHeight : '10em'}}>
                <CarouselComp prdtImages={productImages} productDetails={productDetails} />
              </Box>
              <div className="separator"></div>
              <Box sx={{ mb:'5em' }} className="kq">
                <p>Key in quantity</p>
                <KQ 
                  isChangeAllowed={isKqAllowed}
                  quantity={qty} 
                  label={"Scan Entity"} 
                  totalQuantities={totalEntities}  
                  onQuantityChangeHandler={onChangeQuantityHandler}
                  operationalMode={allowedKqDirection}
                />
              </Box>
              <div className="separator"></div>
              <Box sx={{ m: 0, p:0 }}>
                <Button size="large" type="neutral" label="Exception" onClickHandler={exceptionHandler}  />
              </Box>
            </Card>
          </Grid>
        ) : (
          <Grid item xs={12} xl={isException ? 4.75 : 3} md={isException ? 4.75 : 3} sm={12} p={3} pl={2} pb={0}>
            <ExceptionDetails title='Exception Details' 
              exceptions={exceptions}
              exceptionSelected={exceptionSelected}
              exceptionChangeHandler={exceptionChangeHandler}
              exceptionQty={damagedItems.length} 
              isNextClicked={isNextClicked}
              resetHandler={resetHandler}
              cancelExceptionHandler={cancelExceptionHandler} 
              nextClickHandler={nextClickHandler}
              backBtnHandler={backBtnHandler} 
              confirmClickHandler={confirmClickHandler}
              height={'37.4em'}
            >
              {screenId === UD_PUT_FRONT_DAMAGED_EXCEPTION && (
                <>
                  <Typography textAlign='left' ml={0}>Scan Damaged entities</Typography>
                  <Table 
                    small 
                    columns={TABLE_COLS} 
                    rows={damagedItems}
                    noDataText={'No damaged entity scanned yet'}
                    />
                </>
              )}
              {screenId === PUT_FRONT_ITEMS_TO_IRT_BIN && (
                <Box className="center-align" width='14em'>
                  <Typography mb={6}>{exceptionFinalText}</Typography>
                  <div width='1em'>
                    <img src={ArrowSmall} alt="arrow" />
                  </div>
                  <img src={IRTbin} alt="IRT bin" />
                </Box>
              )}
            </ExceptionDetails>
          </Grid>
        )
        }
      </Grid>
    </>
  );
}


export default PlaceEntity;