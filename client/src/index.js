import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
 import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
// import store from 'store';
import Reducer from './_reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
 import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';



const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);
ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            Reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();