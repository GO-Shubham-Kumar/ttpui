import React from 'react';
import {  Header, Card, BinMapDetails, BinDetails } from 'operational-component-lib';
import { Grid, Box } from '@mui/material';

function ScanPallet(){
    return (
        <>
        <Header headerText ="Scan Pallet" />
        {/* <Container> */}
            <Grid container  alignItems="stretch">
                <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator" >
                    <BinMapDetails title="Currently Active" palletId="3123423423" />
                    <BinDetails title="Previous Pick" height="18.5em" />
                </Grid>
                <Grid  item xs={12} md={9} p={3} pb={0}>
                    <Card title="Pallet ID" sx={{ p:0 }} bodySeperator={true}>
                        <Box sx={{p:4,pt:0, textAlign : 'center', height : '38em'}}>
                            <img alt="pallet" src="/pallet.svg" className="img-responsive"  />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        {/* </Container> */}
        </>
    )
}

export default ScanPallet;