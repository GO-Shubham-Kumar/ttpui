import React from "react";
import {
  Header,
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
    actualqty, 
    seatMode,
    handleCancelScan,
    productDetails,
    productImages
  }) => {

    const exceptionhandler = () => {
        alert("Showing exception")

    }


  return (
    <>
      <StepperHeader stepperObj={headerMsg} />

      <Grid container alignItems="stretch">
        <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator">
          <BinMapDetails
            toteId={toteId}
            title="Scan Active"
            palletId={palletId}
            details={currentDetails}
            height="18.3em"
          />
          <BinDetails 
            details={previousDetails} 
            title={`Previous ${seatMode}`}
            height="18.6em" />
        </Grid>
        <Grid item xs={12} md={6} p={3} pb={0}>
          <Card title="Tote" p={0} mt={0} height={'43.2em'}>
            <Box  className="totequantity" sx={{ p: 5, pt:10, pb:0, textAlign: "center" }}>
              <Typography variant="h1">{actualqty}</Typography>
              <img alt="pallet" src={Arrow} />
            </Box>
            <Box sx={{ m:10, mt:0,mb:'19em',textAlign: "center" }}>
              <img alt="tote image" src={ToteImg} style={{  marginTop:0 }} />
            </Box>
            <div className="seprator"></div>
            <Box sx={{ m: 0 }}>
              <Button size="large" variant="outlined" label="Cancel Scan" onClickHandler={handleCancelScan} />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator" >
          <Card  p={0} m={0} title="Item Details"  height={'43.2em'} bodySeperator={false} >
            <Box sx={{mb:'2.8em'}}>
              <CarouselComp prdtImages={productImages} productDetails={productDetails} prdtinfo={prdtinfo} />
            </Box>
            <div className="seprator"></div>
            <Box sx={{ mb:'5.7em' }} className="kq">
              <p>Key in quantity</p>
              <KQ qty={qty} label={"Scan Entity"} totalEntities={totalEntities}  />
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
