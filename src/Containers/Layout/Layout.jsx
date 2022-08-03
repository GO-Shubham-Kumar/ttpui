import React from 'react';
import logo from './../../logo.svg'

// class Layout extends React.Component{

//     render(){
//         return (
//             <div className='layout'>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

const Layout = ({children}) => {

    return (
        <div className="layout">
            {children}
        </div>
    )

}

export default Layout;