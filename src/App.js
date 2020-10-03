import React, { useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import routes from "./routes";
import hasToken from "./utils/hasToken";
import getUsers from "./context/actions/users/getUsers";
import getSupply from "./context/actions/users/getSupply";
import { GlobalProvider, GlobalContext } from "./context/Provider";
import getMeasurements from "./context/actions/users/getMeasurements";

const RenderRoute = (route) => {
  const history = useHistory();

  if (route.protected && !hasToken()) {
    history.push("/login");
  }

  const { usersDispatch } = useContext(GlobalContext);

  if (hasToken()) {
    useEffect(() => {
      getMeasurements(history)(usersDispatch);
      getUsers(history)(usersDispatch);
      getSupply()(usersDispatch);
    }, []);
  }

  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} />}
      // exact
    ></Route>
  );
};

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RenderRoute {...route} key={index} />
          ))}
          <Route render={() => <Redirect to="/home" />} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
