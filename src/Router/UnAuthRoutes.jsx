
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import AuthContext from './../Context/AuthContext';
function useAuth() {
    return React.useContext(AuthContext);
  }

const UnAuthRoutes = ({ isLoggedIn, isFetching, mode, comp, path, children}) => {
    const location = useLocation()
    if(isLoggedIn && !isFetching) return <Navigate to={`${mode ? `/${mode}` : '/'}`} state={{ from: location }} replace />
    return children

}

export default UnAuthRoutes;