import { createContext, useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const notify = (text) => toast(text, { autoClose: 2000 });

  const login = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then((userValidation) => {
        const user = userValidation.user;
        setUser({
          user: user.email,
          logged: true,
        });
      })
      .catch((e) => {
        console.log(e.message);
        notify(`incorrect email or password`);
      });
  };

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
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
      <ToastContainer />;
    </LoginContext.Provider>
  );
};

export default LoginProvider;

export { LoginContext };

export const useLoginContext = () => {
  return useContext(LoginContext);
};
