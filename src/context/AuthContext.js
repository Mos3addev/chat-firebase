import jwtDecode from "jwt-decode";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setToken(token);
      setUser(jwtDecode(token));
    }
  }, []);

  useEffect(() => {
    if (token || user) {
      localStorage.setItem("userToken", token);
      localStorage.setItem("user", JSON.stringify(user ?? null));
    } else {
      localStorage.removeItem("userToken");
      localStorage.removeItem("user");
    }
  }, [user, token]);

  return <AuthContext.Provider value={{ user, setUser, token, setToken }}>{children}</AuthContext.Provider>;
};
