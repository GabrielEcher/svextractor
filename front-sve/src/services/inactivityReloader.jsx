// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function CleanupLocalStorageOnInactivity({ timeout = 1200000 /* 20 minutos em milissegundos */ }) {
  useEffect(() => {
    
    let inactivityTimeout;

    const resetInactivityTimeout = () => {
      if (inactivityTimeout) {
        clearTimeout(inactivityTimeout);
      }

      inactivityTimeout = setTimeout(() => {
        localStorage.clear('access_token')
        window.location.reload();
      }, timeout);
    };

    const handleUserActivity = () => {
      resetInactivityTimeout();
    };

    document.addEventListener("mousemove", handleUserActivity);
    document.addEventListener("click", handleUserActivity);
    document.addEventListener("keydown", handleUserActivity);
    document.addEventListener("drag", handleUserActivity);

    resetInactivityTimeout();

    return () => {
      document.removeEventListener("mousemove", handleUserActivity);
      document.removeEventListener("keydown", handleUserActivity);
      document.addEventListener("click", handleUserActivity);
      document.addEventListener("drag", handleUserActivity);
      clearTimeout(inactivityTimeout);
    };
  }, [timeout]); 
  
  return null;
}

export default CleanupLocalStorageOnInactivity;
