import React from 'react';
import logo from './../../logo.svg'
import { BrandHeader, Container } from 'operational-component-lib';
const Layout = ({children}) => {

    return (
        <Container fullWidth={true}  background="gray">
            {children}
        </Container>
    )

}

export default Layout;