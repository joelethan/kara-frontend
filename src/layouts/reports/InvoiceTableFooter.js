import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 24,
    fontSize: 12,
    fontStyle: "bold",
  },
  description: {
    width: "85%",
    textAlign: "right",
    paddingRight: 8,
  },
  total: {
    width: "15%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const InvoiceTableFooter = ({ invoice }) => {
  console.log("invoice", invoice);
  const total = invoice.items
    .map((order) => order.quantity * order.unitCost)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // const balance = total - cleared > 0 ? total - cleared : 0;
  const balance = total - invoice.cleared;

  return invoice.type === "Receipt" ? (
    <>
      <View style={styles.row}>
        <Text style={styles.description}>TOTAL</Text>
        <Text style={styles.total}>{total.toLocaleString()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Amount Received</Text>
        <Text style={styles.total}>{invoice.cleared.toLocaleString()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Balance</Text>
        <Text style={styles.total}>{balance.toLocaleString()}</Text>
      </View>
    </>
  ) : (
    <>
      <View style={styles.row}>
        <Text style={styles.description}>Subtotal</Text>
        <Text style={styles.total}>{total.toLocaleString()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Amount Cleared</Text>
        <Text style={styles.total}>{invoice.cleared.toLocaleString()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>Balance Due</Text>
        <Text style={styles.total}>{balance.toLocaleString()}</Text>
      </View>
    </>
  );
};

export default InvoiceTableFooter;
