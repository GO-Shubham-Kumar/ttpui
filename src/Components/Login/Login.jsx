import { NOTIFICATION_TYPE_ERROR, NOTIFICATION_TYPE_INFO, SEAT_NAME } from "../../utils/constants";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@mui/material";
import { LoginForm } from "operational-component-lib";
import WelcomeDetails from "./WelcomeDetails";
import { capitalizeFirstLetter } from "../../utils/helpers/commonHelpers";
import { fetchSeatModeAction } from "../../redux/actions/initialActions";
import { retreiveSessionData } from "../../utils/helpers/sessionHelpers";
import { triggerNotificationction } from "../../redux/actions/notifications";
import videoSrc from "../../assets/images/videoHome.m4v";

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

  const { pps_seats, mode, success, configs } = useSelector((state) => state.initialConfigs);
  const {
    success: authSuccess,
    isFetching: authIsFetching,
    message: authMessage,
    err: authError,
    data,
    isValidationError,
  } = useSelector((state) => state.authReducer);
  const keyboardReference = useRef();
  useEffect(() => {
    let listForDropdown = [];
    if (pps_seats.length > 0) {
      pps_seats?.map((i) => listForDropdown.push({ key: i, value: i }));
    }
    setPpsSeats(listForDropdown);
    if (success) {
      if (!mode || mode === "") {
        const seat_name = retreiveSessionData(SEAT_NAME);
        setSeatName(seat_name);
        setPpsSelected(true);
      }
      setSeatMode(capitalizeFirstLetter(mode));
    }
  }, [pps_seats, mode]);

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password, seatName, seatMode);
  };

  useEffect(() => {
    if (!authIsFetching) {
      if (isValidationError) {
        setIsLoginError(true);
        setErrorText(authMessage);
      } else {
        const notificationData = {
          description: authMessage,
          level: NOTIFICATION_TYPE_ERROR,
        };
        if (Object.keys(data).length > 0) notificationData["level"] = NOTIFICATION_TYPE_INFO;
        dispatch(triggerNotificationction(notificationData));
      }
    }
    const seat_name = retreiveSessionData(SEAT_NAME);
    if (!seatName && seat_name) setSeatName(seat_name);
  }, [authSuccess, authIsFetching, authError, authMessage]);

  const onChangeHandler = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "username") {
      setUsername(value);
      keyboardReference.current.setInput(value);
    }
    if (name === "password") {
      setPassword(value);
      keyboardReference.current.setInput(value);
    }
    if (name === "pps_seats") {
      setSeatName(value);
      dispatch(fetchSeatModeAction(value, configs, pps_seats));
    }
  };

  return (
    <Grid container spacing={0.5} sx={{ mt: "8em", minHeight: "54em" }} className="login">
      <Grid item xs={0} sm={0} md={1} lg={1} xl={1} />
      <video id="background-video" autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <Grid
        item
        xs={12}
        sm={12}
        md={showKeyboard ? 10 : 5}
        lg={showKeyboard ? 10 : 4}
        xl={showKeyboard ? 10 : 3}
      >
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
          keyboardReference={keyboardReference}
        />
      </Grid>
      {!showKeyboard && (
        <Grid item xs={12} sm={12} md={5} lg={6} xl={7}>
          <WelcomeDetails seatMode={seatMode} ppsNo={seatName} />
        </Grid>
      )}
    </Grid>
  );
};

export default Login;
