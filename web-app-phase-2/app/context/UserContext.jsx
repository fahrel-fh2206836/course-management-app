'use client';
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    // localStorage.setItem('loggedInUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    // localStorage.removeItem('loggedInUser');
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    // localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
