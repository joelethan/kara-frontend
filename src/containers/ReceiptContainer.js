import React, { Fragment, useContext } from "react";
import Invoice from "../layouts/reports/Invoice";
import { PDFViewer } from "@react-pdf/renderer";
// import { invoice } from "../constants/api";
import { Container } from "semantic-ui-react";
import { GlobalContext } from "../context/Provider";

function ReceiptContainer({ details }) {
  const { pdfType } = useContext(GlobalContext);

  let data = { ...details, type: pdfType };
  return (
    <Container>
      <Fragment>
        <PDFViewer width="750" height="600" className="app">
          <Invoice invoice={data} />
        </PDFViewer>
      </Fragment>
    </Container>
  );
}

export default ReceiptContainer;
