import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
// import { configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux';
 import store from './store/store'
 import configureStore from "./store/store";

//const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
		 {/* <Provider store={store}>  */}
		<App />
		 {/* </Provider>  */}
			
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
