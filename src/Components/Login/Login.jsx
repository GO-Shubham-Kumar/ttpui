import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@mui/material";
import { LoginForm } from "operational-component-lib";
import { NOTIFICATION_TYPE_ERROR, NOTIFICATION_TYPE_INFO, SEAT_NAME } from "../../utils/constants";
import WelcomeDetails from "./WelcomeDetails";
import { fetchSeatModeAction } from "../../redux/actions/initialActions";
import { retreiveSessionData } from "../../utils/helpers/sessionHelpers";
import videoSrc from "../../assets/images/videoHome.m4v";
import { triggerNotificationction } from "../../redux/actions/notifications";

const Login = ({ login }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [seatName, setSeatName] = useState("");
  const [ppsSeats, setPpsSeats] = useState([]);
  const [seatMode, setSeatMode] = useState("");
  const [ppsNumber, setPpsNum] = useState("02");
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [ppsSelected, setPpsSelected] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const { pps_seats, mode, success, configs } = useSelector(state => state.initialConfigs )
<<<<<<< HEAD
  const { success : authSuccess, isFetching : authIsFetching, message : authMessage, err : authError, data, isValidationError } = useSelector(state => state.authReducer )
=======
  const { success : authSuccess, isFetching : authIsFetching, message : authMessage, err : authError, data } = useSelector(state => state.authReducer )
>>>>>>> 6544016 (feature/GM-52894 - Working on Place Entity Screen)

  useEffect(() => {
    let listForDropdown = [];
    if (pps_seats.length > 0) {
      pps_seats?.map((i) => listForDropdown.push({ key: i, value: i }));
    }
    setPpsSeats(listForDropdown);
    if (success) {
        if(!mode || mode ===""){
            const seat_name = retreiveSessionData(SEAT_NAME);
            setSeatName(seat_name);
            setPpsSelected(true)
        }
        setSeatMode(mode);
    }
  }, [pps_seats, mode]);

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password, seatName, seatMode);
  };


  useEffect(() => {
    console.log('authSuccess, authIsFetching, authError, authMessage', authSuccess, authIsFetching, authError, authMessage)
<<<<<<< HEAD
    if(!authIsFetching && authError  ){
      if(isValidationError){
        setIsLoginError(true)
        setErrorText(authMessage)
      }
      else{
        const notificationData = {
          description : authMessage,
          level : NOTIFICATION_TYPE_ERROR
        }
        if( Object.keys(data).length > 0) notificationData['level'] = NOTIFICATION_TYPE_INFO
        dispatch(triggerNotificationction(notificationData))
        
=======
    if(!authIsFetching && authError ){
      if( Object.keys(data).length > 0 ) {
        const notificationData = {
          description : authMessage,
          level : NOTIFICATION_TYPE_INFO
        }
        dispatch(triggerNotificationction(notificationData))
      }else{
        setIsLoginError(true)
        setErrorText(authMessage)
>>>>>>> 6544016 (feature/GM-52894 - Working on Place Entity Screen)
      }
    }
    const seat_name = retreiveSessionData(SEAT_NAME);
    if(seat_name)setSeatName(seat_name)
  }, [authSuccess, authIsFetching, authError, authMessage]);


const onChangeHandler = (e) => {
  const {
    target: { name, value },
  } = e;
  console.log('name, value', name, value)
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "pps_seats") {
        setSeatName(value);
        dispatch(fetchSeatModeAction(value, configs, pps_seats));
    }
};

  return (
    <Grid container spacing={0} sx={{ mt: '8em', minHeight : '54em' }} className="login" >
    <Grid item lg={1} md={1} sm={0} sx={{ pr: 1 }}/>
      <video id="background-video" autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <Grid item xs={showKeyboard ? 10 : 3} md={showKeyboard ? 10 : 3}>
        <LoginForm
          title={"Login"}
          ppsList={ppsSeats}
          selectedPps={seatName}
          username={username}
          password={password}
          onChangeHandler={onChangeHandler}
          onLoginHandler={handleLogin}
          height={"652px"}
          showKeyboard={showKeyboard}
          onKeyboardHideHandler={setShowKeyboard}
          selectedPpsNum={ppsNumber}
          isError={isLoginError}
          errorTexts={errorText}
        />
      </Grid>
      {!showKeyboard && (
        <Grid item xs={7}>
          <WelcomeDetails seatMode={mode} ppsNo={"01"} />
        </Grid>
      )}
    </Grid>
  );
};

export default Login;
