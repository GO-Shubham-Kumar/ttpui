
import { Navigate, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import AuthContext from './../Context/AuthContext';
import Layout from '../Containers/Layout/Layout';
import WebSocketConn from './../utils/helpers/webSocketHelpers';
import { useDispatch } from 'react-redux';
import { updateStateData } from '../redux/actions/updateMainStateDataActions';
// function useAuth() {
//     return React.useContext(AuthContext);
//   }
  const AuthRoutes = ({ isLoggedIn, isFetching, comp, path, children}) => {
    const dispatch = useDispatch()
    console.log('isLoggedin', isLoggedIn)
    useEffect(()=>{
        if(isLoggedIn){
            console.log('here')
            // if ("WebSocket" in window) {
            //     WebSocketConn.onopen = function (event) {
            //         console.log('connected using websocket')
            //     }
            //     WebSocketConn.onmessage = function (event) {
            //         console.log('message on web socket', event);
            //         dispatch(updateStateData(event));
            //     }
            // }
        }
    })
    const location = useLocation()
    if(!isLoggedIn && !isFetching) return <Navigate to="/login" state={{ from: location }} replace />
    return children

}

export default AuthRoutes;