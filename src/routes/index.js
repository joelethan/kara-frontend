import Page1 from "../layouts/Page1";
import LoginContainer from "../containers/LoginContainer";

const routes = [
  {
    path: "/login",
    component: LoginContainer,
  },
  {
    path: "/",
    component: Page1,
  },
];

export default routes;
