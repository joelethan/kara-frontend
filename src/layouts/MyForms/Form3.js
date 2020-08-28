import React from "react";
import { Button, Grid, Header, Card, Form, Icon } from "semantic-ui-react";

function Form3({ nextStep, prevStep, onChange, form }) {
  const continued = (e) => {
    e.preventDefault();
    nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Grid centered>
      <Grid.Column
        style={{
          maxWidth: "750px",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Card fluid>
          <Card.Content>
            <Form>
              <Header>Sleeves</Header>
              <Form.Group widths={3}>
                <Form.Input
                  value={form["shortSleeve"] || ""}
                  name="shortSleeve"
                  onChange={onChange}
                  label="Short Sleeve"
                  placeholder="Short Sleeve"
                />
                <Form.Input
                  value={form["threeQuarterSleeve"] || ""}
                  name="threeQuarterSleeve"
                  onChange={onChange}
                  label="3/4 Sleeve"
                  placeholder="3/4 Sleeve"
                />
                <Form.Input
                  value={form["fullLengthSleeve"] || ""}
                  name="fullLengthSleeve"
                  onChange={onChange}
                  label="Full length"
                  placeholder="Full length"
                />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input
                  value={form["circumferenceSleeve"] || ""}
                  name="circumferenceSleeve"
                  onChange={onChange}
                  label="Width (circumference)"
                  placeholder="Width (circumference)"
                />
              </Form.Group>
              <Header>Dress</Header>
              <Form.Group widths={2}>
                <Form.Input
                  value={form["shortDressFull"] || ""}
                  name="shortDressFull"
                  onChange={onChange}
                  label="Full length(short)"
                  placeholder="Full length(short)"
                />
                <Form.Input
                  value={form["longDressFull"] || ""}
                  name="longDressFull"
                  onChange={onChange}
                  label="Full length (long)"
                  placeholder="Full length (long)"
                />
                <Form.Input
                  value={form["circumferenceDress"] || ""}
                  name="circumferenceDress"
                  onChange={onChange}
                  label="Width (circumference)"
                  placeholder="Width (circumference)"
                />
              </Form.Group>
              <Button
                floated="right"
                basic
                primary
                onClick={continued}
                icon
                labelPosition="right"
              >
                Next
                <Icon name="right arrow" />
              </Button>
              <Button
                floated="right"
                basic
                color="red"
                onClick={back}
                icon
                labelPosition="left"
              >
                Back
                <Icon name="left arrow" />
              </Button>
            </Form>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}
export default Form3;
