import React from "react";
import { Button, Form, Grid, Image, Segment, Header } from "semantic-ui-react";
import logo from "../logo.svg";
import Navbar from "./Navbar";

const LoginForm = ({ form: { onChange, form, loginFormValid, onSubmit } }) => {
  return (
    <div>
      <Navbar />
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={logo} /> Login to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                type="email"
                name="email"
                placeholder="E-mail address"
                value={form.email || ""}
                onChange={onChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                value={form.password || ""}
                onChange={onChange}
              />

              <Button
                onClick={onSubmit}
                disabled={!loginFormValid}
                color="teal"
                fluid
                size="large"
              >
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginForm;
