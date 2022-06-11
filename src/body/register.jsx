import React from "react";
import "./register.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <div id="rectangle">
      <form onSubmit={handleSubmit}>
        <label className="user">
          Username
          <input
            id="user"
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>

        <label className="pass">
          Password
          <input
            id="pass"
            type="password"
            name="pass"
            value={inputs.pass || ""}
            onChange={handleChange}
          />
        </label>

        <Button>Login</Button>
      </form>
    </div>
  );
}

export default Register;
