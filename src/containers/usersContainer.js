import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/Provider";
import { useHistory } from "react-router-dom";
import getUsers from "../context/actions/users/getUsers";
import UserListUI from "../layouts/UserListUI";
import getMeasurements from "../context/actions/users/getMeasurements";

function usersContainer() {
  const { usersDispatch, usersState } = useContext(GlobalContext);

  const history = useHistory();

  useEffect(() => {
    getMeasurements(history)(usersDispatch);
    getUsers(history)(usersDispatch);
  }, []);
  return <UserListUI state={usersState} />;
}

export default usersContainer;
