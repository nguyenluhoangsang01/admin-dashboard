const { createContext, useState, useContext } = require("react");

const StateContext = createContext();

const initialState = {
  cart: false,
  chat: false,
  notification: false,
  userProfile: false,
};

const initialTheme = {
  currentColor: "#03C9D7",
  currentMode: "light",
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || initialTheme
  );
  const [themeSettings, setThemeSettings] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const setColor = (currentColor) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      currentColor,
    }));

    setThemeSettings((prevThemeSettings) => !prevThemeSettings);

    localStorage.setItem(
      "theme",
      JSON.stringify({
        ...theme,
        currentColor,
      })
    );
  };

  const setMode = (currentMode) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      currentMode,
    }));

    setThemeSettings((prevThemeSettings) => !prevThemeSettings);

    localStorage.setItem(
      "theme",
      JSON.stringify({
        ...theme,
        currentMode,
      })
    );
  };

  const handleClick = (clicked) => {
    setIsClicked((prevInitialState) => ({
      ...prevInitialState,
      [clicked]: !prevInitialState[clicked],
    }));
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        theme,
        setTheme,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings,
        searchBar,
        setSearchBar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
