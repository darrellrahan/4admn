import React, { useContext } from "react";

const GlobalContext = React.createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function AppProvider({ children }) {
  // const initialState = {isActive: false}
  // const [states, dispatch] = useReducer(reducer, initialState)

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}
