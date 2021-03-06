import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import {store} from './Store/Store'
import axios from 'axios';
import dotenv from 'dotenv'
const {BACKEND, BACK_PORT}= process.env
dotenv.config()
console.log(BACKEND)

axios.defaults.baseURL = process.env.BACKEND 

ReactDOM.render(
  <Provider store= {store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
