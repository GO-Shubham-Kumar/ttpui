import React from 'react';
import {  Header, Card, BinMapDetails, BinDetails } from 'operational-component-lib';
import { Grid, Box } from '@mui/material';

function MainPage(){
    return (
        <>
        <Header heading ="Scan Pallet" />
        {/* <Container> */}
            <Grid container  alignItems="stretch">
                <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator" >
                    <BinMapDetails title="Currently Active" palletId="3123423423" />
                    <BinDetails title="Previous Pick" height="300px" />
                </Grid>
                <Grid  item xs={12} md={9} p={3} pb={0}>
                    <Card title="Pallet ID" sx={{ p:0 }} bodySeperator={true}>
                        <Box sx={{p:4,pt:0, textAlign : 'center', height : '610px'}}>
                            <img alt="pallet" src="/pallet.svg"  />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        {/* </Container> */}
        </>
    )
}

export default MainPage