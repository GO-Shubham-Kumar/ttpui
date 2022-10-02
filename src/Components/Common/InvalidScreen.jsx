import { Box } from '@mui/material';
import { Typography } from 'operational-component-lib'
import React from 'react';
const InvalidScreen = ()=> {
    return(
        <Box className='go-loader invalid-screen' sx={{ color : '#605e5c',  height : '992px' }}>
            <Typography variant='h1' className="invalid-screen-text">Invalid Screen</Typography>
        </Box>
    )
}

export default InvalidScreen