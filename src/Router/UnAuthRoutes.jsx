import { Navigate, useLocation } from "react-router-dom";

import AuthContext from "./../Context/AuthContext";
import Loader from "../Components/Common/Loader";
import React from "react";

function useAuth() {
  return React.useContext(AuthContext);
}

const UnAuthRoutes = ({
  isLoggedIn,
  isFetching,
  mode,
  comp,
  path,
  children,
}) => {
  const location = useLocation();
  console.log("mode", mode, isLoggedIn, isFetching);
  if (!isLoggedIn && isFetching && mode === "") return <Loader />;
  if (isLoggedIn && !isFetching && mode === "") return <Loader />;
  if (isLoggedIn && !isFetching && mode !== "")
    return (
      <Navigate
        to={`${mode ? `/${mode}` : "/login"}`}
        state={{ from: location }}
        replace
      />
    );
  return children;
};

export default UnAuthRoutes;
