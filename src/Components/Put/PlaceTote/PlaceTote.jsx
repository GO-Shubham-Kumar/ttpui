import { BinDetails, BinMapDetails, Button, Card, Modal, StepperHeader, Table, Typography } from 'operational-component-lib';
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';

import Arrow from './../../../assets/images/arrow.svg';
import ToteImg from './../../../assets/images/tote.svg';

function ScanTote({ headerMsg, 
        previousDetails, 
        data, 
        subHeader, 
        currentDetails, 
        seatMode,
        handleCancelScan,
        handleSendTote,
        ...props 
    }) {
    console.log('headerMsg', headerMsg)

    return (
        <>
            <StepperHeader stepperObj={headerMsg} subHeaderText={subHeader} />
            <Grid container alignItems="stretch">
                <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator" >
                    <BinMapDetails title="Currently Active" details={currentDetails} palletId="7834784378" toteId="--" />
                    <BinDetails title={`Previous ${seatMode}`} details={previousDetails} height="18.5em" />
                </Grid>
                <Grid item xs={12} md={9} p={3} pb={0}>
                    <Card title="Scan Tote"sx={{p:0}}>

                        <Box sx={{ p: 4, pt: 0, pb: 0, textAlign: 'center', height:"38.8em", display : 'flex' }}>
                            <img alt="tote" src={ToteImg} className="img-responsive m-auto" />
                        </Box>
                        <Box className="seprator" sx={{mr:0, ml:0}}></Box>
                        <Button 
                            label="Cancel Scan" 
                            variant="outlined" 
                            onClickHandler={handleCancelScan}
                            sx={{ ml: '1em', mb: '1em' }} 
                        />
                        <Button 
                            label="Send Tote" 
                            variant="contained" 
                            onClickHandler={handleSendTote}
                            sx={{ ml: '1em', mb: '1em' }} 
                        />

                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default ScanTote

ScanTote.defaultProps = {
    headerMsg : [],
    previousDetails : {},
    currentDetails : {},
    data : [],
    subHeader : '',
    seatMode : '',
    handleShowModal : undefined
}