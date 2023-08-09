import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  const greeting = "hello";

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkTheme);
  };
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState("cat");

  return (
    <AppContext.Provider
      value={{
        greeting,
        isDarkTheme,
        toggleDarkTheme,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const GlobalContext = () => useContext(AppContext);
