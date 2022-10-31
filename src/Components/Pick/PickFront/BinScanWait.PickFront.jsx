import {
  BinDetails,
  Button,
  Card,
  Conveyor,
  CurrentlyActiveConveyer,
  Legend,
  StepperHeader,
} from 'operational-component-lib'
import { Box, Divider, Grid, Typography } from '@mui/material'
import { CONVEYOR_TYPE_INVENTORY_TOTE, CONVEYOR_TYPE_PACKING_BOX } from '../../../utils/constants'

import PackingBox from '../../../assets/images/packing_box.svg'
import React from 'react'
import { isEmpty } from '../../../utils/helpers/commonHelpers'

const emptyPreviousPick = {
  'SKU ID': '--',
  'SKU Qty': '--',
  'Tote ID': '--',
  'Bin ID': '--',
}

const BinScanWaitScreen = ({
  headerMsg,
  boxType,
  legends,
  seatMode,
  conveyorToteData,
  conveyorBinData,
  conveyorIdle,
  conveyorDisabled,
  previousDetails,
  currentDetails,
  onCancelScanHandler,
  carrierType,
  title,
}) => {

  return (
    <>
      <StepperHeader stepperObj={headerMsg} />
      <Grid container alignItems="stretch">
        <Grid item xs={12} xl={3} md={3} sm={12} p={3} pb={0} className="grid-seperator">
          <CurrentlyActiveConveyer title="Currently Active" details={currentDetails} mode={seatMode} />
          <BinDetails
            details={isEmpty(previousDetails) ? emptyPreviousPick : {}}
            title={`Previous ${seatMode}`}
            height="17.2em"
            mode={seatMode}
          />
        </Grid>

        <Grid item xs={12} xl={6} md={6} sm={12} sx={{ p: 3, pb: 0, pr: 0 }}>
          <Card p={0} m={0} title={title} height={'42.5em'} bodySeperator={false}>
            <Box height={'35em'}>
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
                conveyorIdle={true}
                conveyorData={conveyorBinData}
              />
            </Box>
            <Legend legendData={legends} />
            <Divider sx={{ borderWidth: '0.8px', mt: 2, mb: 2 }} light />
            <Button
              size="large"
              label="Cancel Scan"
              variant="outlined"
              onClickHandler={onCancelScanHandler}
              sx={{ mr: 2 }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} xl={3} md={3} sm={12} p={3} pb={0} className="grid-seperator">
          <Card p={0} m={0} title="Suggested Packing Box" height={'42.5em'} bodySeperator={false}>
            <Box sx={{ p: 2, pt: 0, pb: 0, textAlign: 'center' }}>
              <img alt="pallet" src={PackingBox} />
            </Box>
            <Box
              sx={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <Typography>Box Type </Typography>
              <Typography>{boxType}</Typography>
            </Box>
            <Divider sx={{ borderWidth: '0.8px', mt: 2, mb: 2 }} light />

            <Box sx={{ p: 2, pt: 0, pb: 0, textAlign: 'center' }}>
              <Typography variant="h1">{boxType}</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default BinScanWaitScreen
