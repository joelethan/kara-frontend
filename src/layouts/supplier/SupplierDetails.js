import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  Form,
  Icon,
  Select,
  Table,
} from "semantic-ui-react";
import { supplyOptions } from "../../constants/api";
import updateSupply from "../../context/actions/users/updateSupply";
import { GlobalContext } from "../../context/Provider";

const SupplierDetails = ({ item }) => {
  console.log("item", item);
  const {
    usersDispatch,
    usersState: {
      users: { loadin },
    },
  } = useContext(GlobalContext);

  const [form, setForm] = useState({});
  const [edit, setEdit] = useState(false);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onChangeEdit = () => {
    setEdit(!edit);
  };

  const onUpdate = () => {
    updateSupply({ data: form, Id: item._id })(usersDispatch);
  };

  return (
    <Container>
      <Form>
        <Container>
          <Form.Group widths="equal">
            <Form.Input
              name="nameOfSupplier"
              value={form.nameOfSupplier || item.nameOfSupplier}
              label="Supplier Name"
              fluid
              readOnly={!edit}
              onChange={onChange}
            />
            <Form.Input
              fluid
              name="email"
              label="Email Address"
              readOnly={!edit}
              value={form.email || item.email}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              name="address"
              label="Physical Address"
              readOnly={!edit}
              value={form.address || item.address}
              onChange={onChange}
            />
            <Form.Input
              fluid
              name="contact"
              label="Contact"
              readOnly={!edit}
              value={form.contact || item.contact}
              onChange={onChange}
            />
            {!edit && (
              <Form.Input
                fluid
                name="status"
                placeholder="Supply Status"
                label="Supply Status"
                readOnly={!edit}
                value={form.status || item.status}
              />
            )}
            {edit && (
              <Form.Input
                name="status"
                value={form["status"] || item.status}
                control={Select}
                options={supplyOptions}
                label={{
                  children: "Supply Status",
                  htmlFor: "form-select-control-gender",
                }}
                placeholder="Supply Status"
                search
                searchInput={{ id: "form-select-control-gender" }}
                onChange={onChange}
              />
            )}
          </Form.Group>
          <Form.Group widths="equal">
            {/* <Checkbox
              readOnly={!edit}
              label={<label>Delete Supply Details</label>}
              toggle
            /> */}
          </Form.Group>

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
              {item.supplyDetails.map((_item) => (
                <Table.Row key={_item._id}>
                  <Table.Cell>
                    {item.supplyDetails.indexOf(_item) + 1}
                  </Table.Cell>
                  <Table.Cell>{_item.itemName}</Table.Cell>
                  <Table.Cell>{_item.quantity}</Table.Cell>
                  <Table.Cell>
                    {_item.unitCost ? _item.unitCost.toLocaleString() : 0}
                  </Table.Cell>
                  <Table.Cell>
                    {(_item.quantity * _item.unitCost).toLocaleString()}
                  </Table.Cell>
                </Table.Row>
              ))}
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>Total</Table.Cell>
                <Table.Cell>
                  {item.supplyDetails
                    .map((_item) => _item.quantity * _item.unitCost)
                    .reduce(
                      (accumulator, currentValue) => accumulator + currentValue,
                      0
                    )
                    .toLocaleString()}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          {!edit && (
            <Button
              onClick={onChangeEdit}
              icon
              labelPosition="right"
              floated="right"
              className="ui negative primary button"
              loading={loadin}
              disabled={loadin}
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
              loading={loadin}
              disabled={loadin}
            >
              Save <Icon name="paper plane" />
            </Button>
          )}
          {/* {!edit && (
            <Button
              icon
              labelPosition="right"
              floated="right"
              className="primary"
              onClick={() => {
                console.log("object");
              }}
            >
              Print receipt <Icon name="print" />
            </Button>
          )} */}
        </Container>
      </Form>
    </Container>
  );
};

export default SupplierDetails;
