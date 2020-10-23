import React from 'react'
import {
  BrowserRouter as //Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Spinner } from 'reactstrap'
// Components
import Devices from './components/Devices'
import DeviceCard from './components/DeviceCard'
import Login from './components/SignIn'
import Signup from './components/SignUp'
import AddDevice from './components/AddDevice'
import LoadedDevice from './components/LoadedDevice'
import Elements from './components/Elements'
import Generic from './components/Generic'
import Nav from './components/Nav'
import Home from './components/Home'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Redux
import { connect } from 'react-redux'
import {
  addDevice,
  getDeviceByID,
  requestSignup,
  requestLogin,
  updateDevice,
} from './actions'
import { Switch, Route, Link } from 'react-router-dom'

import DeviceList from './components/DeviceList'
import DeviceForm from './components/DeviceForm'

import SignIn from './components/SignIn'
import Signup from './components/SignUp'
import AddDevice from './components/AddDevice'
import PrivateRoute from './components/PrivateRoute'

<<<<<<< HEAD
function App(props) {git 
  return (
    <div className="App">
      <Nav />
=======
export default function App () {
  return (
    <div className='App'>
      <nav>
        <h3>Use My Tech Stuff</h3>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/signin>SignIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/devicelist">DeviceList</Link>
          </li>
        </ul>
      </nav>
>>>>>>> c6123c60db951374668b39aede522df7dec74716
      <div className="content">
        <Switch>
          <PrivateRoute exact path="/devicelist" component={DeviceList} />
          <Route path="/devicelist/:id">
            <DeviceForm />
          </Route>
         //<Route path='signin'>
           </li> <SignIn />
          </ul></Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route exact path="/">
            <AddDevice />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     loadedDevice: state.loadedDevice,
//     devices: state.devices,
//     error: state.error,
//     user: state.user,
//     isFetching: state.isFetching
//   };
// }

// export default connect(mapStateToProps, {
//   requestLogin,
//   requestSignup,
//   addDevice,
//   getDeviceByID,
//   updateDevice
// })(App);
