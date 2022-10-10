import React from "react";
import { Button, Input } from "@mui/material";
import { Link } from "react-router-dom";
import './Register.scss'

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mainDivLogin">
      <form onSubmit={handleSubmit} className="formLogin">
        <Input className="inputsLogin" type="text" placeholder="Name"></Input>
        <Input
          className="inputsLogin"
          type="text"
          placeholder="Last name"
        ></Input>
        <Input className="inputsLogin" type="email" placeholder="Email"></Input>
        <Input
          className="inputsLogin"
          type="password"
          placeholder="Password"
        ></Input>
        <div>
          <Button
            className="buttonLogin"
            type="submit"
            variant="contained"
            color="primary"
          >
            Send!
          </Button>
          <Link className="linkBack" to="/Login">
            <Button
              className="buttonLogin"
              type="submit"
              variant="contained"
              color="primary"
            >
              Back
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
