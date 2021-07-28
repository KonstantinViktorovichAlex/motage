import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './Redux/RootReducer';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(ReduxThunk)))


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
    ,
    document.getElementById('root')
);
