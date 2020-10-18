import React, { useState } from 'react'
//import ReactDOM from 'react-dom'
//import PhoneInput from 'react-phone-number-input'
//import './styles.css'
//import './schemaSignup.js'


function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  //const [number, setNumber] = useState("");
    
  return (
    <div className="auth-wrapper">

    <form className="auth-inner">
       <h3>Sign Up</h3>
          <div className="form-group">
              <label>First name</label>
              <input type="text" className="form-control" placeholder="First name"  value={firstName}
                  onChange={e => setFirstName(e.target.value)}/>
          </div>

          <div className="form-group">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" 
              value={lastName}
              onChange={e => setLastName(e.target.value)}/>
          </div>

          <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" value={emailAddress}
                      onChange={e => setEmailAddress(e.target.value)}/>
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" value={password}
                  onChange={e => setPassword(e.target.value)}/>
          </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
        
              <p className="forgot-password text-right">
                   Already registered <a href="https://www.facebook.com/melissa.tanksley/">sign in?</a>
              </p>
    </form>
    </div>
  );
}

//function Number() {
  //const [value, setValue] = useState()
  //return (
    //<PhoneInput
      //placeholder="Enter phone number"
      //value={value}
      //onChange={setValue}/>
  


function Register() {
  const [formData, setFormData] = useState({
    username: "",
    phonenumber: "",
    email: "", 
    password: "", 
    first_name: "",
    last_name: "", 
});

const handleSubmit = (e) => {
  e.preventDefault(); 
  console.log(formData);
};

const handleChange = (e) => {
  setFormData({
    ...formData, 
    [e.target.name]: e.target.value
  });
};

return (
  <div className="Register">
    <h1>Form Maker</h1>
    <form onSubmit={(e) => handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange()}
      />
      <input
        type="text"
        name="phonenumber"
        value={formData.phonenumber}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button>Submit</button>
    </form>
  </div>
);
}



export default Signup;

