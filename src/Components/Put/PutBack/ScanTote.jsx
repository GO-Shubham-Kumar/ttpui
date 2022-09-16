import React from 'react';
import {  Header, Card, BinMapDetails, BinDetails } from 'operational-component-lib';
import { Grid, Box } from '@mui/material';
import ToteImg from './../../../assets/images/tote.svg';
import Arrow from './../../../assets/images/arrow.svg';

function ScanTote(){
    return (
        <>
        <Header headerText ="Scan a Tote to Induct" />
        {/* <Container> */}
            <Grid container  alignItems="stretch">
                <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator" >
                    <BinMapDetails title="Scan Active" palletId="3123423423"/>
                    <BinDetails title="Previous Pick" height="19em" />
                </Grid>
                <Grid  item xs={12} md={9} p={3} pb={0}>
                    <Card title="Scan Tote" sx={{pt:0}}  bodySeperator={true}>
                        <Box sx={{p:4,pt:0,pb:0, height:"40.5em", textAlign : 'center'}}>
                            <img alt="pallet" src={Arrow}  className="img-responsive"/>
                            <img alt="pallet" src={ToteImg} className="img-responsive"/>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        {/* </Container> */}
        </>
    )
}

export default ScanTote