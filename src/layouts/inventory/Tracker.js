import React, { useContext } from "react";
import { Table } from "semantic-ui-react";
import { GlobalContext } from "../../context/Provider";

const Tracker = ({
  dip_supply = [],
  dip_order = [],
  output1 = [],
  output2 = [],
  output3 = [],
  order1 = [],
  order2 = [],
  order3 = [],
}) => {
  const {
    usersState: {
      users: { supply },
      orders: { data: orders },
    },
  } = useContext(GlobalContext);

  let completedOrders = orders.filter((item) => item.status === "Completed");

  for (const i of completedOrders) {
    dip_order.push(...i.orderDetails);
  }

  for (const i of supply) {
    dip_supply.push(...i.supplyDetails);
  }

  for (const elem of dip_supply) {
    output1 = [...output1, elem.itemName];
    output2 = [...output2, elem.quantity && elem.unitCost ? elem.quantity : 0];
  }

  for (const elem of dip_order) {
    order1 = [...order1, elem.item];
    order2 = [...order2, elem.quantity && elem.unitCost ? -elem.quantity : 0];
  }

  let data = [...output1, ...order1].reduce((a, b, i) => {
    a[b] = a[b]
      ? a[b] + [...output2, ...order2][i]
      : [...output2, ...order2][i];
    return a;
  }, {});

  for (const itm in data) {
    output3.push({ [itm]: data[itm] });
  }

  return (
    <Table unstackable singleLine size="small" color="brown">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>SNo</Table.HeaderCell>
          <Table.HeaderCell>Item Name</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          {/* <Table.HeaderCell>Unit Price (Ugx)</Table.HeaderCell>
          <Table.HeaderCell>Total (Ugx)</Table.HeaderCell> */}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {output3.map((_item, i) => (
          <Table.Row key={_item + i}>
            <Table.Cell>{output3.indexOf(_item) + 1}</Table.Cell>
            <Table.Cell>{Object.keys(data)[i]}</Table.Cell>
            <Table.Cell>{Object.values(data)[i]}</Table.Cell>
            {/* <Table.Cell>{_item.unitCost.toLocaleString()}</Table.Cell>
            <Table.Cell>
              {(_item.quantity * _item.unitCost).toLocaleString()}
            </Table.Cell> */}
          </Table.Row>
        ))}
        {/* <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell>Total</Table.Cell>
          <Table.Cell>
            {output3
              .map((_item) => _item.quantity * _item.unitCost)
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )
              .toLocaleString()}
          </Table.Cell>
        </Table.Row> */}
      </Table.Body>
    </Table>
  );
};

export default Tracker;
