import {
    IS_FETCHING,
    POST_SIGNIN_SUCCESS,
    POST_SIGNIN_FAILURE,
    POST_SIGNUP_SUCCESS,
    POST_SIGNUP_FAILURE,
    POST_DEVICE_SUCCESS,
    POST_DEVICE_FAILURE,
    FETCH_DEVICEID_SUCCESS,
    FETCH_DEVICEID_FAILURE,
    FETCH_USERID_SUCCESS,
    FETCH_USERID_FAILURE,
    UPDATE_DEVICE_SUCCESS,
    UPDATE_DEVICE_FAILURE,
  } from '../actions'
  
  export const initialState = {
    loadedDevice: {},
    devices: [],
    error: "",
    user: {},
    isFetching: false,
  };
  
  export const reducer = (state = initialState, action) => {
    console.log(`PAYLOAD: ${action.payload}`);
    switch (action.type) {
      // FETCH
      case IS_FETCHING:
        return {
          ...state,
          error: "",
          isFetching: true,
        };
      // SUCCESS
      case POST_SIGNUP_SUCCESS:
      case POST_SIGNIN_SUCCESS:
        return {
          ...state,
          error: "",
          isFetching: false,
          user: action.payload.user,
          plants: action.payload.user.devices,
        };
      case POST_DEVICE_SUCCESS:
        return {
          ...state,
          error: "",
          isFetching: false,
          devices: action.payload.devices,
        };
      case FETCH_DEVICEID_SUCCESS:
        return {
          ...state,
          error: "",
          loadedDevice: action.payload,
          isFetching: false,
        };
      case FETCH_USERID_SUCCESS:
        return {
          ...state,
          error: "",
          user: action.payload,
          isFetching: false,
        };
      case UPDATE_DEVICE_SUCCESS:
        console.log(action.payload.device);
        const newDevices = state.devices.filter((device) => {
          return device.id !== action.deviceID;
        });
        newDevices.push(action.payload.device);
        return {
          ...state,
          error: "",
          devices: newDevices,
          loadedDevice: {},
          isFetching: false,
        };
      // FAILURE
      case POST_SIGNUP_FAILURE:
      case POST_SIGNIN_FAILURE:
      case POST_DEVICE_FAILURE:
      case FETCH_DEVICEID_FAILURE:
      case FETCH_USERID_FAILURE:
      case UPDATE_DEVICE_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false,
        };
      default:
        return state;
    }
  };
  
  