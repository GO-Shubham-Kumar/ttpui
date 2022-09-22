import {
  BinDetails,
  BinMapDetails,
  Button,
  Card,
  Header,
  StepperHeader,
} from "operational-component-lib";
import { Box, Grid } from "@mui/material";

import Arrow from "./../../../assets/images/arrow.svg";
import PalletImg from './../../../assets/images/pallet_image.svg';
import React from "react";

function ScanTote({ headerMsg, previousDetails, currentDetails, details, seatMode, handleCancelScan, ...props }) {


  return (
    <>
      <StepperHeader stepperObj={headerMsg} />
      <Grid container alignItems="stretch">
        <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator">
          <BinMapDetails
            details ={currentDetails}
            title="Scan Active"
          />
          <BinDetails details={previousDetails} title={`Previous ${seatMode}`} height="18.3em"/>
        </Grid>
        <Grid item xs={12} md={9} p={3} pb={0}>
          <Card
            title="Pallet   >  Scan Entity"
            p={0}
            pt={0}
            mt={0}
            bodySeperator={false}
            
          >
            <Box sx={{ p: 2, pt: 0, pb: 0, textAlign: "center" }}>
              <img alt="pallet" src={Arrow} />
            </Box>
            <Box sx={{ textAlign: "center", mb: '7.4em'  }}>
              <img alt="pallet" src={PalletImg} />
            </Box>
            <div className="seprator"></div>
            <Box sx={{ m:1, ml:0, mt:1, mb:1  }}>
              <Button size="large" variant="outlined" label="Cancel Scan" onClickHandler={handleCancelScan}  />
            </Box>
          </Card>
        </Grid>
        {/* <NotificationBar
          autoHideDuration={6000}
          msg="Entity scan successful"
          severity="success"
          open={false}
        /> */}
      </Grid>
    </>
  );
}

export default ScanTote;
