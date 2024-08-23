import React, { createContext, useState, useContext, useEffect } from 'react';
import * as jwt from 'jwt-decode';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [authToken, setToken] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      const decoded = jwt.jwtDecode(token);
      setDecodedToken(decoded);
      setToken(token);
    }
  }, []);

  const getUserId = () => {
    return decodedToken ? decodedToken.id : null;
  };

  const getRole = () => {
    return decodedToken? decodedToken.role : null;
  };

  const getEmail = () => {
    return decodedToken? decodedToken.email : null;
  };

  const login = (userToken) => {
    const decoded = jwt.jwtDecode(userToken);
    setDecodedToken(decoded);
    setToken(userToken);
    Cookies.set('authToken', userToken);
  };

  const logout = () => {
    setDecodedToken(null);
    setToken(null);
    Cookies.remove('authToken');
  };

  const isAuthenticated = !!authToken;

  return (
    <AuthContext.Provider value={{ isAuthenticated, authToken, getUserId, getEmail, getRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
