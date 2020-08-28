import React from "react";
import { Placeholder, Container, Table } from "semantic-ui-react";

function UserListUI({
  state: {
    users: { loading, error, data },
  },
}) {
  return (
    <div>
      {loading ? (
        <Container>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </Container>
      ) : (
        <Container>
          <Table selectable striped unstackable color="blue" size="small">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Customer Name</Table.HeaderCell>
                <Table.HeaderCell>Physical Address</Table.HeaderCell>
                <Table.HeaderCell>Email Address</Table.HeaderCell>
                <Table.HeaderCell>Contact Number</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data.length &&
                data.reverse().map((element) => (
                  <Table.Row key={element._id}>
                    <Table.Cell>
                      {element.firstName} {element.lastName}
                    </Table.Cell>
                    <Table.Cell>{element.address}</Table.Cell>
                    <Table.Cell>{element.email}</Table.Cell>
                    <Table.Cell>{element.contact}</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </Container>
      )}
    </div>
  );
}

export default UserListUI;
