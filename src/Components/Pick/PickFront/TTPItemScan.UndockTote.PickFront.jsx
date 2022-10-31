import {
  BinDetails,
  Button,
  Card,
  CarouselComp,
  Conveyor,
  CurrentlyActiveConveyer,
  Legend,
  StepperHeader,
} from 'operational-component-lib'
import { Box, Grid } from '@mui/material'
import { CONVEYOR_TYPE_INVENTORY_TOTE, CONVEYOR_TYPE_ORDER_TOTE } from '../../../utils/constants'

import React from 'react'

const TTPItemScanUndockTotePickFront = ({
  headerMsg,
  previousDetails,
  currentDetails,
  subHeader,
  seatMode,
  legends,
  productInfo,
  productDetails,
  conveyorToteData,
  conveyorBinData,
  conveyorIdle,
  conveyorDisabled,
  title,
  onExceptionHandler,
  ...props
}) => {
  return (
    <>
      <StepperHeader stepperObj={headerMsg} />
      <Grid container alignItems="stretch">
        <Grid item xs={12} xl={3} md={3} sm={12} p={3} pb={0} className="grid-seperator">
          <CurrentlyActiveConveyer title="Scan Active" details={currentDetails} />
          <BinDetails details={previousDetails} title={`Previous ${seatMode}`} height="17.2em" />
        </Grid>

        <Grid item xs={12} xl={6} md={6} sm={12} p={3} pr={0} pb={0}>
          <Card p={0} m={0} title={title} height={'42.5em'} bodySeperator={false}>
            <Box height={'36em'}>
              <Conveyor
                splitScreen={true}
                conveyorType={CONVEYOR_TYPE_INVENTORY_TOTE}
                conveyorDisabled={conveyorDisabled}
                conveyorIdle={conveyorIdle}
                conveyorData={conveyorToteData}
              />
              <Conveyor
                splitScreen={true}
                conveyorType={CONVEYOR_TYPE_ORDER_TOTE}
                conveyorDisabled={false}
                converyorIdle={true}
                conveyorData={conveyorBinData}
              />
            </Box>
            <Legend legendData={legends} />
            <div className="seprator"></div>
          </Card>
        </Grid>

        <Grid item xs={12} xl={3} md={3} sm={12} p={3} pb={0} className="grid-seperator">
          <Card p={0} m={0} title="Entity Details" height={'42.5em'} bodySeperator={false}>
            <Box height={'37em'} sx={{ p: 0 }}>
              <CarouselComp prdtinfo={productInfo} productDetails={productDetails} />
            </Box>
            <div className="seprator"></div>
            <Box sx={{ m: 0, p: 0 }}>
              <Button size="large" type="neutral" label="Exception" onClickHandler={onExceptionHandler} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default TTPItemScanUndockTotePickFront
