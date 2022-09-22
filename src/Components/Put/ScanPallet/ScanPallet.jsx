import React from 'react';
import {  Header, Card, BinMapDetails, BinDetails } from 'operational-component-lib';
import { Grid, Box } from '@mui/material';
import PalletImg from './../../../assets/images/pallet_image.svg';

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
                    <BinDetails title={`Previous ${seatMode}`} details={previousDetails} height="18.5em" />
                </Grid>
                <Grid  item xs={12} md={9} p={3} pb={0}>
                    <Card title="Pallet ID" sx={{ p:0 }} bodySeperator={true}>
                        <Box sx={{p:4,pt:0, textAlign : 'center', height : '38em'}}>
                            <img alt="pallet" src="/pallet_barcode.svg" className="img-responsive"  />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        {/* </Container> */}
        </>
    )
}

export default ScanPallet;