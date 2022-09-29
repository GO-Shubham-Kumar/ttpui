import { BinDetails, BinMapDetails, Button, Card, StepperHeader } from 'operational-component-lib';
import { Box, Grid } from '@mui/material';
import React from 'react';

import Arrow from './../../../assets/images/arrow.svg';
import ToteImg from './../../../assets/images/tote.svg';

function ScanTote({ headerMsg, 
        previousDetails, 
        data, 
        subHeader, 
        currentDetails, 
        seatMode,
        handleShowModal,
        handleCloseTote,
        missingItems,
        ...props 
    }) {
    console.log('missingItems', missingItems)

    return (
        <>
            <StepperHeader stepperObj={headerMsg} subHeaderText={subHeader} />
            {/* <Container> */}
            <Grid container alignItems="stretch">
                <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator" >
                    <BinMapDetails title="Currently Active" details={currentDetails} />
                    <BinDetails title={`Previous ${seatMode}`} details={previousDetails} height="17.2em" />
                </Grid>
                <Grid item xs={12} md={9} p={3} pb={0}>
                    <Card title="Scan Tote" sx={{ pt: 0 }}>
                        <Box sx={{ p: 4, pt: 0, pb: 0, textAlign: 'center' }}>
                            <img alt="arrow" src={Arrow} className="img-responsive" />
                        </Box>
                        <Box sx={{ p: 4, pt: 0, pb: 0, minHeight: "27em", textAlign: 'center' }}>
                            <img alt="tote" src={ToteImg} className="img-responsive" style={{ marginTop: '-0.4em' }} />
                        </Box>
                        <Button label="Close Pallet" variant="outlined" onClickHandler={handleCloseTote}
                            sx={{ ml: '1em', mb: '1em' }} />

                    </Card>
                </Grid>
            </Grid>
            {/* </Container> */}
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