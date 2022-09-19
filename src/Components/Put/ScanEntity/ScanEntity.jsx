import React from "react";
import {
  Header,
  Card,
  BinMapDetails,
  BinDetails,
  Button,
  StepperHeader,
  NotificationBar,
} from "operational-component-lib";
import { Grid, Box } from "@mui/material";
import PalletImg from "./../../../assets/images/pallet.svg";
import Arrow from "./../../../assets/images/arrow.svg";

function ScanTote({ header, details, palletId, toteId }) {

  const  cancelScan = () =>{
    alert("scan cancel request sent")
}

  return (
    <>
      <StepperHeader stepperObj={header} />
      <Grid container alignItems="stretch">
        <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator">
          <BinMapDetails
            toteId={toteId}
            title="Scan Active"
            palletId={palletId}
            title="Scan Active"
          />
          <BinDetails details={details} title="Previous Pick" />
        </Grid>
        <Grid item xs={12} md={9} p={3} pb={0}>
          <Card
            title="Pallet > Scan Entity"
            p={0}
            pt={0}
            mt={0}
            bodySeperator={false}
          >
            <Box sx={{ p: 2, pt: 0, pb: 0, textAlign: "center" }}>
              <img alt="pallet" src={Arrow} />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <img alt="pallet" src={PalletImg} />
            </Box>
            <div className="seprator"></div>
            <Box sx={{ m: 2 }}>
              <Button size="large" variant="outlined" label="Cancel Scan" onClickHandler={cancelScan}  />
            </Box>
          </Card>
        </Grid>
        <NotificationBar
          autoHideDuration={6000}
          msg="Entity scan successful"
          severity="success"
          open={false}
        />
      </Grid>
    </>
  );
}

export default ScanTote;
