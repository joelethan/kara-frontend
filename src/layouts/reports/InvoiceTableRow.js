import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  description: {
    width: "60%",
    textAlign: "left",

    paddingLeft: 8,
  },
  qty: {
    width: "10%",

    textAlign: "right",
    paddingRight: 8,
  },
  rate: {
    width: "15%",

    textAlign: "right",
    paddingRight: 8,
  },
  amount: {
    width: "15%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const InvoiceTableRow = ({ items }) => {
  const rows = items.map((order) => (
    <View style={styles.row} key={order._id}>
      <Text style={styles.description}>{order.item}</Text>
      <Text style={styles.qty}>{order.quantity}</Text>
      <Text style={styles.rate}>{order.unitCost}</Text>
      <Text style={styles.amount}>
        {(order.quantity * order.unitCost).toFixed(2)}
      </Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
