import { createContext, useState } from "react";

export const ToggleContext = createContext();

export const ToggleContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [drawerToggle, setDrawerToggle] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerToggle(!drawerToggle);
  };

  return (
    <ToggleContext.Provider
      value={{
        handleToggle,
        toggle,
        setToggle,
        drawerToggle,
        setDrawerToggle,
        handleDrawerToggle,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};
