import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import DeviceList from './components/DeviceList'
import DeviceForm from './components/DeviceForm'

import SignIn from './components/SignIn'
import Signup from './components/SignUp'
import AddDevice from './components/AddDevice'
import PrivateRoute from './components/PrivateRoute'

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
      <div className="content">
        <Switch>
          <PrivateRoute exact path="/devicelist" component={DeviceList} />
          <Route path="/devicelist/:id">
            <DeviceForm />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
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
