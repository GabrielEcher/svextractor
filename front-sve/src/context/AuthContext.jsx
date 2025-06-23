import { createContext, useContext, useEffect, useState } from "react";
import { api_auth } from "../services/api";
import { Navigate } from "react-router-dom";
import { DataContext } from "./DataContext";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [apiStatus, setApiStatus] = useState(null);
  const [user, setUser] = useState(false);
  const { setData } = useContext(DataContext)

  useEffect(() => {
    const loadingStoreData = () => {
      const token = localStorage.getItem('access_token')
      const expireTimeStored = localStorage.getItem('expireTime');

      if (expireTimeStored) {
            const expireTime = new Date(expireTimeStored);
            const currentTime = new Date();
      
            if (currentTime > expireTime) {
              localStorage.clear();
              window.location.href = '/';
            } else if (token) { 
              setUser(true); 
            }
          }
    };
    loadingStoreData();
  }, [apiStatus]);

  const signIn = async ({ username, password }) => {
    try {
      const result = await api_auth.post("/token", { username, password }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      localStorage.setItem('access_token', `Bearer ${result.data.access_token}`)
      localStorage.setItem('access_id', result.data.codvend)
      const expireTime = new Date();
      expireTime.setDate(expireTime.getDate() + 1);
      localStorage.setItem('expireTime', expireTime.toString());
      setApiStatus(200);
      setUser(true);
      

    } catch (err) {
      setApiStatus(err.response.status);

      if (err.response) {
        setApiStatus(err.response.data.detail)
      }

    }
  };

  const signOut = () => {
    localStorage.clear();
    window.location.reload();
    setData([])
    setUser(null);
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
