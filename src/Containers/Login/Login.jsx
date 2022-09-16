import React from 'react';
import Login from './../../Components/Login/Login';
import {useSelector, useDispatch} from 'react-redux';
import { loginAction } from './../../redux/actions/authActions';

function LoginContainer(){
    const dispatch = useDispatch();
    const auth = useSelector((state) => {
        console.log('state.authReducer --', state.authReducer);
        return state.authReducer
    })
    const loginUser = (username, password, seat_name, mode) => {
        const role = `ROLE_${mode.toUpperCase()}`
        dispatch(loginAction(username, password, seat_name, role))
    }
    return <Login auth={auth} dispatch={dispatch} login={loginUser}/>
}

export default LoginContainer;