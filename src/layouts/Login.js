import React from "react";
import {
  Button,
  Form,
  Grid,
  Image,
  Segment,
  Header,
  Message,
} from "semantic-ui-react";
import logo from "../logo.svg";

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
          <Image src={logo} size="small" centered />
          <Header as="h2" color="teal" textAlign="center">
            Login to your account
          </Header>
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
                value={form.password || "passwordxy"}
                onChange={onChange}
              />

              <Button
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
