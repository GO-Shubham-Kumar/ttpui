import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoginForm } from "operational-component-lib";
import { fetchSeatModeAction } from "../../redux/actions/initialActions";
import videoSrc from "./videoHome.m4v";

const Login = ({ login }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [seatName, setSeatName] = useState("");
  const [ppsSeats, setPpsSeats] = useState([]);
  const [seatMode, setSeatMode] = useState("");

  const { pps_seats, mode, success, configs } = useSelector((state) => {
    return state.initialConfigs;
  });

  useEffect(() => {
    let listForDropdown = [];
    if (pps_seats.length > 0) {
      pps_seats?.map((i) => listForDropdown.push({ key: i, value: i }));
    }
    setPpsSeats(listForDropdown);
    if (success) setSeatMode(mode);
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
    <>
      <div style={{ margin: "6em 0 0 14em", height: "56em", position: "relative" }}>
        <video id="background-video" autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <LoginForm
          title={"Login"}
          ppsList={ppsSeats}
          selectedPps={seatName}
          username={username}
          password={password}
          onChangeHandler={onChangeHandler}
          onLoginHandler={handleLogin}
          height={"600px"}
        />
      </div>
    </>
  );
};

export default Login;
