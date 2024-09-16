import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import * as jwt from 'jwt-decode';
import { googleLogout } from '@react-oauth/google';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [authToken, setToken] = useState('');
  const [decodedToken, setDecodedToken] = useState('');

  const token = Cookies.get('authToken');
  // if (token) {
  //   const decodedEffectToken = jwt.jwtDecode(token);
  //   setDecodedToken(decodedEffectToken);
  //   setToken(token);
  // }

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      const decodedEffectToken = jwt.jwtDecode(token);
      setDecodedToken(decodedEffectToken);
      setToken(token);
    }
  }, [token]);

  const getUserId = () => {
    // return decodedToken ? decodedToken.id : null;
    const token = Cookies.get('authToken');
    if(token){
      const decoded = jwt.jwtDecode(token);
      
      return decoded.id
      
    } else{
      return null
    }
  };

  const getRole = () => {
    // return decodedToken? decodedToken.role : null;
    const token = Cookies.get('authToken');
    if(token){
      const decoded = jwt.jwtDecode(token);
      return decoded.role
    } else{
      return null
    }
  };

  const getName = () => {
    // return decodedToken? decodedToken.role : null;
    const token = Cookies.get('authToken');
    if(token){
      const decoded = jwt.jwtDecode(token);
      return decoded.name
    } else{
      return null
    }
  };

  const getEmail = () => {
    // return decodedToken? decodedToken.email : null;
    const token = Cookies.get('authToken');
    if(token){
      const decoded = jwt.jwtDecode(token);
      return decoded.email
    } else{
      return null
    }
  };

  const getUser = ()=>{
    // return decodedToken ? {email:decodedToken.email, name:decodedToken.name, role:decodedToken.role ,id:decodedToken.id} : null;
    const token = Cookies.get('authToken');
    if(token){
      const decoded = jwt.jwtDecode(token);       
      return {email:decoded.email, name:decoded.name, role:decoded.role ,id:decoded.id}
    } else{
      return null
    }
  }

  const login = (userToken) => {
    const decoded = jwt.jwtDecode(userToken);
    setDecodedToken(decoded);
    setToken(userToken);
    Cookies.set('authToken', userToken);
  };

  const logout = () => {
    setDecodedToken(null);
    setToken(null);
    googleLogout();
    Cookies.remove('authToken');
  };

  const isAuthenticated = !!authToken;

  return (
    <AuthContext.Provider value={{ isAuthenticated, authToken, getUser, getUserId, getEmail, getRole, getName, login, logout }}>
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
