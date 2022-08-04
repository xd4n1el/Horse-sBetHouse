import { useEffect, useState } from "react";
import React from "react";

const registeredUsers = [
  {
    id: 1,
    email: "teste@teste.com",
    name: "Teste",
    password: "12345teste",
    balance: 1000.0,
  },
  {
    id: 2,
    email: "teste2@teste.com",
    name: "teste2",
    password: "12345",
    balance: 1000.0,
  },
];

const LoginCtx = React.createContext({
  login: (email, password) => {},
  logoff: () => {},
  isLogin: {},
  userData: {},
  setBalance: (value) => {},
  resetError: (param) => {},
});

export const LoginController = (props) => {
  const [loggedIn, setLoggedIn] = useState({
    login: false,
    error: false,
  });

  const [user, setUser] = useState({ name: "", balance: 0 });

  const checkLogin = localStorage.getItem("isLogin");
  const profile = localStorage.getItem("profile");

  useEffect(() => {
    if (checkLogin === "1") {
      setLoggedIn((log) => {
        return { ...log, login: true };
      });
      setUser(JSON.parse(profile));
    }
  }, [checkLogin, profile]);

  const userBetData = (loginEmail) => {
    const profileData = registeredUsers.find(
      (user) => user.email === loginEmail
    );
    setUser(() => {
      return {
        name: profileData.name,
        balance: profileData.balance,
      };
    });

    localStorage.setItem(
      "profile",
      JSON.stringify({
        name: profileData.name,
        balance: profileData.balance,
      })
    );
  };

  const userLogin = (userEmail, userPassword) => {
    if (
      registeredUsers.find((data) => data.email === userEmail) &&
      registeredUsers.find((data) => data.password === userPassword)
    ) {
      setLoggedIn((log) => {
        return { ...log, login: true };
      });
      localStorage.setItem("isLogin", "1");
      userBetData(userEmail);
    } else {
      setLoggedIn((log) => {
        return { ...log, error: true };
      });
    }
    };

  const userLogoff = () => {
    setLoggedIn((log) => {
      return { ...log, login: false };
    });

    localStorage.removeItem("isLogin");
    localStorage.removeItem("profile");
  };

  const updateBalance = (value) => {
    const newAmount = (user.balance += value);

    setUser((userData) => {
      return {
        ...userData,
        balance: newAmount,
      };
    });

    localStorage.setItem(
      "profile",
      JSON.stringify({
        name: user.name,
        balance: newAmount,
      })
    );
  };

  const resetErrorHandler = (param) => {
    setLoggedIn((log) => {
      return {...log, error: param}
    })
  }

  return (
    <LoginCtx.Provider
      value={{
        login: userLogin,
        logoff: userLogoff,
        isLogin: loggedIn,
        userData: user,
        setBalance: updateBalance,
        resetError: resetErrorHandler,
      }}
    >
      {props.children}
    </LoginCtx.Provider>
  );
};

export default LoginCtx;
