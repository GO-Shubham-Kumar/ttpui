import React, { useEffect } from "react";
import { fetchInitialConfigs, fetchInitialConfigsAction } from "../redux/actions/initialActions";
import { useDispatch, useSelector } from "react-redux";

import { VALID_URLS } from "../utils/constants";
import { useLocation } from "react-router-dom";
import { verifyLoginAction } from "../redux/actions/authActions";

const appWrapper = (App) =>{

  const dispatch = useDispatch();
  const loginData = useSelector( state => state.authReducer );
  const configs = useSelector( state => state.initialConfigsReducers );
  const { isLoggedIn } = loginData;
  const { pathname } = useLocation();
  let validRoute = true;
  if(VALID_URLS.indexOf(pathname) < 0) validRoute = false;

  useEffect(()=>{
    dispatch(fetchInitialConfigsAction());
    if(!isLoggedIn) dispatch(verifyLoginAction());
  } ,[])

    return { isLoggedIn, validRoute }
}

export default appWrapper