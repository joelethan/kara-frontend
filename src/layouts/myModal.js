import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import MyWizard from "./MyForms/MyWizard";
import { Input, Menu, Button } from "semantic-ui-react";
import createClient from "../context/actions/users/createClient";
import { GlobalContext } from "../context/Provider";
import MyTable from "./del/MyTable";

function ModalExample() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [searchText, setSearchText] = useState("");

  const {
    usersState,
    usersDispatch,
    usersState: {
      addClient: { loading, error },
    },
  } = useContext(GlobalContext);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSearch = (e, { value }) => {
    setSearchText(value.trim().replace(/" "/g, ""));
  };

  const onSubmit = () => {
    form["setShow"] = setShow;
    createClient(form)(usersDispatch);
  };

  let formValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.address &&
    form.contact &&
    form.gender;
  formValid = !formValid;

  return (
    <>
      <Menu secondary>
        <Menu.Item>
          <Button primary onClick={handleShow}>
            New Customer
          </Button>
        </Menu.Item>
        <Menu.Item position="right">
          <Input icon="search" placeholder="Search ..." onChange={onSearch} />
        </Menu.Item>
      </Menu>

      <MyTable searchText={searchText} state={usersState} />

      <Modal size="lg" show={show} onHide={handleClose}>
        {/* <Modal.Header centered closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <MyWizard
          error={error}
          loading={loading}
          formValid={formValid}
          onSubmit={onSubmit}
          onChange={onChange}
          form={form}
          setForm={setForm}
        />
      </Modal>
    </>
  );
}

export default ModalExample;
