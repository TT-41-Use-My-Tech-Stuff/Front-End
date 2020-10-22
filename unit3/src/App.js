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
// import Nav from './components/Nav'
import Home from './components/Home'

// Redux
import { connect } from 'react-redux'
import {
  addDevice,
  getDeviceByID,
  requestSignup,
  requestLogin,
  updateDevice,
} from './actions'



function App(props) {
  return (
    <div className="App">
      {/* <Nav /> */}
      <div className="content">
        {
          //Shows Loading in the content field if is fetching is true
          !props.isFetching ? (
            <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              
              <Route path="/AddDevice">
                <AddDevice addDevice={props.addDevice} userID={props.user.id} />
                <Devices
                  devices={props.devices}
                  getDeviceByID={props.getDeviceByID}
                />
              </Route>
              <Route path="/SignIn">
                <Login
                  requestLogin={props.requestLogin}
                  isFetching={props.isFetching}
                />
              </Route>
              <Route path="/SignUp">
                <Signup
                  requestSignup={props.requestSignup}
                  isFetching={props.isFetching}
                />
              </Route>
              <Route exact path="/devices">
                <Devices />
              </Route>
              <Route path="/devices/:id">
                <LoadedDevice
                  device={props.loadedDevice}
                  updateDevice={props.updateDevice}
                />
              </Route>
              <Route path="/Elements">
                <Elements />
              </Route>

              <Route path="/Generic">
                <Generic />
              </Route>
              <Route to='#menu'>
                  
              </Route>
            </Switch>
          ) : (
            <Spinner
              color="info"
              id="loading-spinner"
              style={{ width: "3rem", height: "3rem" }}
            />
          )
        }
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    loadedDevice: state.loadedDevice,
    devices: state.devices,
    error: state.error,
    user: state.user,
    isFetching: state.isFetching,
  };
}

export default connect(mapStateToProps, {
  requestLogin,
  requestSignup,
  addDevice,
  getDeviceByID,
  updateDevice,
})(App); 
