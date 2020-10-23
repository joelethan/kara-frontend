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
import createSupply from "../../context/actions/users/createSupply";
import moment from "moment";

const NewSupplier = ({ close }) => {
  const {
    usersDispatch,
    usersState: {
      users: { loadin },
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = ({ items = [] }) => {
    for (const i of form.supplyDetails) {
      items = [
        ...items,
        {
          itemName: i,
          quantity: form[i + "Qty"],
          unitCost: form[i + "Amount"],
        },
      ];
    }

    let data = {
      supplyDetails: items,
      nameOfSupplier: form.nameOfSupplier,
      email: form.email,
      contact: form.contact,
      address: form.address,
      date: moment(Date.now()).format(),
    };
    createSupply({ data, close })(usersDispatch);
    // close();
  };

  let formValid = !(
    form.nameOfSupplier &&
    form.email &&
    form.address &&
    form.contact &&
    form.supplyDetails
  );

  const onConfirm = () => {
    let totalList = [];

    for (const i of form.supplyDetails) {
      totalList.push(form[i + "Qty"] * form[i + "Amount"]);

      document.getElementById("setSum").innerHTML = totalList
        .reduce((a, b) => a + b, 0)
        .toLocaleString();
    }
  };

  let showItem = form["supplyDetails"] ? !!form["supplyDetails"].length : false;

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
                    name="nameOfSupplier"
                    onChange={onChange}
                    label="Supplier Name"
                    value={form["nameOfSupplier"] || ""}
                    placeholder="Supplier Name"
                  />
                  <Form.Input
                    name="email"
                    onChange={onChange}
                    value={form["email"] || ""}
                    label="E-mail"
                    placeholder="E-mail"
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    name="address"
                    onChange={onChange}
                    value={form["address"] || ""}
                    label="Address"
                    placeholder="Address"
                  />
                  <Form.Input
                    name="contact"
                    onChange={onChange}
                    value={form["contact"] || ""}
                    label="Contact"
                    placeholder="Contact"
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Dropdown
                    label="Supply Items"
                    placeholder="Supply Items"
                    search
                    multiple
                    selection
                    options={orderOptions}
                    name="supplyDetails"
                    value={form["supplyDetails"] || []}
                    onChange={onChange}
                  />
                </Form.Group>

                {showItem && (
                  <>
                    <Header>Supply Item</Header>
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
                        {form.supplyDetails.map((item) => (
                          <Table.Row key={item}>
                            <Table.Cell>
                              {form.supplyDetails.indexOf(item) + 1}
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
                  </>
                )}
                <Button
                  disabled={formValid || loadin}
                  floated="right"
                  basic
                  primary
                  color="black"
                  onClick={onSubmit}
                  loading={loadin}
                  icon
                  labelPosition="right"
                >
                  Submit
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

export default NewSupplier;
