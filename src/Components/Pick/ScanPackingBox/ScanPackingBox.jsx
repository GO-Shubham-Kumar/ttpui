import {
  BinDetails,
  CurrentlyActiveConveyer,
  Button,
  Card,
  StepperHeader,
  Legend,
} from "operational-component-lib";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import PackingBox from "./../../../assets/images/packingbox.svg";
import ToteImg from "./../../../assets/images/tote.svg";
import { display } from "@mui/system";

function ScanPackingBox({ header, boxtype,legends,seatMode }) {
  const cancelscanhandler = () => {
    alert("cancel scan request sent");
  };
  
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
            title={`Previous ${seatMode}`}
            height="17.2em"
          />
        </Grid>

        <Grid item xs={12} xl={6} md={6} sm={12} p={3} pb={0}>
          <Card
            p={0}
            m={0}
            title="Tote"
            height={"42.5em"}
            bodySeperator={false}
          >
            <Box height={"36em"}></Box>
            <Legend legendData={legends} />
            <div className="seprator"></div>
          </Card>
        </Grid>

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
          <Card
            p={0}
            m={0}
            title="Place Tote on bin"
            height={"42.5em"}
            bodySeperator={false}
          >
            <Box sx={{ p: 2, pt: 0, pb: 0, textAlign: "center" }}>
              <img alt="pallet" src={PackingBox} />
            </Box>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Box Type </Typography>
              <Typography>{boxtype}</Typography>
            </Box>
            <div sx={{ p: 2 }} className="seprator"></div>

            <Box sx={{ p: 2, pt: 0, pb: 0, textAlign: "center" }}>
              <Typography variant="h1">{boxtype}</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ScanPackingBox;
