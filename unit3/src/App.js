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
//import DeviceCard from './components/DeviceCard'
import Login from './matt/SignIn'
import Signup from './matt/SignUp'
import AddDevice from './components/AddDevice'
import LoadedDevice from './components/LoadedDevice'
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
      <nav>
        <h1>Use My Tech Stuff</h1>
        <ul>
          <li>
            <Link to="https://compassionate-curie-a3daaf.netlify.app/">Home</Link>
          </li>
          <li>
            <Link to="/login">SignIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        {
          //Shows Loading in the content field if is fetching is true
          !props.isFetching ? (
            <Switch>
              <Route exact path="https://nostalgic-mclean-b29c3f.netlify.app/">
                <AddDevice addDevice={props.addDevice} userID={props.user.id} />
                <Devices
                  devices={props.devices}
                  getDeviceByID={props.getDeviceByID}
                />
              </Route>
              <Route path="/login">
                <Login
                  requestLogin={props.requestLogin}
                  isFetching={props.isFetching}
                />
              </Route>
              <Route path="/signup">
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