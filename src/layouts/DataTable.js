import React from "react";
import { Icon, Table, Button } from "semantic-ui-react";

const DataTable = ({ title }) => (
  <div>
    <Button size="tiny" positive>
      Add {title}
    </Button>
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell> {title} </Table.HeaderCell>
          <Table.HeaderCell>Clients </Table.HeaderCell>
          <Table.HeaderCell>Clients </Table.HeaderCell>
          <Table.HeaderCell colSpan="3">Clients </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name="folder" /> Joel Sabiti
          </Table.Cell>
          <Table.Cell collapsing>
            <Icon name="folder" /> Joel Ethan
          </Table.Cell>
          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            10 hours ago
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default DataTable;
