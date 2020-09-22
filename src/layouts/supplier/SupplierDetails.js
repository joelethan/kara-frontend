import React from "react";
import { Grid, Container, Segment, Button, Dropdown } from "semantic-ui-react";
import { statusOptions } from "../../constants/api";

const SupplierDetails = ({ id }) => {
  return (
    <Container>
      <Grid columns={1} divided="vertically">
        {" "}
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <p class="ui blue right ribbon label">Requisition Details</p>
              <p>Item Name : Kitenge Skirt </p>
              <p>Quantity Requested: 10 </p>
              <p>Requested by : Wabomba Kenen </p>
              <p>Request Status: </p>{" "}
              <Dropdown
                placeholder="Select Status"
                selection
                options={statusOptions}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>{" "}
      </Grid>

      <Button color="blue" className="new-action-buttons">
        Save
      </Button>
      <Button color="green" className="new-action-buttons">
        Edit
      </Button>
      <Button color="red" className="new-action-buttons">
        Delete
      </Button>
    </Container>
  );
};

export default SupplierDetails;
