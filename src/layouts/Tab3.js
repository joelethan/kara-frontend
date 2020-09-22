import React, { useState, useContext } from "react";
import { Menu, Button, Input } from "semantic-ui-react";
import { GlobalContext } from "../context/Provider";
import TeamTable from "./team/TeamTable";
import NewMember from "./team/NewMember";
import { Modal } from "react-bootstrap";

const Tab3 = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const { usersState } = useContext(GlobalContext);

  return (
    <>
      <Menu secondary>
        <Menu.Item>
          <Button primary onClick={handleShow}>
            New Member
          </Button>
        </Menu.Item>
        <Menu.Item position="right">
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu>

      <TeamTable state={usersState} />

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>New Team Member</Modal.Header>
        <NewMember setShow={setShow} />
      </Modal>
    </>
  );
};

export default Tab3;
