import { BinDetails, BinMapDetails, Button, Card, StepperHeader } from 'operational-component-lib';
import { Box, Grid } from '@mui/material';

import React from 'react';
import ToteImg from './../../../assets/images/tote.svg';

function ScanTote({ headerMsg, 
        previousDetails, 
        data, 
        subHeader, 
        currentDetails, 
        seatMode,
        handleSendTote,
        ...props 
    }) {

    return (
        <>
            <StepperHeader stepperObj={headerMsg} subHeaderText={subHeader} />
            <Grid container alignItems="stretch">
                <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator" >
                    <BinMapDetails title="Currently Active" details={currentDetails} palletId="7834784378" toteId="--" />
                    <BinDetails title={`Previous ${seatMode}`} details={previousDetails} height="17.2em" />
                </Grid>
                <Grid item xs={12} md={9} p={3} pb={0}>
                    <Card title="Scan Tote"sx={{p:0}}>

                        <Box sx={{ p: 4, pt: 0, pb: 0, textAlign: 'center', height:"38.2em", display : 'flex' }}>
                            <img alt="tote" src={ToteImg} className="img-responsive m-auto" />
                        </Box>
                        <Box className="seprator" sx={{mr:0, ml:0}}></Box>
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