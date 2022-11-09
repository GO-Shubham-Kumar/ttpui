import {
  BinDetails,
  Button,
  Card,
  CarouselComp,
  Conveyor,
  CurrentlyActiveConveyer,
  Header,
  KQ,
  Legend,
  StepperHeader,
} from 'operational-component-lib'
import { Box, Divider, Grid, Typography } from '@mui/material'
import { CONVEYOR_TYPE_INVENTORY_TOTE, CONVEYOR_TYPE_ORDER_TOTE } from '../../../utils/constants'
import React, { useState } from 'react'

const MoreItemScanPPTLPressPickFront = ({
  headerMsg,
  legends,
  seatMode,
  productImages,
  productDetails,
  qty,
  totalEntities,
  allowedKqDirection,
  isKqAllowed,
  onChangeQuantityHandler,
  previousDetails,
  currentDetails,
  subHeader,
  onExceptionClickHandler,
  onMarkFullHandler,
  onCancelScanHandler,
  onToteFullHandler,
  conveyorToteData,
  conveyorBinData,
  conveyorIdle,
  conveyorDisabled,
  title,
  isExceptionScreen,
  exceptionScreen,
  carrierType,
  showEntityDetails,
  isToteBtnEnabled
}) => {
  return (
    <>
      {isExceptionScreen ? (
        <Header headerText={'Select exception type(s) and enter quantity'} />
      ) : (
        <StepperHeader stepperObj={headerMsg} subHeaderText={subHeader} />
      )}
      <Grid container alignItems="stretch">
        <Grid
          item
          xs={12}
          xl={3}
          md={3}
          sm={12}
          p={3}
          className="grid-seperator"
          sx={isExceptionScreen ? { opacity: '50%' } : null}>
          <CurrentlyActiveConveyer title="Currently Active" details={currentDetails} />

          <BinDetails details={previousDetails} title={`Previous ${seatMode}`} height="17.2em" />
        </Grid>

        <Grid
          item
          xs={12}
          xl={isExceptionScreen ? 4 : showEntityDetails ? 6 : 9}
          md={isExceptionScreen ? 4 : showEntityDetails ? 6 : 9}
          sm={12}
          p={3}
          sx={isExceptionScreen ? { position: 'relative', opacity: '50%' } : { position: 'relative' }}>
          <Card
            p={0}
            m={0}
            title={title}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '44.5em' }}>
            <Box height={'36em'} sx={isExceptionScreen ? { zoom: '80%' } : null}>
              <Conveyor
                splitScreen={true}
                conveyorType={CONVEYOR_TYPE_INVENTORY_TOTE}
                conveyorDisabled={conveyorDisabled}
                conveyorIdle={conveyorIdle}
                conveyorData={conveyorToteData}
              />
              <Conveyor
                splitScreen={true}
                conveyorType={carrierType}
                conveyorDisabled={false}
                converyorIdle={true}
                conveyorData={conveyorBinData}
              />
            </Box>

            <Box sx={{ position: 'absolute', bottom: 20, width: '97%' }}>
              <Legend legendData={legends} style={{ marginLeft: '18px' }} />
              <Divider sx={{ borderWidth: '0.8px', mt: 2, mb: 2 }} light />
              <Button
                size="large"
                label="Cancel Scan"
                variant="outlined"
                onClickHandler={onCancelScanHandler}
                sx={{ ml: 2, mr: 2 }}
              />
              <Button disabled={!isToteBtnEnabled} size="large" label="Tote Full" type="neutral" onClickHandler={onToteFullHandler} />
            </Box>
          </Card>
        </Grid>
        {isExceptionScreen ? (
          <Grid item xs={12} xl={5} md={5} sm={12} p={3} className="grid-seperator">
            {exceptionScreen}
          </Grid>
        ) : (
          showEntityDetails && (
            <Grid item xs={12} xl={3} md={3} sm={12} p={3} className="grid-seperator">
              <Card p={0} m={0} title={'Entity Details'} height={'42.5em'} bodySeperator={false}>
                <Box height={'22em'}>
                  <CarouselComp prdtinfo={productImages} productDetails={productDetails} />
                </Box>
                <Divider sx={{ borderWidth: '0.8px', mt: 2, mb: 2 }} light />
                <Box sx={{ mb: '5em' }} className="kq">
                  <p>Key in quantity</p>
                  <KQ
                    isChangeAllowed={isKqAllowed}
                    quantity={qty}
                    label={'Scan Entity'}
                    totalQuantities={totalEntities}
                    onQuantityChangeHandler={onChangeQuantityHandler}
                    operationalMode={allowedKqDirection}
                  />
                </Box>
                <Divider sx={{ borderWidth: '0.8px', mt: 2, mb: 2 }} light />
                <Box
                  sx={{
                    m: 0,
                    p: 0,
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}>
                  <Button
                    size="medium"
                    type="neutral"
                    label="Exception"
                    onClickHandler={onExceptionClickHandler}
                  />
                  <Button size="medium" label="Mark Full" onClickHandler={onMarkFullHandler} />
                </Box>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </>
  )
}

export default MoreItemScanPPTLPressPickFront
