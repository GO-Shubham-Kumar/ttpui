
import { Navigate, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import AuthContext from './../Context/AuthContext';
import Layout from '../Containers/Layout/Layout';
import WebSocketConn from './../HOC/WebSockets';
function useAuth() {
    return React.useContext(AuthContext);
  }
  const AuthRoutes = ({ isLoggedin, user, comp, path, children}) => {
    const auth = React.useContext(AuthContext)
    useEffect(()=>{
        if(auth.isLoggedin){
            if ("WebSocket" in window) {
                WebSocketConn.onopen = function (event) {
                    console.log('connected using websocket')
                }
            }
        }
    })
    console.log('auth', auth);
    const location = useLocation()
    if(!auth.isLoggedin) return <Navigate to="/login" state={{ from: location }} replace />
    return children

}

export default AuthRoutes;