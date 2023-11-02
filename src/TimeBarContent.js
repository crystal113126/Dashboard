
import React, { createContext, useContext, useState, useEffect } from 'react';

const TimeBarContext = createContext();

export const useTimeBar = () => {
  return useContext(TimeBarContext);
};

export const TimeBarProvider = ({ children }) => {
  const storedIndex = localStorage.getItem('selectedIndex');
  const initalIndex = storedIndex !== null? Number(storedIndex):0;
  const [selectedIndex, setSelectedIndex] = useState(initalIndex);

  const handleMenuItemClick = (event) => {
    const newIndex = event.target.value;
    setSelectedIndex(newIndex);

    // Store the selected index in localStorage
    localStorage.setItem('selectedIndex', newIndex);
  };

  useEffect(() => {
    const storedIndex = localStorage.getItem('selectedIndex');
    if (storedIndex !== null) {
      setSelectedIndex(Number(storedIndex));
    }
  }, []);


  return (
    <TimeBarContext.Provider value={{ selectedIndex, handleMenuItemClick }}>
      {children}
    </TimeBarContext.Provider>
  );
};
