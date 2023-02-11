import React, { createContext, useContext, useState, useEffect } from 'react';

// API

// Context
export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const updateFirstName = () => { };

  const updateEmail = () => { };

  const updatePassword = () => { };

  const logout = () => { };

  let value = {
    loading,
    setLoading,
    userName,
    setName,
    email,
    setEmail,
    newPassword,
    setNewPassword,
    updateFirstName,
    updateEmail,
    updatePassword,
    logout,
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};
