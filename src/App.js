import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import './assets/css/app.css'

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
