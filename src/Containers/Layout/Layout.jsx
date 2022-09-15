import React from 'react';
import logo from './../../assets/images/GO_Orange_Black_Horizontal.svg'
import { AppBar, Container, Footer, NotificationBar } from 'operational-component-lib';

const Layout = ({isLoggedIn, children}) => {
    return (
        <Container fullWidth={true} height="100%" >
            <AppBar goLogo={logo} mode="Put" isLoggedIn={isLoggedIn} />
            {/* <NotificationBar msg="Notification message to display" /> */}
                <main>
                    {children}
                </main>
            <Footer footerText="Butler Operator Interface - BOI 2.0. All right resirved Greyorange 2019."/>
        </Container>
    )

}

export default Layout;