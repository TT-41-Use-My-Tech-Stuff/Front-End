import { axiosWithAuth } from '../utils/axiosWithAuth'

export const IS_FETCHING = "IS_FETCHING";

/**** ACTIONS FOR GET ****/
export const FETCH_DEVICEID_SUCCESS = "FETCH_DEVICEID_SUCCESS";
export const FETCH_DEVICEID_FAILURE = "FETCH_DEVICEID_FAILURE";

export const getDeviceByID = (id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .get(`/devices/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_DEVICEID_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_DEVICEID_FAILURE, payload: err });
    });
};

export const FETCH_USERID_SUCCESS = "FETCH_USERID_SUCCESS";
export const FETCH_USERID_FAILURE = "FETCH_USERID_FAILURE";

export const getUserByID = (id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .get(`/users/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_USERID_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_USERID_FAILURE, payload: err });
    });
};

/**** ACTIONS FOR POST ****/
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_FAILURE = "POST_LOGIN_FAILURE";

export const requestLogin = (userData) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .post("/login", userData)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_LOGIN_FAILURE, payload: err });
    });
};

export const POST_SIGNUP_SUCCESS = "POST_SIGNUP_SUCCESS";
export const POST_SIGNUP_FAILURE = "POST_SIGNUP_FAILURE";

export const requestSignup = (userData) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .post("/register", userData)
    .then((res) => {
      dispatch({ type: POST_SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_SIGNUP_FAILURE, payload: err });
    });
};

export const POST_DEVICE_SUCCESS = "POST_DEVICE_SUCCESS";
export const POST_DEVICE_FAILURE = "POST_DEVICE_FAILURE";

export const addDevice = (deviceData, id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .post(`/users/${id}/devices`, deviceData)
    .then((res) => {
      dispatch({ type: POST_DEVICE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_DEVICE_FAILURE, payload: err });
    });
};

/**** ACTIONS FOR UPDATE ****/
export const UPDATE_DEVICE_SUCCESS = "UPDATE_DEVICE_SUCCESS";
export const UPDATE_DEVICE_FAILURE = "UPDATE_DEVICE_FAILURE";

export const updateDevice = (deviceData, id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .put(`devices/${id}`, deviceData)
    .then((res) => {
      dispatch({ type: UPDATE_DEVICE_SUCCESS, payload: res.data, deviceID: id });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_DEVICE_FAILURE, payload: err });
    });
};

export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const updateUser = (userData, id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .put(`users/${id}`, userData)
    .then((res) => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_USER_FAILURE, payload: err });
    });
};
/**** ACTIONS FOR DELETE ****/
export const DELETE_DEVICE_SUCCESS = "DELETE_DEVICE_SUCCESS";
export const DELETE_DEVICE_FAILURE = "DELETE_DEVICE_FAILURE";

export const deleteDevice = (id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .delete(`devices/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_DEVICE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_DEVICE_FAILURE, payload: err });
    });
};

export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const deleteUser = (id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .delete(`users/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_USER_FAILURE, payload: err });
    });
};

