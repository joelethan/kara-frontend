import React from "react";
import { Tab } from "semantic-ui-react";
import OrderTable from "./OrderTable";
import Tracker from "./Tracker";

const color = "brown";
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
        render: () => (
          <Tab.Pane attached={false}>
            <Tracker />
          </Tab.Pane>
        ),
      },
    ]}
  />
);

export default OrderHome;
