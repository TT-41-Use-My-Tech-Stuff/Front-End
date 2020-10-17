import React, { useEffect } from "react";
import { Spinner } from "reactstrap";

const Home = ({ isFetching, requestLogin }) => {
  // Temporary login request until login/signup page is created
  const userRegister = {
    username: "melissa",
    phonenumber: "(123)456-7891",
    email: "melissa@gmail.com",
    password: "abc123",
    first_name: "melissa",
    last_name: "tanksley",
    experience: "some",
    level: "1",
  };

  const userLogin = {
    username: "melissa",
    password: "abc123",
  };

  useEffect(() => {
    requestLogin(userLogin);
  }, []);

  // Will update user if fetching data from backend
  if (isFetching) {
    return <Spinner type="rent" color="success" />;
  }
  return <div>Home</div>;
};

export default Home;
