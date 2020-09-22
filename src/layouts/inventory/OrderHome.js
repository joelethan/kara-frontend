import React from "react";
import { Tab } from "semantic-ui-react";
import DataTable from "../DataTable";
import OrderTable from "./OrderTable";

const color = "blue";
const OrderHome = ({ orderInit, itemId }) => (
  <Tab
    menu={{ color, inverted: true, attached: false, tabular: false }}
    panes={[
      {
        menuItem: "Orders",
        render: () => (
          <Tab.Pane attached={false}>
            <OrderTable orderInit={orderInit} Id={itemId} title={"Sales"} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Inventory",
        render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
      },
      {
        menuItem: "Clients",
        render: () => (
          <Tab.Pane attached={false}>
            <DataTable title={"Client"} />
          </Tab.Pane>
        ),
      },
    ]}
  />
);

export default OrderHome;
