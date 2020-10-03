import React from "react";
import { Tab } from "semantic-ui-react";
import DataTable from "./DataTable";
import Tab3 from "./Tab3";
import SupplierTable from "./supplier/SupplierTable";

const panes = [
  {
    menuItem: "Clients",
    render: () => (
      <Tab.Pane attached={false}>
        <DataTable title={"Sales"} />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Suppliers",
    render: () => (
      <Tab.Pane attached={false}>
        <SupplierTable title={"Supplier"} />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Team",
    render: () => (
      <Tab.Pane attached={false}>
        <Tab3 />
      </Tab.Pane>
    ),
  },
];
const color = "brown";
const HomeComponent = () => (
  <Tab
    menu={{ color, inverted: true, attached: false, tabular: false }}
    panes={panes}
  />
);

export default HomeComponent;
