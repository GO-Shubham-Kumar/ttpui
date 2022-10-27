import './assets/css/app.css'
import './assets/css/fonts.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import React from 'react';
import Router from './Router';
import store from './redux/store';

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>  
  
  );
}

export default App;
