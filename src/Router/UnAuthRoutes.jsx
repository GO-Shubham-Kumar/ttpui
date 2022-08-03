
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import AuthContext from './../Context/AuthContext';
function useAuth() {
    return React.useContext(AuthContext);
  }

const UnAuthRoutes = ({ isLoggedin, user, comp, path, children}) => {
    // console.log('----', )
    let auth = React.useContext(AuthContext)
    console.log('auth', auth);
    const location = useLocation()
    if(auth.isLoggedin) return <Navigate to="/scan-tote" state={{ from: location }} replace />
    return children

}

export default UnAuthRoutes;