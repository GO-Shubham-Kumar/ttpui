
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import AuthContext from './../Context/AuthContext';
import Layout from '../Containers/Layout/Layout';
function useAuth() {
    return React.useContext(AuthContext);
  }

const AuthRoutes = ({ isLoggedin, user, comp, path, children}) => {
    let auth = React.useContext(AuthContext)
    console.log('auth', auth);
    const location = useLocation()
    if(!auth.isLoggedin) return <Navigate to="/login" state={{ from: location }} replace />
    return children

}

export default AuthRoutes;