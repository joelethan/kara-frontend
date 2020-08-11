import React from "react";
import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import HomeComponent from "./Home";

function Page1() {
  return (
    <div>
      <Navbar />
      <Container>
        <HomeComponent />
      </Container>
    </div>
  );
}

export default Page1;
