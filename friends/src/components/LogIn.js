import React, { useState } from "react";
import axios from "axios";

const LogIn = (props) => {
  const [credentials, setCredentials] = useState({});

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const login = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};
export default LogIn;
