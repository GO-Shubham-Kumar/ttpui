import { BinDetails, BinMapDetails, Card, Header } from 'operational-component-lib';
import { Box, Grid } from '@mui/material';

import PALLET_BARCODE_IMG from './../../../assets/images/pallet_barcode.svg';
import React from 'react';
import { STANDARD_CARD_HEIGHT_WITH_SEPERATOR } from '../../../utils/constants';

function ScanPallet({
    headerMsg, 
    previousDetails, 
    currentDetails,
    seatMode,
    ...props}){
    return (
        <>
        <Header headerText ={headerMsg}/>
        {/* <Container> */}
            <Grid container  alignItems="stretch">
                <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator" >
                    <BinMapDetails title="Currently Active" details={currentDetails} palletId="3123423423" />
                    <BinDetails title={`Previous ${seatMode}`} details={previousDetails} height="17.2em" />
                </Grid>
                <Grid  item xs={12} md={9} p={3} pb={0}>
                    <Card title="Scan ID" sx={{ p:0 }} bodySeperator={true}>
                        <Box sx={{p:4,pt:0, textAlign : 'center', minHeight : STANDARD_CARD_HEIGHT_WITH_SEPERATOR}}>
                            <img alt="pallet" src={PALLET_BARCODE_IMG} className="img-responsive"  />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        {/* </Container> */}
        </>
    )
}

export default ScanPallet;