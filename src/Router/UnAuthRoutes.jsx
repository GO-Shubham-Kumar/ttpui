
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import AuthContext from './../Context/AuthContext';
function useAuth() {
    return React.useContext(AuthContext);
  }

const UnAuthRoutes = ({ isLoggedIn, user, comp, path, children}) => {

    // let auth = React.useContext(AuthContext)
    // console.log('auth', auth);
    const location = useLocation()
    if(isLoggedIn) return <Navigate to="/" state={{ from: location }} replace />
    return children

}

export default UnAuthRoutes;