import React from "react";
import { Button, Card, Form, Grid, Header, Icon } from "semantic-ui-react";
import { genderOptions } from "../../constants/api";

function Form1({ form, nextStep, onChange, formValid }) {
  const continued = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <Grid centered>
        <Grid.Column
          style={{
            maxWidth: "750px",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Header>Create Item</Header>
          <Card fluid>
            <Card.Content>
              <Form>
                <Form.Group widths={2}>
                  <Form.Input
                    name="firstName"
                    onChange={onChange}
                    label="First name"
                    value={form["firstName"] || ""}
                    placeholder="First name"
                  />
                  <Form.Input
                    name="lastName"
                    onChange={onChange}
                    value={form["lastName"] || ""}
                    label="Last name"
                    placeholder="Last name"
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    name="address"
                    onChange={onChange}
                    value={form["address"] || ""}
                    label="Address"
                    placeholder="Address"
                  />
                  <Form.Input
                    name="email"
                    onChange={onChange}
                    value={form["email"] || ""}
                    label="E-mail"
                    placeholder="E-mail"
                  />
                </Form.Group>

                <Form.Group widths={2}>
                  <Form.Input
                    name="contact"
                    onChange={onChange}
                    value={form["contact"] || ""}
                    label="Contact"
                    placeholder="Contact"
                  />
                  <Form.Select
                    name="gender"
                    onChange={onChange}
                    value={form["gender"] || ""}
                    label="Gender"
                    options={genderOptions}
                    placeholder="Gender"
                  />
                </Form.Group>

                <Button
                  disabled={formValid}
                  floated="right"
                  basic
                  primary
                  color="black"
                  onClick={continued}
                  icon
                  labelPosition="right"
                >
                  Next
                  <Icon name="right arrow" />
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Form1;
