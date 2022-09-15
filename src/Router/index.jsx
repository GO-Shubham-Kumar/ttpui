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
  const initialConfigs = useSelector( (state) => {
    console.log('state in intital ', state)
    return state.initialConfigs} );
  console.log('initialConfigs', initialConfigs);
  const { mode } = initialConfigs;
  const { isLoggedIn, isFetching } = loginData;
  const { pathname } = useLocation();
  console.log('pathnem', pathname);
  let validRoute = true;
  if(VALID_URLS.indexOf(pathname) < 0) validRoute = false;
  
  useEffect(()=>{
    if(!isLoggedIn)dispatch(verifyLoginAction());
    dispatch(fetchInitialConfigsAction());
  },[])

  const renderRoutes = () => {
    const routes = routesData();
    return routes.map((data, i) => {
      return <Route exact key={i} {...data} path={data.path} element={ 
          <AuthRoutes isFetching={isFetching} isLoggedIn={isLoggedIn}>
                <AuthLayout isLoggedIn={isLoggedIn}>
                    <data.comp />
                </AuthLayout>
            </AuthRoutes>
         } 
      />
    })
  }
  
  return (
    <Layout isLoggedIn={isLoggedIn} isFetching={isFetching}>
      {/* {((isFetching && !isLoggedIn) ) ? (
        <div>loading...</div>
      ):( */}
        <Routes>
          <Route exact path="/login" element={ 
            <UnAuthRoutes mode={mode} isFetching={isFetching} isLoggedIn={isLoggedIn}>
              <Login /> 
            </UnAuthRoutes>
          } />
            {renderRoutes() }
        </Routes>  
      {/* )}  */}
      {!validRoute && <Navigate to="/" />}
    </Layout>
  );
}

export default App;
