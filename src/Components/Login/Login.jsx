import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeatModeAction } from '../../redux/actions/initialActions';

function Login({ login }){
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [seatName, setSeatName] = useState('front_1');
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
        setPpsSeats(pps_seats);
        if(success) setSeatMode(mode)
    }, [ pps_seats, mode ])

    const handleLogin = (e) => {
        e.preventDefault()
        login(username, password, seatName, seatMode);
    }
    const onChangeHandler = (e) => {
        const { target : { value } } = e;
        dispatch(fetchSeatModeAction(value, configs, pps_seats))
    }
    return (
        <div>
            <form method="post">
                <select onChange={(e) => {onChangeHandler(e)}} value={seatMode}>
                    {ppsSeats && ppsSeats.length>0 && ppsSeats.map((seat, i)=>{
                        return <option key={seat} value={seat}>{seat}</option>
                    })}
                </select>
                <input name="username" type="text" onChange={ (e) => { setUsername(e.target.value) } }/>
                <input name="password" type="password" onChange={ (e) => { setPassword(e.target.value) } }/>
                <button type="login" onClick={(e) => { handleLogin(e) }}>Login</button>
            </form>
        </div>
    )
}

export default Login