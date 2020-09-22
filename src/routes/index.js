import Page1 from "../layouts/Page1";
import LoginContainer from "../containers/LoginContainer";
import usersContainer from "../containers/usersContainer";
import OrderContainer from "../containers/OrderContainer";
import ReceiptContainer from "../containers/ReceiptContainer";

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
    path: "/users",
    component: usersContainer,
    title: "Users",
    protected: true,
  },
  {
    path: "/inventory",
    component: OrderContainer,
    title: "Users",
    protected: true,
  },
  {
    path: "/re",
    component: ReceiptContainer,
    title: "Users",
    protected: true,
  },
];

export default routes;
