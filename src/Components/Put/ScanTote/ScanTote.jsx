import { BinDetails, BinMapDetails, Button, Card, Modal, StepperHeader, Table, Typography } from 'operational-component-lib';
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';

import Arrow from './../../../assets/images/arrow.svg';
import ToteImg from './../../../assets/images/tote.svg';

function ScanTote({ header, subHeader, binDetails, modalLabels, tableColumns, tableItemList, ...props }) {

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

    return (
        <>
            <StepperHeader stepperObj={header} subHeaderText={subHeader} />
            {/* <Container> */}
            <Grid container alignItems="stretch">
                <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator" >
                    <BinMapDetails title="Currently Active" palletId="7834784378" toteId="--" />
                    <BinDetails title="Previous Put" details={binDetails} height="18.5em" />
                </Grid>
                <Grid item xs={12} md={9} p={3} pb={0}>
                    <Card title="Scan Tote" sx={{ pt: 0 }}>
                        <Box sx={{ p: 4, pt: 0, pb: 0, textAlign: 'center' }}>
                            <img alt="arrow" src={Arrow} className="img-responsive" />
                        </Box>
                        <Box sx={{ p: 4, pt: 0, pb: 0, height: "28.46em", textAlign: 'center' }}>
                            <img alt="tote" src={ToteImg} className="img-responsive" style={{ marginTop: '-0.4em' }} />
                        </Box>
                        <Button label="Close Pallet" variant="outlined" onClickHandler={handleShowPallet}
                            sx={{ ml: '1em', mb: '1em' }} />

                        <Modal showModal={showPalletModal} modalType='info' title='Close Pallet' buttonText='Confirm'
                            onCloseHandler={handleClosePallet} onConfirmHandler={handleConfirm} >
                            <Typography type='info' variant='h3' style={{ mb: '0.6em' }} >
                                {modalLabels[0]}
                            </Typography>
                            <Typography type='info' variant='h3' style={{ mb: '0.6em', fontWeight: 'bold' }} >
                                {modalLabels[1]}
                            </Typography>
                            <Typography type='info' variant='h3' style={{ mb: '0.6em' }} >
                                {modalLabels[2]}
                            </Typography>
                            <Table columns={tableColumns} itemList={tableItemList} />
                        </Modal>
                    </Card>
                </Grid>
            </Grid>
            {/* </Container> */}
        </>
    )
}

export default ScanTote