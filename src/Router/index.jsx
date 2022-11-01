import './../App.css';

import { APP_SOURCE, EVENT_TYPE_PROCESS_BARCODE, INTIAL_FETCH_ERROR, LOGIN, SEAT_NAME, VALID_URLS } from '../utils/constants';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { capitalizeFirstLetter, clearTimeoutEvent, manipulateServerMessages, setIdleLogoutEvent } from '../utils/helpers/commonHelpers';
import { fetchInitialConfigsAction, fetchSeatModeAction } from '../redux/actions/initialActions';
import { handleNotificationClear, triggerNotificationction } from '../redux/actions/notifications';
import { logOutAction, verifyLoginAction } from '../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

import AuthLayout from './../Containers/Layout/AuthLayout';
import AuthRoutes from './AuthRoutes';
import Layout from './../Containers/Layout/Layout';
import Login from './../Containers/Login/Login';
import UnAuthRoutes from './UnAuthRoutes';
import { retreiveSessionData } from '../utils/helpers/sessionHelpers';
import routesData from './routes';
import { triggerEventAction } from '../redux/actions/eventActions';

function App() {
  
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [showNotification, setNotification] = useState(false)
  const [noitificationData, setNotificationData] = useState({})
  const [seatname, setSeatName] = useState('')
  const [ logoutAllowed, setLogoutAllowed ] = useState(true);
  const [ scanAllowed, setScanAllowed ] = useState(true);
  const idleLogoutRef = useRef();
  const loginData = useSelector( state => {
    return state.authReducer
  } );
  const { data : stateData,  error : stateError, success : stateSuccess } = useSelector( state => state.mainStateReducer );
  const { pps_seats, mode, success, configs, error } = useSelector( state => state.initialConfigs );
  const {  data : notificationData, success : NotificationSuccess } = useSelector( state => state.notifications );
  const { isLoggedIn, isFetching, err, success : loginSuccess } = loginData;


  let validRoute = true;
  if(VALID_URLS.indexOf(pathname) < 0) validRoute = false;
  

  const onScannerButtonHandler = (event) => {
    const { target: { name, value } } = event;
    //based on button handle scenario
    if (name === 'scanner-submit'){
      const eventData = {
        event_data : {
          barcode : value
        },
        event_name : EVENT_TYPE_PROCESS_BARCODE,
        source : APP_SOURCE
      }
      dispatch(triggerEventAction(eventData, seatname))
    }
  };

  useEffect(()=>{
    dispatch(verifyLoginAction());
    dispatch(fetchInitialConfigsAction());
  }, []);

  useEffect(() => {
    if (pps_seats.length > 0 && success && mode === "") {
      const seat_name = retreiveSessionData(SEAT_NAME);
      seat_name && dispatch(fetchSeatModeAction(seat_name, configs, pps_seats));
    }
    if(error) dispatch(triggerNotificationction({ description : INTIAL_FETCH_ERROR}))
  }, [pps_seats, success, configs, error]);


  useEffect(()=>{
    console.log('-- state data', stateData)
    if(stateData && stateData.state_data && stateSuccess){
      const { state_data : { notification_list, seat_name, logout_allowed, scan_allowed } } = stateData;
      setSeatName(seat_name)
      setLogoutAllowed(logout_allowed||true)
      setScanAllowed(scan_allowed || true)
      if(notification_list.length > 0){
        const { msgData, msgObj } = manipulateServerMessages(notification_list);
        let notification = { ...msgData, ...msgObj }
        notification['description'] = notification['value']
        dispatch(triggerNotificationction(notification))
      }
      handleIdleTimeoutEvents()
    }
  },[stateData, stateSuccess])

  useEffect(()=>{
   if(NotificationSuccess)setNotification(true)
   else setNotification(false)
   setNotificationData(notificationData)
  },[notificationData, NotificationSuccess])

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setNotification(false);
  };

  const handleExited = () => {
    dispatch(handleNotificationClear())
  }

  const handleLogout = () => {
    dispatch(logOutAction())
  }

  useEffect(()=>{
    if(!err && !isFetching && loginSuccess){
      window.addEventListener('onkeydown', handleIdleTimeoutEvents);
      // handleIdleTimeoutEvents()
    }
    return () => {
      idleLogoutRef.current && clearTimeoutEvent(idleLogoutRef)
    }
  },[ loginSuccess, isFetching, err ]);

  const handleIdleTimeoutEvents = () => {
    const { IDLE_LOGOUT_TIME } = window.globalConfigs;
      clearTimeoutEvent(idleLogoutRef)
      let timeoutRef = setTimeout(
        ()=>{
          dispatch(logOutAction())
        },IDLE_LOGOUT_TIME)
      idleLogoutRef.current = timeoutRef
  }
  const renderRoutes = () => {
    const routes = routesData();
    return routes.map((data, i) => {
      return (
        <Route
          exact
          key={i}
          {...data}
          path={data.path}
          element={
            <AuthRoutes isFetching={isFetching} isLoggedIn={isLoggedIn}>
              <AuthLayout isLoggedIn={isLoggedIn}>
                <data.comp />
              </AuthLayout>
            </AuthRoutes>
          }
        />
      );
    });
  };

  return (
    <Layout
      isLoggedIn={isLoggedIn}
      isFetching={isFetching}
      mode={capitalizeFirstLetter(mode) }
      onScannerButtonHandler={onScannerButtonHandler}
      notification={showNotification} 
      notificationData={notificationData}
      handleClose={handleClose}
      handleExited={handleExited}
      logoutAllowed = {logoutAllowed}
      scanAllowed = {scanAllowed}
      handleLogout={handleLogout}
    >
      {/* {((isFetching && !isLoggedIn) ) ? (
        <div>loading...</div>
      ):( */}
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <UnAuthRoutes mode={mode} isFetching={isFetching} isLoggedIn={isLoggedIn}>
              <Login />
            </UnAuthRoutes>
          }
        />
        {renderRoutes()}
      </Routes>
      {/* )}  */}
      {!validRoute && <Navigate to={`${mode || '/login'}`} />}
    </Layout>
  );
}

export default App;
