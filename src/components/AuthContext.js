import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState('user');

  const login = (user) => {
    setIsAuthenticated(true);
    setUsuarioLogado(user)
  }

  const logout = () => {
    setIsAuthenticated(false);
    setUsuarioLogado(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}