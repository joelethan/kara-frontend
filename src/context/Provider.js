import React, { createContext, useReducer } from "react";
import auth from "./reducers/auth";
import authInitialState from "./initialSate/authInitialState";

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
