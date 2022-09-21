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
import { SEAT_NAME, VALID_URLS } from '../utils/constants';
import { fetchInitialConfigsAction, fetchSeatModeAction } from '../redux/actions/initialActions';
import { verifyLoginAction } from '../redux/actions/authActions';
import { retreiveSessionData } from '../utils/helpers/sessionHelpers';

function App() {
  
  const dispatch = useDispatch();
  const loginData = useSelector( state => state.authReducer );
  const { pps_seats, mode, success, configs } = useSelector( state => state.initialConfigs );
  const { isLoggedIn, isFetching } = loginData;
  const { pathname } = useLocation();
  let validRoute = true;
  if(VALID_URLS.indexOf(pathname) < 0) validRoute = false;
  
  useEffect(()=>{
    if(!isLoggedIn)dispatch(verifyLoginAction());
    dispatch(fetchInitialConfigsAction());
  },[])
  useEffect(()=>{
    if(pps_seats.length > 0 && success && mode===''){
      const seat_name = retreiveSessionData(SEAT_NAME);
      seat_name && dispatch(fetchSeatModeAction(seat_name, configs, pps_seats));
    }
  },[pps_seats, success, configs])

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
    <Layout isLoggedIn={isLoggedIn} isFetching={isFetching} mode={mode}>
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
