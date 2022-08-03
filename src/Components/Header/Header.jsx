import React from 'react';
import { BrandHeader } from 'operational-component-lib';
const logo  = require('./../../assets/images/GO_Orange_Black_Horizontal.svg');
function Header(){
    return (
        <div>
            <BrandHeader goLogo={require('./../../assets/images/GO_Orange_Black_Horizontal.svg')} mode="Put Back"/>
           This is header
        </div>
    )
}

export default Header