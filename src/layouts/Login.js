import React from "react";
import logo from "../logo.png";
import { Button, Form, Grid, Image, Segment, Message } from "semantic-ui-react";

const LoginForm = ({
  form: { onChange, form, loginFormValid, onSubmit, loading, error },
}) => {
  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image src={logo} centered />
          <Form size="large">
            <Segment stacked>
              {error && <Message negative content={"Invalid credentials"} />}
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
                style={{ backgroundColor: "rgb(169 143 47)", color: "white" }}
                onClick={onSubmit}
                disabled={!loginFormValid || loading}
                color="teal"
                fluid
                loading={loading}
                size="large"
                type="submit"
              >
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default LoginForm;
