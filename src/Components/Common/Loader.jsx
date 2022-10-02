import React from 'react';
import Goloader from './../../assets/images/loader_go.gif'
// import Goloader from './../../assets/images/loader.png'
const Loader = ()=> {
    return(
        <div className='go-loader'>
            <img src={Goloader} alt="loader" />
        </div>
    )
}

export default Loader