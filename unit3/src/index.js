import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/DeviceCard'
import Bapp from './Bapp'

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