import { createContext } from "react";

export const MainContext = createContext(null);

const MainContextProvider = ({ children, value }) => {
  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
