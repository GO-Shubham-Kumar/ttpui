import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { verifyLoginAction } from "../redux/actions/authActions";
import { fetchInitialConfigs, fetchInitialConfigsAction } from "../redux/actions/initialActions";
import { VALID_URLS } from "../utils/constants";

const appWrapper = (App) =>{

  const dispatch = useDispatch();
  const loginData = useSelector( state => state.authReducer );
  const configs = useSelector( state => state.initialConfigsReducers );
  const { isLoggedIn } = loginData;
  const { pathname } = useLocation();
  console.log('pathname',pathname, pathname.indexOf(VALID_URLS));
  let validRoute = true;
  if(VALID_URLS.indexOf(pathname) < 0) validRoute = false;

  useEffect(()=>{
    dispatch(fetchInitialConfigsAction());
    if(isLoggedIn) dispatch(verifyLoginAction());
  } ,[])

    return { isLoggedIn, validRoute }
}

export default appWrapper