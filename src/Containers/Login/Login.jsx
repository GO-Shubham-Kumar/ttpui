import React from 'react';
import Login from './../../Components/Login/Login';
import {useSelector, useDispatch} from 'react-redux';
import { loginAction } from './../../redux/actions/authActions';

function LoginContainer(){
    const auth = useSelector((state) => {
        return state.authReducer
    })
    const dispatch = useDispatch()
    const loginUser = (username, password, seat_name) => {
        dispatch(loginAction(username, password, seat_name))
    }
    return <Login auth={auth} dispatch={dispatch} login={loginUser}/>
}

export default LoginContainer;