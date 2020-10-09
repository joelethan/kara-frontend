import React, { useContext, useEffect } from "react";
import { Menu, Button, Icon } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import logout from "../context/actions/logout";
import { GlobalContext } from "../context/Provider";
import getOrder from "../context/actions/users/getOrder";
import { primaryColor } from "../constants/api";

function Navbar() {
  const history = useHistory();

  const {
    usersDispatch: dispatch,
    usersState: {
      orders: { data },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getOrder()(dispatch);
  }, []);

  let items = [];

  for (const item of data) {
    let diffDays = parseInt(
      (new Date(item.dueDate) - new Date(Date.now())) / (1000 * 60 * 60 * 24),
      10
    );
    if (diffDays <= 2 && diffDays >= 0) {
      items.push(item);
    }
  }

  const handleLogout = () => {
    logout(history)(dispatch);
    history.push("/login");
  };

  // #b51218, #c8b56f
  return (
    <>
      <Menu secondary pointing>
        <Menu.Item>
          <Button
            as={Link}
            to="/home"
            style={{ backgroundColor: primaryColor }}
            // basic
          >
            Kara-Designs
          </Button>
          <Button
            as={Link}
            to="/home"
            style={{
              color: primaryColor,
              backgroundColor: "transparent",
              marginLeft: "1rem",
            }}
          >
            Home
          </Button>
          <Button
            as={Link}
            to="/inventory"
            style={{
              color: primaryColor,
              backgroundColor: "transparent",
              marginLeft: "1rem",
            }}
          >
            Sales
          </Button>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button as={Link} to="/due" icon>
              <Icon name="bell outline" />
              <small>{items.length}</small>
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button onClick={handleLogout} color="red" basic icon>
              <Icon name="log out" /> Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
}

export default Navbar;
