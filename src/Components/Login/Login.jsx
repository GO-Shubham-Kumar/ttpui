import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoginForm } from 'operational-component-lib';
import { fetchSeatModeAction } from '../../redux/actions/initialActions';

function Login({ login }){
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [seatName, setSeatName] = useState('');
    const [ppsSeats, setPpsSeats] = useState([]);
    const [seatMode, setSeatMode] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
    const { pps_seats, mode, success, configs } = useSelector( state => {
        console.log('state.initialConfigs,', state.initialConfigs);
        return state.initialConfigs
    } );
    console.log()
    console.log('configs', mode);
    useEffect(()=>{
        let listForDropdown = []
        if(pps_seats.length > 0){
            pps_seats?.map(i => listForDropdown.push({key: i, value: i}))
        }
        setPpsSeats(listForDropdown);
        if(success) setSeatMode(mode)
    }, [ pps_seats, mode ])

    const handleLogin = (e) => {
        e.preventDefault()
        login(username, password, seatName, seatMode);
    }
    const onChangeHandler = (e) => {
        const { target : { name, value } } = e;
        console.log('name, value', name, value);
        if(name ==='username') setUsername(value)
        if(name ==='password') setPassword(value)
        if(name ==='pps_seats') setSeatName(value)
        dispatch(fetchSeatModeAction(value, configs, pps_seats))
    }
    const onLoginHandler = (event,username,password) => {
        console.log(event,username,password)
    }

    return (
        <div style={{ paddingBottom: '100px' }}>
            {/* <form method="post">
                <select onChange={(e) => {onChangeHandler(e)}} value={seatMode}>
                    {ppsSeats && ppsSeats.length>0 && ppsSeats.map((seat, i)=>{
                        return <option key={seat} value={seat}>{seat}</option>
                    })}
                </select>
                <input name="username" type="text" onChange={ (e) => { setUsername(e.target.value) } }/>
                <input name="password" type="password" onChange={ (e) => { setPassword(e.target.value) } }/>
                <button type="login" onClick={(e) => { handleLogin(e) }}>Login</button>
            </form> */}
            <LoginForm title={'Login'} ppsList={ppsSeats} selectedPPS={seatName} username={username} password={password} onChangeHandler={onChangeHandler} onLoginHandler={handleLogin}/>
        </div>
    )
}

export default Login