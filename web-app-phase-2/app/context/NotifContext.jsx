'use client';
import React, { createContext, useState } from 'react';

export const NotifContext = createContext();

export default function NotifProvider({ children }) {
    const [showNotification, setShowNotification] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success'); // 'success' or 'fail'
  
    const showNotif = (msg, notifType = 'success') => {
      setMessage(msg);
      setType(notifType);
      setShowNotification(true);
  
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    };
  
    return (
      <NotifContext.Provider value={{ showNotif }}>
        {children}
        <div className={`notification ${type} ${showNotification ? 'show' : ''}`}>
          {message}
        </div>
      </NotifContext.Provider>
    );
  }
