import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authDetails, setAuthDetails] = useState({
    isAuthenticated: false,
    token: null,
    email: null,
  });

  function login(token, email) {
    setAuthDetails({
      isAuthenticated: true,
      token: token,
      email: email,
    });
  }
  function logout() {
    setAuthDetails({
      isAuthenticated: false,
      token: null,
      email: null,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        authDetails,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
