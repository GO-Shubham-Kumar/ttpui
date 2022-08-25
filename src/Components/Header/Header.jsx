import React from 'react';
import { Header as ScanHeader, BrandHeader, Container } from 'operational-component-lib';
// const logo  = require('/assets/images/GO_Orange_Black_Horizontal.svg');
function Header(){
    return (
        <div>
            <Container header={ <ScanHeader /> }>
                <ScanHeader goLogo={'assets/images/GO_Orange_Black_Horizontal.svg'} mode="Put Back"/>
            </Container>
        </div>
    )
}

export default Header