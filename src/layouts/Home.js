import React from "react";
import { Tab } from "semantic-ui-react";
import DataTable from "./DataTable";

const panes = [
  {
    menuItem: "Sales",
    render: () => (
      <Tab.Pane attached={false}>
        <DataTable title={"Sales"} />
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
  {
    menuItem: "Suppliers",
    render: () => (
      <Tab.Pane attached={false}>
        <DataTable title={"Supplier"} />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Staff",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
  {
    menuItem: "Planner",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];

const HomeComponent = () => <Tab menu={{ pointing: true }} panes={panes} />;

export default HomeComponent;
