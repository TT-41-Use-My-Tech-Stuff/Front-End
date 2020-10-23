import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Bapp from './Bapp'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter as Router } from 'react-router-dom'

import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reducer } from './reducers/'

// import './styles/reset.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './styles/index.css'


const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Bapp />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
