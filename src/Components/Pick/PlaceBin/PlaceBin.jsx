import {
    BinDetails,
    Button,
    Card,
    StepperHeader,
    Legend,
    CurrentlyActiveConveyer
  } from "operational-component-lib";
  import { Box, Grid } from "@mui/material";
  import React from "react";
  
  import Arrow from "./../../../assets/images/arrow.svg";
  import ToteImg from "./../../../assets/images/tote.svg";
  
  function PlaceBin({ header }) {

    const cancelscanhandler = ()=>{

        alert ("cancel scan request sent")
    }
    let legends = [
      {
        color: "blue",
        text: "Inventory Totes",
      },
      {
        color: "#7BAABA",
        text: "Order Totes",
      },
    ];
    return (
      <>
        <StepperHeader stepperObj={header} />
        <Grid container alignItems="stretch">
          <Grid
            item
            xs={12}
            xl={3}
            md={3}
            sm={12}
            p={3}
            pb={0}
            className="grid-seperator"
          >
            <CurrentlyActiveConveyer
              title="Scan Active"
              details={{
                "IC Slot": "IC Slot",
                "IC Bin": "IC Bin",
              }}
            />
            <BinDetails
              details={{
                "BIN ID": "BIN ID",
                "SKU ID": "SKU ID",
                "SKU Qty": "SKU Qty",
                "TOTE ID": "TOTE ID",
              }}
              title={`Previous ${"seatMode"}`}
              height="17.2em"
            />
          </Grid>
  
          <Grid
            item
            xs={12}
            xl={9}
            md={9}
            sm={12}
            p={3}
            pb={0}
            className="grid-seperator"
          >
            <Card
              p={0}
              m={0}
              title="Place Tote on bin"
              height={"40.5em"}
              bodySeperator={false}
            >
              <Box height={"36em"}></Box>
              <Legend legendData={legends} />
              <div className="seprator"></div>
              <Box sx={{ m: 0, p:0 }}>
                <Button size="large"  variant="outlined" label="Cancel Scan" onClickHandler={cancelscanhandler}  />
            </Box>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  }
  
  export default PlaceBin;
  