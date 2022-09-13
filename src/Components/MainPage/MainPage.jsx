import React from 'react';
import {  Header, Card, BinDetailsSidebar, BinDetails } from 'operational-component-lib';
import { Grid, Box } from '@mui/material';

function MainPage(){
    return (
        <>
        <Header heading ="Scan Pallet" />
        {/* <Container> */}
            <Grid container  alignItems="stretch">
                <Grid item xs={12} md={3} p={3} pb={0} className="grid-seperator" >
                    <BinDetailsSidebar title="Currently Active" palletId="3123423423"/>
                    <BinDetails title="Previous Pick" />
                </Grid>
                <Grid  item xs={12} md={9} p={3} pb={0}>
                    <Card title="Pallet ID" p={0} bodySeperator={true}>
                        <Box sx={{p:4,pt:0, textAlign : 'center'}}>
                            <img alt="pallet" src="/pallet.svg" style={{ "marginBottom":"7.5em" }}/>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        {/* </Container> */}
        </>
    )
}

export default MainPage