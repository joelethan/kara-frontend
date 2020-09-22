import React, { useContext } from "react";
import logo from "../logo.svg";
import { Menu, Button, Icon, Image } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import logout from "../context/actions/logout";
import { GlobalContext } from "../context/Provider";

function Navbar() {
  const history = useHistory();

  const { usersDispatch: dispatch } = useContext(GlobalContext);

  const handleLogout = () => {
    logout(history)(dispatch);
    history.push("/login");
  };

  // #b51218, #c8b56f
  return (
    <Menu secondary pointing>
      <Image src={logo} size="mini" />
      <Menu.Item>
        <Button as={Link} to="/home" primary basic>
          Kara-Designs
        </Button>
        <Button
          as={Link}
          to="/inventory"
          style={{
            color: "rgb(72 163 230)",
            backgroundColor: "transparent",
            marginLeft: "1rem",
          }}
        >
          Inventory
        </Button>
      </Menu.Item>
      <Menu.Menu position="right">
        {/* <Dropdown basic icon="setting" pointing className="link item">
          <Dropdown.Menu>
            <Dropdown.Header>Settings</Dropdown.Header>
            <Dropdown.Item>Add Admin</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <Menu.Item>
          <Button icon>
            <Icon name="bell outline" />
            <small>23</small>
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button onClick={handleLogout} color="red" basic icon>
            <Icon name="log out" /> Logout
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
