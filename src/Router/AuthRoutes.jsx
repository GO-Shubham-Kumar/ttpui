import { Navigate, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import GoLoader from './../Components/Common/Loader';

const AuthRoutes = ({ isLoggedIn, isFetching, comp, path, children}) => {
    const location = useLocation()
    if(!isLoggedIn && isFetching) return <div><GoLoader /></div>
    if(!isLoggedIn && !isFetching) return <Navigate to="/login" state={{ from: location }} replace />
    return children


}

export default AuthRoutes;