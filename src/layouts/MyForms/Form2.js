import React from "react";
import { Button, Grid, Header, Card, Form, Icon } from "semantic-ui-react";

function Form2({ nextStep, prevStep, onChange, form }) {
  const continued = (e) => {
    e.preventDefault();
    nextStep();
  };
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
                <Header>Top/ Shirt</Header>
                <Form.Group widths={4}>
                  <Form.Input
                    value={form["shoulder"] || ""}
                    name="shoulder"
                    onChange={onChange}
                    label="Shoulder"
                    placeholder="Shoulder"
                  />
                  <Form.Input
                    value={form["upperBust"] || ""}
                    name="upperBust"
                    onChange={onChange}
                    label="Upper Bust"
                    placeholder="Upper Bust"
                  />
                  <Form.Input
                    value={form["bust"] || ""}
                    name="bust"
                    onChange={onChange}
                    label="Bust or Chest"
                    placeholder="Bust or Chest"
                  />
                  <Form.Input
                    value={form["lowerBust"] || ""}
                    name="lowerBust"
                    onChange={onChange}
                    label="Lower Bust"
                    placeholder="Lower Bust"
                  />
                </Form.Group>

                <Form.Group widths={4}>
                  <Form.Input
                    value={form["waist"] || ""}
                    name="waist"
                    onChange={onChange}
                    label="Waist"
                    placeholder="Waist"
                  />
                  <Form.Input
                    value={form["lowerWaist"] || ""}
                    name="lowerWaist"
                    onChange={onChange}
                    label="Lower Waist"
                    placeholder="Lower Waist"
                  />
                  <Form.Input
                    value={form["hips"] || ""}
                    name="hips"
                    onChange={onChange}
                    label="Hips"
                    placeholder="Hips"
                  />
                  <Form.Input
                    value={form["shoulderToUpperBust"] || ""}
                    name="shoulderToUpperBust"
                    onChange={onChange}
                    label="Shoulder to Upper Bust"
                    placeholder="Shoulder to Upper Bust"
                  />
                </Form.Group>

                <Form.Group widths={4}>
                  <Form.Input
                    value={form["shoulderToBust"] || ""}
                    name="shoulderToBust"
                    onChange={onChange}
                    label="Shoulder to Bust"
                    placeholder="Shoulder to Bust"
                  />

                  <Form.Input
                    value={form["shoulderToLowerBust"] || ""}
                    name="shoulderToLowerBust"
                    onChange={onChange}
                    label="Shoulder to Lower Bust"
                    placeholder="Shoulder to Lower Bust"
                  />
                  <Form.Input
                    value={form["shoulderToWaist"] || ""}
                    name="shoulderToWaist"
                    onChange={onChange}
                    label="Shoulder to Waist"
                    placeholder="Shoulder to Waist"
                  />
                  <Form.Input
                    value={form["ShoulderToLowerWaist"] || ""}
                    name="ShoulderToLowerWaist"
                    onChange={onChange}
                    label="Shoulder to Lower Waist"
                    placeholder="Shoulder to Lower Waist"
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    value={form["shoulderToHips"] || ""}
                    name="shoulderToHips"
                    onChange={onChange}
                    label="Shoulder to Hips"
                    placeholder="Shoulder to Hips"
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
    </div>
  );
}

export default Form2;
