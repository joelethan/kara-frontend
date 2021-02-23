import moment from "moment";
import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Button, Form, Input, Table } from "semantic-ui-react";
import { orderOptions } from "../../constants/api";
import createOrder from "../../context/actions/users/createOrder";
import { GlobalContext } from "../../context/Provider";

const NewOrder = ({ close, Id }) => {
  const {
    usersDispatch,
    usersState: {
      orders: { loading },
    },
    usersState: {
      users: { data },
    },
  } = useContext(GlobalContext);
  const history = useHistory();

  const item = data.find((item) => item._id === Id);

  const [form, setForm] = useState({});

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = ({ items = [] }) => {
    for (const i of form.orderItems) {
      items = [
        ...items,
        {
          item: i,
          quantity: form[i + "Qty"] && form[i + "Amount"] ? form[i + "Qty"] : 0,
          unitCost:
            form[i + "Qty"] && form[i + "Amount"] ? form[i + "Amount"] : 0,
        },
      ];
    }
    let data = {
      orderDetails: items,
      assignedTailor: form["assignedTailor"],
      orderDescription: form["orderDescription"] || "",
      orderDate: form["orderDate"] || moment(Date.now()).format("YYYY-MM-DD"),
      dueDate:
        form["dueDate"] ||
        moment(Date.now() + 14 * 86400000).format("YYYY-MM-DD"),
    };
    createOrder({ close, history, data, Id })(usersDispatch);
  };

  const onConfirm = () => {
    let totalList = [];

    for (const i of form.orderItems) {
      totalList.push(form[i + "Qty"] * form[i + "Amount"]);

      document.getElementById("setSum").innerHTML = totalList
        .reduce((a, b) => a + b, 0)
        .toLocaleString();
    }
  };

  let customerName = "";
  if (item && item.firstName) {
    customerName = customerName + item.firstName;
  }
  if (item && item.lastName) {
    customerName = customerName + item.lastName;
  }

  let showItem = form["orderItems"] ? !!form["orderItems"].length : false;

  return (
    <>
      <Form>
        <Container>
          <Form.Group widths="equal">
            <Form.Input
              value={customerName}
              label="Customer Name"
              fluid
              readOnly
            />
            <Form.Input
              fluid
              label="Assigned Taylor"
              name="assignedTailor"
              value={form["assignedTailor"] || ""}
              placeholder="Assigned Taylor"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              type="Date"
              name="orderDate"
              value={
                form["orderDate"] || moment(Date.now()).format("YYYY-MM-DD")
              }
              fluid
              label="Order Date"
              placeholder="Order Date"
              onChange={onChange}
            />
            <Form.Input
              type="Date"
              fluid
              name="dueDate"
              value={
                form["dueDate"] ||
                moment(Date.now() + 14 * 86400000).format("YYYY-MM-DD")
              }
              label="Expected Delivery Date"
              placeholder="Expected Delivery Date"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Dropdown
              label="Order Items"
              placeholder="Order Items"
              search
              multiple
              selection
              options={orderOptions}
              name="orderItems"
              value={form["orderItems"] || []}
              onChange={onChange}
            />
          </Form.Group>

          {showItem && (
            <Table unstackable color="brown" singleLine size="small">
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
                {form["orderItems"].map((item) => (
                  <Table.Row key={item}>
                    <Table.Cell>
                      {form["orderItems"].indexOf(item) + 1}
                    </Table.Cell>
                    <Table.Cell>{item}</Table.Cell>
                    <Table.Cell>
                      <Input
                        name={item + "Qty"}
                        type="number"
                        onChange={onChange}
                        value={form[item + "Qty"] || 0}
                        // style={{ width: "50px" }}
                        // size="mini"
                        transparent
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        name={item + "Amount"}
                        type="number"
                        onChange={onChange}
                        value={form[item + "Amount"] || 0}
                        transparent
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        value={
                          (
                            form[item + "Qty"] * form[item + "Amount"]
                          ).toLocaleString() || 0
                        }
                        transparent
                      />
                    </Table.Cell>
                  </Table.Row>
                ))}
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>
                    <Button
                      onClick={onConfirm}
                      size="tiny"
                      primary
                      floated="left"
                      basic
                    >
                      Total Amount
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <div id="setSum"></div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          )}

          <Form.Group widths="equal">
            <Form.TextArea
              label="Order Description"
              rows={5}
              placeholder="Briefly describe the order details"
              name="orderDescription"
              value={form["orderDescription"] || ""}
              onChange={onChange}
            />
          </Form.Group>
          <Button
            onClick={onSubmit}
            loading={loading}
            disabled={
              form.orderItems
                ? !(form["assignedTailor"] && form.orderItems.length) || loading
                : true
            }
            floated="right"
            className="ui negative primary button"
          >
            Add Order
          </Button>
          <Button disabled={true} floated="right">
            Cancel
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default NewOrder;
