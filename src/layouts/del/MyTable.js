import React from "react";
import { Table, Container, Placeholder } from "semantic-ui-react";

function MyTable({
  state: {
    users: { loading, error, data },
  },
}) {
  const onClick = (id) => {
    console.log("onClick", id);
  };

  return (
    <Container>
      {loading ? (
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
      ) : (
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
            {!!data.length &&
              data.reverse().map((element) => (
                <Table.Row
                  onClick={() => onClick(element._id)}
                  key={element._id}
                >
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
      )}
    </Container>
  );
}

export default MyTable;
