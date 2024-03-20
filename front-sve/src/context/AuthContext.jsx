import { createContext, useEffect, useState } from "react";
import { api_auth } from "../services/api";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [apiStatus, setApiStatus] = useState(null);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const loadingStoreData = () => {
      const token = localStorage.getItem('Bearer.Token')
      const cookieValue = document.cookie.split('; ').find(row => row.startsWith('ApiStatusContext='))?.split('=')[1];
      
      if (token && cookieValue === '200') {
        setUser(true);
      }
    };
    loadingStoreData();
  }, []);

  const signIn = async ({ username, password }) => {
    try {
      const result = await api_auth.post("/token", { username, password }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      localStorage.setItem('Bearer.Token', result.data.access_token)
      localStorage.setItem('User.ID', result.data.codvend)
      document.cookie = `ApiStatusContext=${result.status}`
      
      setApiStatus(null);
      setUser(true);
      

    } catch (err) {
      setApiStatus(err.response.status);

      if (err.response) {
        setApiStatus(err.response.data.detail)
      }

    }
  };

  const signOut = () => {
    localStorage.clear('Bearer.Token')
    setUser(null);
    document.cookie = `ApiStatusContext=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    return <Navigate to="/" />;
    
  };

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      authenticated: !!user,
      apiStatus,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
