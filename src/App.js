import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Containers/Header/Header';
import AuthContext from './Context/AuthContext';
import Router from './Router';
import { Provider } from 'react-redux';
// import 'operational-component-lib/dist/assets/css/app.css';
import './assets/css/app.css'

function AuthProvider({ children } ) {
  let [isLoggedin, setUser] = React.useState(true);

  let signin = (newUser, callback) => {
      setUser(true)
      callback();
  };

  let signout = (callback) => {
      setUser(false);
      callback();
  };

  let value = { signin, signout, isLoggedin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function App() {
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);
  return (
    <AuthProvider>
      {/* <Provider> */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      {/* </Provider>   */}
    </AuthProvider>
  
  );
}

export default App;
