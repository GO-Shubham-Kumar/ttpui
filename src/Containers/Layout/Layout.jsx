import { AppBar, Container, Footer, NotificationBar } from "operational-component-lib";
import React, { useRef } from "react";

import { NOTIFICATION_TYPE_ERROR } from "../../utils/constants";
import { fetchClientLogo } from "../../utils/helpers/commonHelpers";

// import logo from "./../../assets/images/GO_Orange_Black_Horizontal.svg";

const Layout = ({
  isLoggedIn,
  mode,
  children,
  onScannerButtonHandler,
  notification,
  notificationData,
  handleClose,
  handleExited,
  handleLogout,
}) => {
  const menuWidget = [
    // {
    //   "key": 0,
    //   "label": "Peripheral Management",
    //   "isDisable": false
    // },
    // {
    //   "key": 1,
    //   "label": "Item search",
    //   "isDisable": false
    // },
    {
      key: 2,
      label: "Logout",
      isDisable: false,
    },
  ];
  const keyboardReference = useRef();
  const logo = fetchClientLogo();
  const handleMenuClick = (e, key) => {
    if (key === 2) handleLogout();
  };

  return (
    <Container fullWidth={true} height="100%">
      <AppBar
        goLogo={logo}
        customerLogo={logo}
        mode={mode}
        isLoggedIn={isLoggedIn}
        onScannerButtonHandler={onScannerButtonHandler}
        menuItems={menuWidget}
        onMenuClickHandler={handleMenuClick}
        keyboardReference={keyboardReference}
      />
      {/* {notification && notificationData.description && ( */}
      <NotificationBar
        key={notificationData ? notificationData.key : undefined}
        open={notification}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
        severity={notificationData.level || NOTIFICATION_TYPE_ERROR}
        message={notificationData ? notificationData.description : undefined}
      />
      {/* )} */}
      <main>{children}</main>
      <Footer footerText="Butler Operator Interface - BOI 2.0. All right reserved GreyOrange 2022." />
    </Container>
  );
};

export default Layout;
