import React, { useState, useEffect, useMemo } from 'react';

const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://vindev.cx.ua/dashboard');
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const value = useMemo(
    () => ({
      info,
      setInfo,
    }),
    [info, setInfo]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextProvider, AppContext };
