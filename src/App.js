import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import routes from "./routes";
import { GlobalProvider } from "./context/Provider";
import hasToken from "./utils/hasToken";

const RenderRoute = (route) => {
  const history = useHistory();

  if (route.protected && !hasToken()) {
    history.push("/login");
  }
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} />}
      exact
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
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
