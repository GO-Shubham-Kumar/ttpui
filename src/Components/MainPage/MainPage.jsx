import React from 'react';
import {  Header, Card, BinDetailsSidebar, BinDetails } from 'operational-component-lib';
import { Grid, Box } from '@mui/material';

function MainPage(){
    return (
        <>
        <Header heading ="Scan Pallet ID" />
        {/* <Container> */}
            <Grid container  alignItems="stretch">
                <Grid xs={12} md={3} p={2} className="grid-seperator" >
                    <BinDetailsSidebar title="Currently Active" palletId="3123423423"/>
                    <BinDetails title="Previous Pick" />
                </Grid>
                <Grid  xs={12} md={9} p={2}>
                    <Card title="Pallet ID" p={0} bodySeperator={true}>
                        <Box sx={{p:4,pt:0, textAlign : 'center'}}>
                            <img alt="pallet" src="/pallet.svg" style={{ "marginBottom":"10%" }}/>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        {/* </Container> */}
        </>
    )
}

export default MainPage