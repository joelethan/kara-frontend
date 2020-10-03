import Page1 from "../layouts/Page1";
import LoginContainer from "../containers/LoginContainer";
import OrderContainer from "../containers/OrderContainer";
import OrdersDue from "../layouts/inventory/OrdersDue";

const routes = [
  {
    path: "/login",
    component: LoginContainer,
    title: "Login",
    protected: false,
  },
  {
    path: "/home",
    component: Page1,
    title: "Home",
    protected: true,
  },
  {
    path: "/inventory",
    component: OrderContainer,
    title: "Users",
    protected: true,
  },
  {
    path: "/due",
    component: OrdersDue,
    title: "Users",
    protected: true,
  },
];

export default routes;
