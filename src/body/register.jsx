import React from "react";
import "./register.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Register() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
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

        <button
          onClick={() => {
            navigate("/Dashboard");
          }}
          className="  btn btn-primary w-50 justify-content-center d-flex m-2 p-2  "
        >
          Login
          <link to="/Dashboard"></link>
        </button>
      </form>
    </div>
  );
}

export default Register;
