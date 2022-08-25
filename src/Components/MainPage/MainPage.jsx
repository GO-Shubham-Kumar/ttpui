import React from 'react';
import { Header, Card, Container } from 'operational-component-lib';
import { Grid } from '@mui/material';

function MainPage(){
    return (
        <>
        <Header heading ="Scan Pallet ID"/>
        {/* <Container> */}
            <Grid container spacing={1} >
                <Grid xs={12} md={3} p={3} pl={2} pr={1}>
                    <Card title="Currently Active">
                        PalletId 
                        ---
                    </Card>
                </Grid>
                <Grid xs={12} md={9} p={3} pl={2} pr={1}>
                    <Card title="Currently Active">
                        PalletId 
                        ---
                    </Card>
                </Grid>
            </Grid>
        {/* </Container> */}
        </>
    )
}

export default MainPage