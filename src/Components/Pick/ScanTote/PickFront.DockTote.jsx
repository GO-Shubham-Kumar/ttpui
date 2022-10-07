import {
  BinDetails,
  BinMapDetails,
  Button,
  Card,
  Conveyor,
  Legend,
  StepperHeader
} from "operational-component-lib";
import { Box, Grid } from "@mui/material";
import { CONVEYOR_TYPE_INVENTORY_TOTE, CONVEYOR_TYPE_ORDER_TOTE } from "../../../utils/constants";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function PickFrontDockTote({
  headerMsg,
  previousDetails,
  currentDetails,
  subHeader,
  seatMode,
  legends,
  cancelButtonEnable,
  cancelScanHandler,
  conveyorToteData,
  conveyorBinData,
  conveyorIdle,
  conveyorDisabled,
  ...props
}) {

 console.log('conveyorIdle', conveyorIdle)

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
          <BinMapDetails title="Scan Active" details={currentDetails} />
          <BinDetails
            details={currentDetails}
            title={`Previous ${seatMode}`}
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
            title="Scan Tote"
            height={"42.5em"}
            bodySeperator={false}
          >
            <Box height={"36em"}>
              <Conveyor conveyorType={CONVEYOR_TYPE_INVENTORY_TOTE} conveyorDisabled={conveyorDisabled} conveyorIdle={conveyorIdle} conveyorData={conveyorToteData}/>
              <Conveyor conveyorType={CONVEYOR_TYPE_ORDER_TOTE} conveyorDisabled={false} conveyorIdle={true} conveyorData={conveyorBinData}/>
            </Box>
            <Legend legendData={legends} />
            <div className="seprator"></div>
            {cancelButtonEnable ? (
              <Box sx={{ m: 0, p: 0 }}>
                <Button
                  size="large"
                  variant="outlined"
                  label="Cancel Scan"
                  onClickHandler={cancelScanHandler}
                />
              </Box>
            ) : null}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default PickFrontDockTote;
