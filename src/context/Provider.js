import React, { createContext, useReducer, useState } from "react";
import auth from "./reducers/auth";
import authInitialState from "./initialSate/authInitialState";
import usersInitialState from "./initialSate/usersInitialState";
import users from "./reducers/users";

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [usersState, usersDispatch] = useReducer(users, usersInitialState);
  const [pdfType, setPdfType] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        usersState,
        usersDispatch,
        pdfType,
        setPdfType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
