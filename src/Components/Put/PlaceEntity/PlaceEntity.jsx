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

function PlaceEntity({ headerMsg, 
  previousDetails, currentDetails, palletId, toteId ,qty, totalEntities, prdtinfo, actualqty, seatMode}) {
    
    const  cancelScan = () =>{
        alert("scan cancel request sent")
    }

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
          />
          <BinDetails details={previousDetails} title={`Previous ${seatMode}`} />
        </Grid>
        <Grid item xs={12} md={6} p={3} pb={0}>
          <Card title="Tote" p={0} mt={0} height={'43em'}>
            <Box  className="totequantity" sx={{ p: 5, pt:10, pb:0, textAlign: "center" }}>
              <Typography variant="h1">{actualqty}</Typography>
              <img alt="pallet" src={Arrow} />
            </Box>
            <Box sx={{ m:10, mt:0,mb:26,textAlign: "center" }}>
              <img alt="pallet" src={ToteImg} style={{ margin: "10%", marginTop:0 }} />
            </Box>
            <div className="seprator"></div>
            <Box sx={{ m: 0 }}>
              <Button size="large" variant="outlined" label="Cancel Scan" onClickHandler={cancelScan} />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator" >
          <Card  p={0} m={0} title="Item Details" height={'43em'} bodySeperator={false} >
            <CarouselComp prdtinfo={prdtinfo} />
            <div className="seprator"></div>
            <KQ qty={qty} totalEntities={totalEntities}  />
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
