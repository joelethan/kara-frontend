import { statusOptions } from "../../constants/api";
import React, { useState, useContext } from "react";
import {
  Container,
  Select,
  Button,
  Table,
  Form,
  Icon,
} from "semantic-ui-react";
import moment from "moment";
import updateOrder from "../../context/actions/users/updateOrder";
import { GlobalContext } from "../../context/Provider";

const OrderDetails = ({ setReceipt, item }) => {
  const { usersDispatch } = useContext(GlobalContext);

  const [form, setForm] = useState({});
  const [edit, setEdit] = useState(false);

  const onChangeEdit = () => setEdit(!edit);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onUpdate = () => {
    updateOrder({ data: form, Id: item._id })(usersDispatch);
  };

  return (
    <Container>
      <Form>
        <Container>
          <Form.Group widths="equal">
            <Form.Input
              value={item.clientName}
              label="Customer Name"
              fluid
              readOnly
            />
            <Form.Input
              fluid
              name="assignedTailor"
              label="Assigned Taylor"
              readOnly={!edit}
              value={form.assignedTailor || item.assignedTailor}
              onChange={onChange}
            />
            <Form.Field
              name="status"
              // disabled
              value={form["status"] || item.status}
              control={Select}
              options={statusOptions}
              label={{
                children: "Order Status",
                htmlFor: "form-select-control-gender",
              }}
              placeholder="Order Status"
              search
              searchInput={{ id: "form-select-control-gender" }}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              type="Date"
              name="orderDate"
              readOnly={!edit}
              fluid
              label="Order Date"
              value={
                form["orderDate"] || moment(item.orderDate).format("YYYY-MM-DD")
              }
              placeholder="Order Date"
              onChange={onChange}
            />
            <Form.Input
              type="Date"
              fluid
              readOnly={!edit}
              name="dueDate"
              label="Expected Delivery Date"
              value={
                form["dueDate"] || moment(item.dueDate).format("YYYY-MM-DD")
              }
              placeholder="Expected Delivery Date"
              onChange={onChange}
            />
          </Form.Group>

          <Table unstackable singleLine size="small">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>SNo</Table.HeaderCell>
                <Table.HeaderCell>Item Name</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Unit Price (Ugx)</Table.HeaderCell>
                <Table.HeaderCell>Total (Ugx)</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {item.orderDetails.map((order) => (
                <Table.Row key={order._id}>
                  <Table.Cell>
                    {item.orderDetails.indexOf(order) + 1}
                  </Table.Cell>
                  <Table.Cell>{order.item}</Table.Cell>
                  <Table.Cell>{order.quantity}</Table.Cell>
                  <Table.Cell>{order.unitCost.toLocaleString()}</Table.Cell>
                  <Table.Cell>
                    {(order.quantity * order.unitCost).toLocaleString()}
                  </Table.Cell>
                </Table.Row>
              ))}
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>Total</Table.Cell>
                <Table.Cell>
                  {item.orderDetails
                    .map((order) => order.quantity * order.unitCost)
                    .reduce(
                      (accumulator, currentValue) => accumulator + currentValue,
                      0
                    )
                    .toLocaleString()}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Form.Group widths="equal">
            <Form.TextArea
              readOnly={!edit}
              label="Order Description"
              rows={5}
              placeholder="Briefly describe the order details"
              name="orderDescription"
              value={item.orderDescription}
            />
          </Form.Group>
          {!edit && (
            <Button
              onClick={onChangeEdit}
              icon
              labelPosition="right"
              floated="right"
              className="ui negative primary button"
            >
              Edit <Icon name="edit" />
            </Button>
          )}
          {edit && (
            <Button
              onClick={() => {
                onUpdate();
                onChangeEdit();
              }}
              icon
              labelPosition="right"
              floated="right"
              className="ui negative primary button"
            >
              Save <Icon name="paper plane" />
            </Button>
          )}
          {!edit && (
            <Button
              icon
              labelPosition="right"
              floated="right"
              className="primary"
              onClick={() => {
                setReceipt();
              }}
            >
              Print receipt <Icon name="print" />
            </Button>
          )}
        </Container>
      </Form>
    </Container>
  );
};

export default OrderDetails;
