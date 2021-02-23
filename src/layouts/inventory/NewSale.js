import React, { useState, useContext } from "react";
import {
  Button,
  Grid,
  Header,
  Card,
  Form,
  Icon,
  Table,
  Input,
} from "semantic-ui-react";
import { GlobalContext } from "../../context/Provider";
import { orderOptions } from "../../constants/api";
import createSale from "../../context/actions/users/createSale";
import moment from "moment";

const NewSale = ({ close }) => {
  const {
    usersDispatch,
    usersState: {
      orders: { loading },
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = ({ items = [] }) => {
    for (const i of form.orderDetails) {
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
      clientName: form.clientName,
      assignedTailor: form.assignedTailor,
      amountCleared: form.amountReceived,
      // contact: form.contact,
      // address: form.address,
      dueDate: moment(Date.now()).format(),
      orderDate: moment(Date.now()).format(),
      status: "Completed",
    };

    createSale({ data, close })(usersDispatch);
  };

  let formValid = !(form.clientName && form.orderDetails);

  const onConfirm = () => {
    let totalList = [];

    for (const i of form.orderDetails) {
      totalList.push(form[i + "Qty"] * form[i + "Amount"]);

      setTotalAmount(totalList.reduce((a, b) => a + b, 0));
    }
  };

  let showItem = form["orderDetails"] ? !!form["orderDetails"].length : false;

  return (
    <div>
      <Grid centered>
        <Grid.Column
          style={{
            maxWidth: "750px",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Card fluid>
            <Card.Content>
              <Form>
                <Form.Group widths={2}>
                  <Form.Input
                    name="clientName"
                    onChange={onChange}
                    label="Client Name"
                    value={form["clientName"] || ""}
                    placeholder="Client Name"
                  />
                  <Form.Input
                    name="assignedTailor"
                    onChange={onChange}
                    value={form["assignedTailor"] || ""}
                    label="Assigned Tailor"
                    placeholder="Assigned Tailor"
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
                    name="orderDetails"
                    value={form["orderDetails"] || []}
                    onChange={onChange}
                  />
                </Form.Group>

                {showItem && (
                  <>
                    <Header>Order Item</Header>
                    <Table unstackable singleLine color="brown" size="small">
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
                        {form.orderDetails.map((item) => (
                          <Table.Row key={item}>
                            <Table.Cell>
                              {form.orderDetails.indexOf(item) + 1}
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
                            {totalAmount.toLocaleString()}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell></Table.Cell>
                          <Table.Cell>Amount Received</Table.Cell>
                          <Table.Cell>
                            <Input
                              style={{ backgroundColor: "#e5dada" }}
                              name={"amountReceived"}
                              type="number"
                              onChange={onChange}
                              value={
                                form["amountReceived"]
                                  ? form["amountReceived"]
                                  : ""
                              }
                              transparent
                            />
                          </Table.Cell>
                          <Table.Cell>
                            <Button size="tiny" primary floated="left" basic>
                              Bal
                            </Button>
                          </Table.Cell>
                          <Table.Cell>
                            {(
                              form["amountReceived"] - totalAmount
                            ).toLocaleString()}
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </>
                )}
                <Button
                  disabled={formValid || loading}
                  floated="right"
                  basic
                  primary
                  color="black"
                  onClick={onSubmit}
                  loading={loading}
                  icon
                  labelPosition="right"
                >
                  Create
                  <Icon name="paper plane" />
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default NewSale;
