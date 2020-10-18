import React, { useState } from "react";
//import { Button } from "reactstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /*function performValidation() {
    return username.length > 0 && password.length > 0;
  }*/

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="auth-wrapper">
      <form className="auth-inner" onSubmit={(e) => handleSubmit(e)}>
        <h3>Welcome Back!</h3>
        
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            placeholder="Enter username"
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign In
          </button>

          <p className="forgot-password text-right">
          Forgot password?
          </p>
      </form>
     
    </div>
  );
}

export default Login;


