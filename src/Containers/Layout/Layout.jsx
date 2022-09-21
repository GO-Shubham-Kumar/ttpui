import { AppBar, Container, Footer, NotificationBar } from "operational-component-lib";

import React from "react";
import logo from "./../../assets/images/GO_Orange_Black_Horizontal.svg";

const Layout = ({ isLoggedIn, mode, children, onScannerButtonHandler }) => {
  return (
    <Container fullWidth={true} height="100%">
      <AppBar
        goLogo={logo}
        mode={mode}
        isLoggedIn={isLoggedIn}
        onScannerButtonHandler={onScannerButtonHandler}
      />
      <NotificationBar
        autoHideDuration={3000}
        msg="Notification message to display"
        severity={"info"}
      />
      <main>{children}</main>
      <Footer footerText="Butler Operator Interface - BOI 2.0. All right resirved Greyorange 2019." />
    </Container>
  );
};

export default Layout;
