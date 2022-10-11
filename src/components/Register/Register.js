import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import { Link } from "react-router-dom";
import './Register.scss'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'


const Register = () => {

  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");
  const [registerNumber,setRegisterNumber] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const registerUser = async () => {
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail,registerPassword,registerNumber)
      alert("user register",user)
    }catch (e){
      console.log(e.message)
    }
  }


  return (
    <div className="mainDivLogin">
      <form onSubmit={handleSubmit} className="formLogin">
        <Input className="inputsLogin" type="email" placeholder="Email" onChange={(e) => {
          setRegisterEmail(e.target.value);
        }} ></Input>

        <Input className="inputsLogin" type="number" placeholder="Phone" 
        onChange={(e) => {
          setRegisterNumber(e.target.value);
        }}></Input>

        <Input className="inputsLogin" type="password" placeholder="Password"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}></Input>

        <div>
          <Button
            className="buttonLogin"
            type="submit"
            variant="contained"
            color="primary"
            onClick={registerUser}
            
          >
            Send
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
