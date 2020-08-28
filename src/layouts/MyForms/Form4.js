import React from "react";
import {
  Button,
  Grid,
  Header,
  Card,
  Form,
  Icon,
  Message,
} from "semantic-ui-react";

function Form4({ prevStep, onChange, error, onSubmit, loading, form }) {
  const back = (e) => {
    e.preventDefault();
    prevStep();
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
          <Card fluid>
            <Card.Content>
              <Form>
                <Header>Trousers</Header>
                <Form.Group widths={2}>
                  <Form.Input
                    value={form["trouserThigh"] || ""}
                    name="trouserThigh"
                    onChange={onChange}
                    label="Thigh"
                    placeholder="Thigh"
                  />
                  <Form.Input
                    value={form["trouserFly"] || ""}
                    name="trouserFly"
                    onChange={onChange}
                    label="Fly"
                    placeholder="Fly"
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    value={form["trouserLength"] || ""}
                    name="trouserLength"
                    onChange={onChange}
                    label="Length"
                    placeholder="Length"
                  />
                  <Form.Input
                    value={form["trouserBottomWidth"] || ""}
                    name="trouserBottomWidth"
                    onChange={onChange}
                    label="Bottom/ Width(circumference)"
                    placeholder="Bottom/ Width(circumference)"
                  />
                </Form.Group>
                <Header>Skirt</Header>
                <Form.Group widths={2}>
                  <Form.Input
                    value={form["shortSkirtFull"] || ""}
                    name="shortSkirtFull"
                    onChange={onChange}
                    label="Full length(short)"
                    placeholder="Full length(short)"
                  />
                  <Form.Input
                    value={form["longSkirtFull"] || ""}
                    name="longSkirtFull"
                    onChange={onChange}
                    label="Full length (long)"
                    placeholder="Full length (long)"
                  />
                </Form.Group>
                {error && <Message negative content={error.msg} />}
                <Button
                  color="green"
                  floated="right"
                  onClick={onSubmit}
                  disabled={loading}
                  loading={loading}
                  basic
                  icon
                  labelPosition="right"
                  type="submit"
                >
                  Submit
                  <Icon name="paper plane" />
                </Button>
                <Button
                  floated="right"
                  basic
                  color="red"
                  onClick={back}
                  disabled={loading}
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
    </div>
  );
}

export default Form4;
