import React, { useState, useEffect } from 'react';

function Login({ login }){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [seatName, setSeatName] = useState('front_1');
    const [isLoggedin, setIsLoggedin] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()
        login(username, password, seatName);
    }
    return (
        <div>
            <form method="post">
                <input name="username" type="text" onChange={ (e) => { setUsername(e.target.value) } }/>
                <input name="password" type="password" onChange={ (e) => { setPassword(e.target.value) } }/>
                <button type="login" onClick={(e) => { handleLogin(e) }}>Login</button>
            </form>
        </div>
    )
}

export default Login