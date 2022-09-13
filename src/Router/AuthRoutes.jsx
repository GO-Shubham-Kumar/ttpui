
import { Navigate, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import AuthContext from './../Context/AuthContext';
import Layout from '../Containers/Layout/Layout';
import WebSocketConn from './../utils/helpers/webSocketHelpers';
// function useAuth() {
//     return React.useContext(AuthContext);
//   }
  const AuthRoutes = ({ isLoggedIn, user, comp, path, children}) => {
    console.log('isLoggedin', isLoggedIn)
    useEffect(()=>{
        if(isLoggedIn){
            if ("WebSocket" in window) {
                // WebSocketConn.onopen = function (event) {
                //     console.log('connected using websocket')
                // }
                // WebSocketConn.onmessage = function (event) {
                //     console.log('message on web socket', event)
                // }
            }
        }
    })
    // console.log('auth', auth);
    const location = useLocation()
    if(!isLoggedIn) return <Navigate to="/login" state={{ from: location }} replace />
    return children

}

export default AuthRoutes;