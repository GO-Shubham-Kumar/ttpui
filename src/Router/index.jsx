import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import routesData from './routes';
import AuthRoutes from './AuthRoutes';
import UnAuthRoutes from './UnAuthRoutes';
import Login from './../Containers/Login/Login';
import Layout from './../Containers/Layout/Layout';
import AuthLayout from './../Containers/Layout/AuthLayout';
import './../App.css'; 
import { VALID_URLS } from '../utils/constants';
import { fetchInitialConfigsAction } from '../redux/actions/initialActions';
import { verifyLoginAction } from '../redux/actions/authActions';

function App() {
  
  const dispatch = useDispatch();
  const loginData = useSelector( state => state.authReducer );
  const configs = useSelector( state => state.initialConfigsReducers );
  const { isLoggedIn } = loginData;
  const { pathname } = useLocation();
  console.log('pathname',pathname, pathname.indexOf(VALID_URLS));
  let validRoute = true;
  console.log('configs----', configs);
  if(VALID_URLS.indexOf(pathname) < 0) validRoute = false;
  
  useEffect(()=>{
    dispatch(fetchInitialConfigsAction());
    if(isLoggedIn)dispatch(verifyLoginAction());
  },[])

  const renderRoutes = () => {
    const routes = routesData();
    return routes.map((data, i) => {
      // console.log(data)
        return <Route key={i} {...data} path={data.path} element={ 
                <AuthRoutes isLoggedIn={isLoggedIn}>
                    <AuthLayout isLoggedIn={isLoggedIn}>
                        <data.comp />
                    </AuthLayout>
                </AuthRoutes>
         } 
      />
    })
  }
  return (
    <Layout isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/login" element={ 
            <UnAuthRoutes isLoggedIn={isLoggedIn}>
              <Login /> 
            </UnAuthRoutes>
          } />
            {renderRoutes() }
        </Routes>  
          {!validRoute && <Navigate to="/" />}
    </Layout>
  );
}

export default App;
