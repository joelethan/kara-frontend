import React, { useState } from "react";
import {
  Button,
  GridColumn,
  Container,
  Segment,
  Grid,
  Label,
  Checkbox,
} from "semantic-ui-react";
import { primaryColor } from "../../constants/api";

const MemberDetails = ({ staff, id }) => {
  const item = staff.find((item) => item._id === id);
  let userStatus = item.active ? "User is Active" : "User is In-Active";
  const [edit] = useState(true);
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
            <p>Email : {item.email} </p>
            <p>Phone : {item.contact} </p>
            <p>Address : {item.address} </p>
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
              checked={item.active}
              style={{
                transform: "scale(0.8)",
              }}
              label={userStatus}
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
            <p>Name : {item.nextOfKinName} </p>
            <p>Phone : {item.nextOfKinContact} </p>
            <p>Address : {item.nextOfKinAddress} </p>
            <p>Relationship : {item.nextOfKinRelation} </p>
          </Segment>
        </GridColumn>
      </Grid>
      <Button
        className="ui positive primary button"
        content="Edit"
        icon="edit"
        style={{ marginBottom: "1rem" }}
        labelPosition="right"
      />
      <Button
        className="ui primary button"
        style={{ marginBottom: "1rem" }}
        content="Save"
        icon="save"
        labelPosition="right"
      />
    </Container>
  );
};

export default MemberDetails;
