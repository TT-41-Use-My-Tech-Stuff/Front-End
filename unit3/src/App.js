import React from 'react'
// import {
//   BrowserRouter as //Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom'
import { Spinner } from 'reactstrap'
// Components
import Devices from './components/Devices'
import DeviceCard from './components/DeviceCard'
import Login from './components/SignIn'
// import Signup from './components/SignUp'
// import AddDevice from './components/AddDevice'
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


export default function App () {
  return (
    <>
    <div className='App'>
   
        <h3>Use My Tech Stuff</h3>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/signin'>SignIn</Link>
          </li>
          <li>
            <Link to='/signup'>SignUp</Link>
          </li>
          <li>
            <Link to='/devicelist'>DeviceList</Link>
          </li>
        </ul>
      
    </div>

      <div className='content'>
         <Switch> // fuck this switch
          <PrivateRoute exact path='/devicelist' component={DeviceList} />
          <Route path='./DeviceList' />
            <DeviceList />>
          <Route path={/deviceList/`${deviceList.id}`} >
            <DeviceList />                //???????
          </Route>
          <Route>
            <DeviceForm id={id} />
          </Route>
         <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/signup'>
              <Signup />
          </Route>
          <Route exact path='/'>
            <AddDevice />
          </Route>
        </Switch>
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
