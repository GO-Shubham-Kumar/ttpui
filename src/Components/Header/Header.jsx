import React from 'react';
import { BrandHeader } from 'operational-component-lib';
const logo  = require('./../../assets/images/GO_Orange_Black_Horizontal.svg');
function Header(){
    return (
        <div>
            <BrandHeader goLogo={logo} mode="Put Back"/>
        </div>
    )
}

export default Header