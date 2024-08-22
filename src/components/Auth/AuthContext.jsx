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

  const getUser = () => {
    return decodedToken ? {"id":decodedToken.id,"email":decodedToken.email} : null;
  };

  const login = (userToken) => {
    const decoded = jwt(userToken);
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
    <AuthContext.Provider value={{ isAuthenticated, getUser, login, logout }}>
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
