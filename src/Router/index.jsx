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
import { APP_SOURCE, EVENT_TYPE_PROCESS_BARCODE, SEAT_NAME, VALID_URLS } from '../utils/constants';
import { fetchInitialConfigsAction, fetchSeatModeAction } from '../redux/actions/initialActions';
import { verifyLoginAction } from '../redux/actions/authActions';
import { retreiveSessionData } from '../utils/helpers/sessionHelpers';
import { handleNotificationClear, triggerNotificationction } from '../redux/actions/notifications';
import { triggerEventAction } from '../redux/actions/eventActions';

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [showNotification, setNotification] = useState(false)
  const [noitificationData, setNotificationData] = useState({})
  const [seatname, setSeatName] = useState('')

  const loginData = useSelector( state => {
    console.log('--states in index', state)
    return state.authReducer
  } );
  const { data : stateData,  error : stateError, success : stateSuccess } = useSelector( state => state.mainStateReducer );
  const { pps_seats, mode, success, configs } = useSelector( state => state.initialConfigs );
  const {  data : notificationData, success : NotificationSuccess } = useSelector( state => state.notifications );
  const { isLoggedIn, isFetching } = loginData;


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
    if(!isLoggedIn)dispatch(verifyLoginAction());
    dispatch(fetchInitialConfigsAction());
  }, []);
  useEffect(() => {
    if (pps_seats.length > 0 && success && mode === "") {
      const seat_name = retreiveSessionData(SEAT_NAME);
      seat_name && dispatch(fetchSeatModeAction(seat_name, configs, pps_seats));
    }
  }, [pps_seats, success, configs]);


  useEffect(()=>{
    if(stateData && stateData.state_data && stateSuccess){
      const { state_data : { notification_list, seat_name } } = stateData;
      setSeatName(seat_name)
      if(notification_list.length > 0)dispatch(triggerNotificationction(notification_list[0]))
    }
  },[stateData, stateSuccess])

  useEffect(()=>{
   console.log('--- here in notification', NotificationSuccess, notificationData)
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
      mode={mode}
      onScannerButtonHandler={onScannerButtonHandler}
      notification={showNotification} 
      notificationData={notificationData}
      handleClose={handleClose}
      handleExited={handleExited}
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
      {!validRoute && <Navigate to="/" />}
    </Layout>
  );
}

export default App;
