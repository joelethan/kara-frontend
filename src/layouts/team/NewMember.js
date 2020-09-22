import React, { useState, useContext } from "react";
import { Button, Form, Header, Icon } from "semantic-ui-react";
import { Container } from "react-bootstrap";
import { genderOptions, roleOptions } from "../../constants/api";
import addUser from "../../context/actions/users/addUser";
import { GlobalContext } from "../../context/Provider";
import autoPassword from "../../utils/autoGenPass";

function NewMember({ setShow }) {
  const {
    usersDispatch,
    usersState: {
      addUser: { loading, error },
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    if (form.role !== "admin") {
      form["password"] = form["password2"] = autoPassword;
    }
    form["setShow"] = setShow;
    addUser(form)(usersDispatch);
  };
  // let passwordValid = true;

  // if (form.role !== "admin") {
  //   passwordValid = form.firstName && form.lastName;
  // } else {
  //   passwordValid = true;
  // }

  let passwordValid =
    form.role === "admin" ? form.password && form.password2 : true;

  let formValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.address &&
    form.contact &&
    form.role &&
    form.nextOfKinName &&
    form.nextOfKinContact &&
    form.nextOfKinAddress &&
    form.nextOfKinRelation &&
    form.gender &&
    passwordValid;
  formValid = !formValid;

  return (
    <Container>
      <Form>
        <Header as="h4">Bio Info</Header>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            error={error ? error.firstName : null}
            name="firstName"
            label="First Name"
            placeholder="First Name"
            onChange={onChange}
          />
          <Form.Input
            fluid
            error={error ? error.lastName : null}
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
            onChange={onChange}
          />
          <Form.Select
            fluid
            error={error ? error.gender : null}
            name="gender"
            label="Gender"
            options={genderOptions}
            onChange={onChange}
            placeholder="Gender"
          />
          <Form.Select
            fluid
            error={error ? error.role : null}
            name="role"
            label="Role"
            options={roleOptions}
            onChange={onChange}
            placeholder="Role"
          />
        </Form.Group>
        {form.role === "admin" && (
          <Form.Group widths="4">
            <Form.Input
              fluid
              error={error ? error.password : null}
              name="password"
              label="Password"
              placeholder="Password"
              value={form.role !== "admin" ? autoPassword : form.password}
              onChange={onChange}
            />
            <Form.Input
              fluid
              error={error ? error.password2 : null}
              value={form.role !== "admin" ? autoPassword : form.password2}
              name="password2"
              label="Confirm Password"
              placeholder="Confirm Password"
              onChange={onChange}
            />
          </Form.Group>
        )}
        <Header as="h4">Contact Details</Header>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            error={error ? error.email : null}
            name="email"
            label="Email"
            placeholder="Email"
            onChange={onChange}
          />
          <Form.Input
            fluid
            error={error ? error.contact : null}
            name="contact"
            onChange={onChange}
            label="Phone Contact"
            placeholder="Phone Contact"
          />
          <Form.Input
            fluid
            error={error ? error.address : null}
            onChange={onChange}
            name="address"
            label="Address"
            placeholder="Address"
          />
        </Form.Group>
        <Header as="h4">Next of Kin</Header>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="nextOfKinName"
            label="Name"
            placeholder="Name"
            onChange={onChange}
          />
          <Form.Input
            fluid
            name="nextOfKinContact"
            onChange={onChange}
            label="Phone Contact"
            placeholder="Phone Contact"
          />
          <Form.Input
            fluid
            name="nextOfKinAddress"
            onChange={onChange}
            label="Address"
            placeholder="Address"
          />
          <Form.Input
            fluid
            name="nextOfKinRelation"
            onChange={onChange}
            label="Relationship"
            placeholder="Relationship"
          />
        </Form.Group>
      </Form>
      <Button
        basic
        color="green"
        floated="right"
        style={{ marginBottom: "1rem" }}
        onClick={onSubmit}
        disabled={formValid || loading}
        loading={loading}
        icon
        labelPosition="right"
      >
        Submit
        <Icon name="paper plane" />
      </Button>
    </Container>
  );
}

export default NewMember;
