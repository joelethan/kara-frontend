import React, { Fragment } from "react";
import Invoice from "../layouts/reports/Invoice";
import { PDFViewer } from "@react-pdf/renderer";
// import { invoice } from "../constants/api";
import { Container } from "semantic-ui-react";

function ReceiptContainer({ details }) {
  return (
    <Container>
      <Fragment>
        <PDFViewer width="750" height="600" className="app">
          <Invoice invoice={details} />
        </PDFViewer>
      </Fragment>
    </Container>
  );
}

export default ReceiptContainer;
