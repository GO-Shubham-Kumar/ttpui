import {
  BinDetails,
  BinMapDetails,
  Button,
  Card,
  StepperHeader,
  Legend,
  CarouselComp,
  CurrentlyActiveConveyer
} from "operational-component-lib";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function ScanEntityPick({
  headerMsg,
  previousDetails,
  currentDetails,
  subHeader,
  seatMode,
  legends,
  prdtinfo,
  productDetails,
  ...props
}) {
  const exceptionhandler = () => {
    alert("Exception Screen");
  };

  console.log(props)
  return (
    <>
      <StepperHeader stepperObj={headerMsg} />
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
            details={currentDetails}
          />
          <BinDetails
            details={previousDetails}
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
            title="Entity Details"
            height={"42.5em"}
            bodySeperator={false}
          >
            <Box height={"37em"}>
              <CarouselComp
                prdtinfo={prdtinfo}
                productDetails={productDetails}
              />
            </Box>
            <div className="seprator"></div>
            <Box sx={{ m: 0, p: 0 }}>
              <Button
                size="large"
                type="neutral"
                label="Exception"
                onClickHandler={exceptionhandler}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ScanEntityPick;
