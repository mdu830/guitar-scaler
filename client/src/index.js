import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './routes/welcome';
import Scaler from './routes/guitarScaler';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="scaler" element={<Scaler />} />
    </Routes>  
  </BrowserRouter>, 
  rootElement
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();