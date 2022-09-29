import {
  BinDetails,
  BinMapDetails,
  Button,
  Card,
  StepperHeader,
  Legend,
  CarouselComp,
  KQ,
} from "operational-component-lib";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function PlaceEntityPick({
  header,
  legends,
  seatMode,
  prdtinfo,
  productDetails,
  qty,
  totalEntities,
  allowedKqDirection,
  onChangeQuantityHandler,
}) {
  const exceptionhandler = () => {
    alert("Exception Screen");
  };

  const markfullhandlerhandler = () => {
    alert("marked full");
  };

  const cancelscanhandler = () => {
    alert("Scan cancel request sent");
  };

  const totefullhandler = () => {
    alert("tote marked full");
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
          <BinMapDetails
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
            <Box>
              <Button
                size="large"
                label="Cancel Scan"
                variant="outlined"
                onClickHandler={cancelscanhandler}
                sx={{ mr: 2 }}
              />
              <Button
                size="large"
                label="Tote Full"
                type="neutral"
                onClickHandler={totefullhandler}
              />
            </Box>
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
            <Box height={"22em"}>
              <CarouselComp
                prdtinfo={prdtinfo}
                productDetails={productDetails}
              />
            </Box>
            <div className="seprator"></div>
            <Box sx={{ mb: "5em" }} className="kq">
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
            <Box
              sx={{
                m: 0,
                p: 0,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                size="medium"
                type="neutral"
                label="Exception"
                onClickHandler={exceptionhandler}
              />
              <Button
                size="medium"
                label="Mark Full"
                onClickHandler={markfullhandlerhandler}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default PlaceEntityPick;
