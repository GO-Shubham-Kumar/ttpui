import React from "react";
import {
  Card,
  BinMapDetails,
  BinDetails,
  Button,
  StepperHeader,
  KQ,
  CarouselComp
} from "operational-component-lib";
import { Grid, Box,Typography } from "@mui/material";
import ToteImg from "./../../../assets/images/tote_2.svg";
import Arrow from "./../../../assets/images/arrow_2.svg";

const PlaceEntity = ({ headerMsg, 
    previousDetails, 
    currentDetails, 
    palletId, 
    toteId ,
    qty, 
    totalEntities, 
    prdtinfo, 
    actualQty, 
    seatMode,
    handleCancelScan,
    productDetails,
    productImages,
    exceptionhandler,
    onChangeQuantityHandler,
    allowedKqDirection
  }) => {
  return (
    <>
      <StepperHeader stepperObj={headerMsg} />

      <Grid container alignItems="stretch">
        <Grid item xs={12} xl={3} md={3} sm={12} p={3} pb={0} className="grid-seperator">
          <BinMapDetails
            toteId={toteId}
            title="Scan Active"
            palletId={palletId}
            details={currentDetails}
          />
          <BinDetails 
            details={previousDetails} 
            title={`Previous ${seatMode}`}
            height="17.2em" />
        </Grid>
        <Grid item xs={12} xl={6} md={6} sm={12} p={3} pb={0}>
          <Card title="Tote" p={0} mt={0} height={'42em'}>
            <Box  className="totequantity" sx={{ p: 5, pt:10, pb:0, textAlign: "center" }}>
              <Typography variant="h1">{actualQty}</Typography>
              <img alt="pallet" src={Arrow} />
            </Box>
            <Box sx={{ m:10, mt:0,mb:'18.5em',textAlign: "center" }}>
              <img alt="tote image" src={ToteImg} style={{  marginTop:0 }} />
            </Box>
            <div className="seprator"></div>
            <Box sx={{ m: 0 }}>
              <Button size="large" variant="outlined" label="Cancel Scan" onClickHandler={handleCancelScan} />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} xl={3} md={3} sm={12} p={3} pb={0} className="grid-seperator" >
          <Card  p={0} m={0} title="Item Details"  height={'42em'} bodySeperator={false} >
            <Box sx={{mb:'2.8em', minHeight : '18em'}}>
              <CarouselComp prdtImages={productImages} productDetails={productDetails} />
            </Box>
            <div className="seprator"></div>
            <Box sx={{ mb:'4.4em' }} className="kq">
              <p>Key in quantity</p>
              <KQ 
                quantity={qty} 
                label={"Scan Entity"} 
                totalQuantities={totalEntities}  
                onQuantityChangeHandler={onChangeQuantityHandler}
                operationalMode={allowedKqDirection}
              />
            </Box>
            <div className="seprator"></div>
            <Box sx={{ m: 0, p:0 }}>
              <Button size="large" type="neutral"  label="Exception" onClickHandler={exceptionhandler}  />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}


export default PlaceEntity;