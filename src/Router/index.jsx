import "./../App.css";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { SEAT_NAME, VALID_URLS } from "../utils/constants";
import { fetchInitialConfigsAction, fetchSeatModeAction } from "../redux/actions/initialActions";
import { useDispatch, useSelector } from "react-redux";

import AuthLayout from "./../Containers/Layout/AuthLayout";
import AuthRoutes from "./AuthRoutes";
import Layout from "./../Containers/Layout/Layout";
import Login from "./../Containers/Login/Login";
import UnAuthRoutes from "./UnAuthRoutes";
import { retreiveSessionData } from "../utils/helpers/sessionHelpers";
import routesData from "./routes";
import { verifyLoginAction } from "../redux/actions/authActions";

function App() {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.authReducer);
  const { pps_seats, mode, success, configs } = useSelector((state) => state.initialConfigs);
  const { isLoggedIn, isFetching } = loginData;
  const { pathname } = useLocation();
  const onScannerButtonHandler = (event) => {
    const {
      target: { name, value },
    } = event;
    console.log(event)
    //based on button handle scenario
    if (name === 'scanner-submit'){
      //do something
      console.log(value)
    }

    if (name === 'scanner-cancel'){
      //do something
      console.log(value)

    }
  };
  let validRoute = true;
  if (VALID_URLS.indexOf(pathname) < 0) validRoute = false;

  useEffect(() => {
    if (!isLoggedIn) dispatch(verifyLoginAction());
    dispatch(fetchInitialConfigsAction());
  }, []);
  useEffect(() => {
    if (pps_seats.length > 0 && success && mode === "") {
      const seat_name = retreiveSessionData(SEAT_NAME);
      seat_name && dispatch(fetchSeatModeAction(seat_name, configs, pps_seats));
    }
  }, [pps_seats, success, configs]);

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
