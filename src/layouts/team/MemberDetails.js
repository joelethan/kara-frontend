import React, { useState } from "react";
import {
  Button,
  GridColumn,
  Container,
  Segment,
  Grid,
  Label,
  Checkbox,
  Input,
  Form,
} from "semantic-ui-react";
import { primaryColor } from "../../constants/api";

const MemberDetails = ({ close, staff, id }) => {
  const item = staff.find((item) => item._id === id);

  const [edit, setEdit] = useState(true);
  const [form, setForm] = useState({});
  const [checked, setChecked] = useState(item.active);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const handleClick = () => {
    setChecked(!checked);
    setForm({ ...form, status: checked });
  };

  let userStatus = checked ? "User is Active" : "User is In-Active";

  const onSubmit = () => {
    console.log("form", form);
  };

  return (
    <Container>
      <Grid columns={2}>
        <GridColumn>
          <Segment>
            <Label
              style={{ marginBottom: "1rem", backgroundColor: primaryColor }}
              ribbon
            >
              Bio Information
            </Label>
            <p>
              Name : {item.firstName} {item.lastName}
            </p>
            <p>Gender : {item.gender} </p>
            <p>Role : {item.role} </p>
          </Segment>
          <Segment>
            <Label
              style={{ marginBottom: "1rem", backgroundColor: primaryColor }}
              ribbon
            >
              Contact Details
            </Label>

            <Form>
              <Form.Field inline>
                <label>Email</label>
                <Input
                  transparent={edit}
                  readOnly={edit}
                  size="mini"
                  placeholder="Email"
                  name="email"
                  value={form["email"] || item.email}
                  onChange={onChange}
                />
              </Form.Field>
              <Form.Field inline>
                <label>Phone</label>
                <Input
                  transparent={edit}
                  readOnly={edit}
                  size="mini"
                  placeholder="Phone"
                  name="contact"
                  value={form["contact"] || item.contact}
                  onChange={onChange}
                />
              </Form.Field>
              <Form.Field inline>
                <label>Address</label>
                <Input
                  transparent={edit}
                  readOnly={edit}
                  size="mini"
                  placeholder="Address"
                  name="address"
                  value={form["address"] || item.address}
                  onChange={onChange}
                />
              </Form.Field>
            </Form>
          </Segment>
        </GridColumn>

        <GridColumn>
          <Segment>
            <Label
              style={{ marginBottom: "1rem", backgroundColor: primaryColor }}
              ribbon
            >
              Member Status
            </Label>
            <br />
            <Checkbox
              name="status"
              checked={checked}
              style={{
                transform: "scale(0.8)",
              }}
              label={userStatus}
              onClick={handleClick}
              toggle
              disabled={edit}
            />
          </Segment>
          <Segment>
            <Label
              style={{ marginBottom: "1rem", backgroundColor: primaryColor }}
              ribbon
            >
              Next of Kin
            </Label>

            <Form>
              <Form.Field inline>
                <label>Name</label>
                <Input
                  transparent={edit}
                  readOnly={edit}
                  size="mini"
                  placeholder="Name"
                  name="nextOfKinName"
                  value={form["nextOfKinName"] || item.nextOfKinName}
                  onChange={onChange}
                />
              </Form.Field>
              <Form.Field inline>
                <label>Phone</label>
                <Input
                  transparent={edit}
                  readOnly={edit}
                  size="mini"
                  placeholder="Phone"
                  name="nextOfKinContact"
                  value={form["nextOfKinContact"] || item.nextOfKinContact}
                  onChange={onChange}
                />
              </Form.Field>
              <Form.Field inline>
                <label>Address</label>
                <Input
                  transparent={edit}
                  readOnly={edit}
                  size="mini"
                  placeholder="Address"
                  name="nextOfKinAddress"
                  value={form["nextOfKinAddress"] || item.nextOfKinAddress}
                  onChange={onChange}
                />
              </Form.Field>
              <Form.Field inline>
                <label>Relationship</label>
                <Input
                  transparent={edit}
                  readOnly={edit}
                  size="mini"
                  placeholder="Relationship"
                  name="nextOfKinRelation"
                  value={form["nextOfKinRelation"] || item.nextOfKinRelation}
                  onChange={onChange}
                />
              </Form.Field>
            </Form>
          </Segment>
        </GridColumn>
      </Grid>
      {edit && (
        <Button
          floated="right"
          className="ui positive primary button"
          content="Edit"
          style={{ marginBottom: "1rem" }}
          onClick={toggleEdit}
        />
      )}
      {!edit && (
        <Button
          floated="right"
          className="ui primary button"
          style={{ marginBottom: "1rem" }}
          content="Save"
          onClick={() => {
            toggleEdit();
            onSubmit();
          }}
        />
      )}
      <Button
        floated="right"
        className="ui red button"
        style={{ marginBottom: "1rem" }}
        content="Cancel"
        onClick={close}
      />
    </Container>
  );
};

export default MemberDetails;
