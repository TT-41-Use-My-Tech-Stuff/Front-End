import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
// Router
import { BrowserRouter as Router } from 'react-router-dom'
// Redux
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reducer } from './reducers/'
// Styles
import './styles/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import './styles/plants.css'

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
