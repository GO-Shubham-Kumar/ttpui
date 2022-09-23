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
        binDetails, 
        modalLabels, 
        tableColumns, 
        tableItemList, 
        seatMode,
        handleShowModal,
        ...props 
    }) {
    const [showPalletModal, setShowPalletModal] = useState(false)
    const handleShowPallet = () => {
        setShowPalletModal(true)
    }
    const handleClosePallet = () => {
        setShowPalletModal(false)
    }
    const handleConfirm = () => {
        console.log("Confirm Clicked!")
    }
    console.log('headerMsg', headerMsg)

    return (
        <>
            <StepperHeader stepperObj={headerMsg} subHeaderText={subHeader} />
            {/* <Container> */}
            <Grid container alignItems="stretch">
                <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator" >
                    <BinMapDetails title="Currently Active" details={currentDetails} palletId="7834784378" toteId="--" />
                    <BinDetails title={`Previous ${seatMode}`} details={previousDetails} height="18.5em" />
                </Grid>
                <Grid item xs={12} md={9} p={3} pb={0}>
                    <Card title="Scan Tote" sx={{ pt: 0 }}>
                        <Box sx={{ p: 4, pt: 0, pb: 0, textAlign: 'center' }}>
                            <img alt="arrow" src={Arrow} className="img-responsive" />
                        </Box>
                        <Box sx={{ p: 4, pt: 0, pb: 0, height: "27.6em", textAlign: 'center' }}>
                            <img alt="tote" src={ToteImg} className="img-responsive" style={{ marginTop: '-0.4em' }} />
                        </Box>
                        <Button label="Close Pallet" variant="outlined" onClickHandler={handleShowModal}
                            sx={{ ml: '1em', mb: '1em' }} />

                    </Card>
                </Grid>
            </Grid>
            {/* </Container> */}
        </>
    )
}

export default ScanTote