import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@mui/material";
import { LoginForm } from "operational-component-lib";
import { SEAT_NAME } from "../../utils/constants";
import WelcomeDetails from "./WelcomeDetails";
import { fetchSeatModeAction } from "../../redux/actions/initialActions";
import { retreiveSessionData } from "../../utils/helpers/sessionHelpers";
import videoSrc from "../../assets/images/videoHome.m4v";

const Login = ({ login }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [seatName, setSeatName] = useState("");
  const [ppsSeats, setPpsSeats] = useState([]);
  const [seatMode, setSeatMode] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);

  const { pps_seats, mode, success, configs } = useSelector((state) => {
    return state.initialConfigs;
  });

  useEffect(() => {
    let listForDropdown = [];
    if (pps_seats.length > 0) {
      pps_seats?.map((i) => listForDropdown.push({ key: i, value: i }));
    }
    setPpsSeats(listForDropdown);
    if (success) {
        if(!mode || mode ===""){
            const seat_name = retreiveSessionData(SEAT_NAME);
            setSeatName(seat_name)
        }
        setSeatMode(mode);
    }
  }, [pps_seats, mode]);

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password, seatName, seatMode);
  };

const onChangeHandler = (e) => {
    const {
        target: { name, value },
    } = e;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "pps_seats") {
        setSeatName(value);
        dispatch(fetchSeatModeAction(value, configs, pps_seats));
    }
  };

  return (
    <Grid container spacing={0} sx={{ mt: '4em' }} >
    <Grid item lg={1} md={1} sm={0}/>
      <video id="background-video" autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <Grid item xs={showKeyboard ? 10 : 3}>
        <LoginForm
          title={"Login"}
          ppsList={ppsSeats}
          selectedPps={seatName}
          username={username}
          password={password}
          onChangeHandler={onChangeHandler}
          onLoginHandler={handleLogin}
          height={"600px"}
          showKeyboard={showKeyboard}
          onKeyboardHideHandler={setShowKeyboard}
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
