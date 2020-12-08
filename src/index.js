import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { browserHistory } from 'react-router';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import App from './App'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <App/>
        </Router>
    </Provider>,
document.getElementById('root'));

