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
  headerMsg,
  legends,
  seatMode,
  prdtinfo,
  productDetails,
  qty,
  totalEntities,
  allowedKqDirection,
  onChangeQuantityHandler,
  previousDetails,
  currentDetails,
  subHeader,
  onExceptionClickHandler,
  onMarkFullHandler,
  onCancelScanHandler,
  onToteFullHandler,
  ...props
}) {


  return (
    <>
      <StepperHeader stepperObj={headerMsg} subHeaderText={subHeader} />
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
            <Box>
              <Button
                size="large"
                label="Cancel Scan"
                variant="outlined"
                onClickHandler={onCancelScanHandler}
                sx={{ mr: 2 }}
              />
              <Button
                size="large"
                label="Tote Full"
                type="neutral"
                onClickHandler={onToteFullHandler}
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
                onClickHandler={onExceptionClickHandler}
              />
              <Button
                size="medium"
                label="Mark Full"
                onClickHandler={onMarkFullHandler}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default PlaceEntityPick;
