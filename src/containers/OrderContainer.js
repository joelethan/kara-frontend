import React from "react";
import Navbar from "../layouts/Navbar";
import OrderHome from "../layouts/inventory/OrderHome";
import { Container } from "semantic-ui-react";

const OrderContainer = () => {
  const params = new URLSearchParams(window.location.search);
  const orderInit = params.get("order");
  const itemId = params.get("itemId");
  return (
    <>
      <Navbar />
      <Container>
        <OrderHome orderInit={orderInit} itemId={itemId} />
      </Container>
    </>
  );
};

export default OrderContainer;
