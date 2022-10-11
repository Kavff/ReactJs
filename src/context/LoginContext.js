import { createContext, useContext, useState } from "react";
import {signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
const LoginContext = createContext();


export const LoginProvider = ({ children }) => {

  const login = (values) => {
    signInWithEmailAndPassword(auth,values.email,values.pass)
   .then((userValidation) =>{
    const user = userValidation.user;
    setUser({
      user: user.email,
      logged: true
    })
   }).catch((e) => {
    console.log(e.message)
   }) 
  }

  const [user, setUser] = useState({
   user: "",
   logged: false,
   
 }); 

  const logout = () => {
    setUser({
      user: "",
      logged: false,
    });
  }; 
  return (
    <LoginContext.Provider value={{  user,  login , logout  }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

export { LoginContext }

 export const useLoginContext  = () =>{
    return useContext(LoginContext)
}  
