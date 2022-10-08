import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const users = [
  {
    email: "abc@abc.com",
    password: "1234",
  },
  {
    email: "lucas@abc.com",
    password: "1234coder",
  },
  {
    email: "lobos@abc.com",
    password: "1234",
  },
];

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: "",
    logged: true,
  });

  const login = (values) => {
    const match = users.find((user) => user.email === values.email);

    if (match) {
      if (match.password === values.pass) {
        setUser({
          user: match.email,
          logged: true,
        });
      } else alert("password incorrect");
    } else alert("email incorrect");
  };

  const logout = () => {
    setUser({
      user: "",
      logged: false,
    });
  };
  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

export { LoginContext }

 export const useLoginContext  = () =>{
    return useContext(LoginContext)
}  
