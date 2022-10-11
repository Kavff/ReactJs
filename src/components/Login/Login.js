import { Button, Input } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import "./Login.scss";



const Login = () => {

  const { login } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
      setPass(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    
    login({
      email,
      pass,
    });
  };

  return (
    <div className="mainDivLogin">
      <form onSubmit={handleSubmit} className="formLogin">
        <Input
          className="inputsLogin"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        ></Input>
        <Input
          className="inputsLogin"
          type="password"
          placeholder="Password"
          value={pass}
          onChange={handlePassChange}
        ></Input>
        <div>
          <>
            <Button
              className="buttonLogin"
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </>
          <>
            <Link className="linkRegister" to="/Register">
              <Button
                className="linkRegister"
                type="submit"
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </Link>
          </>
        </div>
      </form>
    </div>
  );
};

export default Login;
