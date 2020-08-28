import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/Provider";
import { useHistory } from "react-router-dom";
import getUsers from "../context/actions/users/getUsers";
import UserListUI from "../layouts/UserListUI";

function usersContainer() {
  const { usersDispatch, usersState } = useContext(GlobalContext);

  const history = useHistory();

  useEffect(() => {
    getUsers(history)(usersDispatch);
  }, []);
  return <UserListUI state={usersState} />;
}

export default usersContainer;
