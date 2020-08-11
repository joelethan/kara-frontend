import React from "react";
import logo from "../logo.svg";
import { Menu, Dropdown, Button, Icon, Image } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  return (
    <Menu secondary pointing>
      <Image src={logo} size="mini" />
      <Menu.Item>
        <Button primary basic>
          Kara-Designs
        </Button>
      </Menu.Item>
      {pathname === "/" && (
        <Menu.Menu position="right">
          <Dropdown basic icon="setting" pointing className="link item">
            <Dropdown.Menu>
              <Dropdown.Header>Settings</Dropdown.Header>
              <Dropdown.Item>Add Admin</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Button as={Link} to="/login" color="red" basic icon>
              <Icon name="log out" /> Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
      )}
    </Menu>
  );
}

export default Navbar;
