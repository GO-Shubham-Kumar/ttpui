import React from 'react';
import logo from './../../assets/images/GO_Orange_Black_Horizontal.svg'
import { BrandHeader, Container } from 'operational-component-lib';
const Layout = ({children}) => {

    return (
        <Container fullWidth={true} >
            <BrandHeader goLogo={logo} mode="Put" isLoggedin={true} />
                <main>
                    {children}
                </main>
        </Container>
    )

}

export default Layout;