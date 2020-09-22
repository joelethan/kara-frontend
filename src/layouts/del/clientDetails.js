import React, { useContext, useState } from "react";
import { Button, Form, Grid, Header, Segment, Input } from "semantic-ui-react";
import { Container } from "react-bootstrap";
import { GlobalContext } from "../../context/Provider";
import { Link } from "react-router-dom";

function CustomerDetails({ itemId }) {
  const {
    usersState: {
      users: { measurements },
    },
  } = useContext(GlobalContext);

  const [form, setForm] = useState({});

  let user = itemId;
  let measurement = measurements.find((item) => item.clientName === itemId._id);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <Form>
      <Container>
        <Grid columns={3} divided="vertically">
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>
                <Header as="h4" className="ui blue ribbon label">
                  Contact Information
                </Header>
                Customer Name :{" "}
                <Input
                  // style={{ width: "100px" }}
                  size="mini"
                  transparent
                  value={user.firstName + " " + user.lastName}
                />
                <br />
                <br />
                Gender :{" "}
                <Input
                  style={{ width: "50px" }}
                  size="mini"
                  transparent
                  value={user.gender}
                />
                <br />
                <br />
                Address :{" "}
                <Input
                  // style={{ width: "50px" }}
                  size="mini"
                  transparent
                  value={user.address}
                />
                <br />
                <br />
                Email:{" "}
                <Input
                  // style={{ width: "50px" }}
                  size="mini"
                  transparent
                  // read
                  value={user.email}
                />
                <br />
                <br />
                Phone Contact:{" "}
                <Input
                  name="contact"
                  onChange={onChange}
                  style={{ width: "90px" }}
                  size="mini"
                  transparent
                  value={form["contact"] || user.contact}
                />
                <br />
                <br />
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Header as="h4" className="ui blue ribbon label">
                  Top Measurements
                </Header>
                <p>
                  Shoulder:{" "}
                  <Input
                    name="shoulder"
                    onChange={onChange}
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    value={
                      form["shoulder"] === ""
                        ? ""
                        : form["shoulder"] ||
                          (measurement && measurement.shoulder)
                    }
                  />
                </p>
                <p>
                  Upper Bust:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    placeholder="......"
                    transparent
                    name="upperBust"
                    onChange={onChange}
                    value={
                      form["upperBust"] === ""
                        ? ""
                        : form["upperBust"] ||
                          (measurement && measurement.upperBust)
                    }
                  />
                </p>
                <p>
                  Bust or Chest:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    name="bust"
                    onChange={onChange}
                    value={
                      form["bust"] === ""
                        ? ""
                        : form["bust"] || (measurement && measurement.bust)
                    }
                  />
                </p>
                <p>
                  Lower Bust:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    name="lowerBust"
                    onChange={onChange}
                    value={
                      form["lowerBust"] === ""
                        ? ""
                        : form["lowerBust"] ||
                          (measurement && measurement.lowerBust)
                    }
                  />
                </p>
                <p>
                  Waist:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.waist ? measurement.waist : ""
                    // }
                    name="waist"
                    onChange={onChange}
                    value={
                      form["waist"] === ""
                        ? ""
                        : form["waist"] || (measurement && measurement.waist)
                    }
                  />
                </p>
                <p>
                  Lower Waist:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    placeholder="......"
                    transparent
                    // value={
                    //   measurement && measurement.lowerWaist
                    //     ? measurement.lowerWaist
                    //     : ""
                    // }
                    name="lowerWaist"
                    onChange={onChange}
                    value={
                      form["lowerWaist"] === ""
                        ? ""
                        : form["lowerWaist"] ||
                          (measurement && measurement.lowerWaist)
                    }
                  />
                </p>
                <p>
                  Hips:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    placeholder="......"
                    transparent
                    // value={
                    //   measurement && measurement.hips ? measurement.hips : ""
                    // }
                    name="hips"
                    onChange={onChange}
                    value={
                      form["hips"] === ""
                        ? ""
                        : form["hips"] || (measurement && measurement.hips)
                    }
                  />
                </p>
                <p>
                  Shoulder to Upper Bust:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    placeholder="......"
                    transparent
                    // value={
                    //   measurement && measurement.shoulderToUpperBust
                    //     ? measurement.shoulderToUpperBust
                    //     : ""
                    // }
                    name="shoulderToUpperBust"
                    onChange={onChange}
                    value={
                      form["shoulderToUpperBust"] === ""
                        ? ""
                        : form["shoulderToUpperBust"] ||
                          (measurement && measurement.shoulderToUpperBust)
                    }
                  />
                </p>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Header as="h4" className="ui blue ribbon label">
                  Top Measurements Continued...
                </Header>
                <p>
                  Shoulder to Bust:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.shoulderToBust
                    //     ? measurement.shoulderToBust
                    //     : ""
                    // }
                    name="shoulderToBust"
                    onChange={onChange}
                    value={
                      form["shoulderToBust"] === ""
                        ? ""
                        : form["shoulderToBust"] ||
                          (measurement && measurement.shoulderToBust)
                    }
                  />
                </p>
                <p>
                  Shoulder to Lower Bust:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.shoulderToLowerBust
                    //     ? measurement.shoulderToLowerBust
                    //     : ""
                    // }
                    name="shoulderToLowerBust"
                    onChange={onChange}
                    value={
                      form["shoulderToLowerBust"] === ""
                        ? ""
                        : form["shoulderToLowerBust"] ||
                          (measurement && measurement.shoulderToLowerBust)
                    }
                  />
                </p>
                <p>
                  Shoulder to Waist:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.shoulderToWaist
                    //     ? measurement.shoulderToWaist
                    //     : ""
                    // }
                    name="shoulderToWaist"
                    onChange={onChange}
                    value={
                      form["shoulderToWaist"] === ""
                        ? ""
                        : form["shoulderToWaist"] ||
                          (measurement && measurement.shoulderToWaist)
                    }
                  />
                </p>
                <p>
                  Shoulder to Lower Waist:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.shoulderToLowerWaist
                    //     ? measurement.shoulderToLowerWaist
                    //     : ""
                    // }
                    name="shoulderToLowerWaist"
                    onChange={onChange}
                    value={
                      form["shoulderToLowerWaist"] === ""
                        ? ""
                        : form["shoulderToLowerWaist"] ||
                          (measurement && measurement.shoulderToLowerWaist)
                    }
                  />
                </p>
                <p>
                  Shoulder to Hips:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.shoulderToHips
                    //     ? measurement.shoulderToHips
                    //     : ""
                    // }
                    name="shoulderToHips"
                    onChange={onChange}
                    value={
                      form["shoulderToHips"] === ""
                        ? ""
                        : form["shoulderToHips"] ||
                          (measurement && measurement.shoulderToHips)
                    }
                  />
                </p>
                <p>
                  Full Length:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.topFullLength
                    //     ? measurement.topFullLength
                    //     : ""
                    // }
                    name="topFullLength"
                    onChange={onChange}
                    value={
                      form["topFullLength"] === ""
                        ? ""
                        : form["topFullLength"] ||
                          (measurement && measurement.topFullLength)
                    }
                  />
                </p>
                <p>
                  Bodice Cut:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.bodiceCut
                    //     ? measurement.bodiceCut
                    //     : ""
                    // }
                    name="bodiceCut"
                    onChange={onChange}
                    value={
                      form["bodiceCut"] === ""
                        ? ""
                        : form["bodiceCut"] ||
                          (measurement && measurement.bodiceCut)
                    }
                  />
                </p>
                <p>
                  Waist Cut:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.waistCut
                    //     ? measurement.waistCut
                    //     : ""
                    // }
                    name="waistCut"
                    onChange={onChange}
                    value={
                      form["waistCut"] === ""
                        ? ""
                        : form["waistCut"] ||
                          (measurement && measurement.waistCut)
                    }
                  />
                </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row stretched>
            <Grid.Column>
              <Segment>
                <Header as="h4" className="ui blue ribbon label">
                  Sleeves
                </Header>
                <p>
                  Short Sleeve:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    placeholder="......"
                    transparent
                    // value={
                    //   measurement && measurement.shortSleeve
                    //     ? measurement.shortSleeve
                    //     : ""
                    // }
                    name="shortSleeve"
                    onChange={onChange}
                    value={
                      form["shortSleeve"] === ""
                        ? ""
                        : form["shortSleeve"] ||
                          (measurement && measurement.shortSleeve)
                    }
                  />
                </p>
                <p>
                  3/4 Sleeve:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.threeQuarterSleeve
                    //     ? measurement.threeQuarterSleeve
                    //     : ""
                    // }
                    name="threeQuarterSleeve"
                    onChange={onChange}
                    value={
                      form["threeQuarterSleeve"] === ""
                        ? ""
                        : form["threeQuarterSleeve"] ||
                          (measurement && measurement.threeQuarterSleeve)
                    }
                  />
                </p>
                <p>
                  Full Length:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.fullLengthSleeve
                    //     ? measurement.fullLengthSleeve
                    //     : ""
                    // }
                    name="fullLengthSleeve"
                    onChange={onChange}
                    value={
                      form["fullLengthSleeve"] === ""
                        ? ""
                        : form["fullLengthSleeve"] ||
                          (measurement && measurement.fullLengthSleeve)
                    }
                  />
                </p>
                <p>
                  Cap Sleeve:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.capSleeve
                    //     ? measurement.capSleeve
                    //     : ""
                    // }
                    name="capSleeve"
                    onChange={onChange}
                    value={
                      form["capSleeve"] === ""
                        ? ""
                        : form["capSleeve"] ||
                          (measurement && measurement.capSleeve)
                    }
                  />
                </p>
                <p>
                  Width / Circumference:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.circumferenceSleeve
                    //     ? measurement.circumferenceSleeve
                    //     : ""
                    // }
                    name="circumferenceSleeve"
                    onChange={onChange}
                    value={
                      form["circumferenceSleeve"] === ""
                        ? ""
                        : form["circumferenceSleeve"] ||
                          (measurement && measurement.circumferenceSleeve)
                    }
                  />
                </p>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Header as="h4" className="ui blue ribbon label">
                  Trouser Measurements
                </Header>
                <p>
                  Waist:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.trouserWaist
                    //     ? measurement.trouserWaist
                    //     : ""
                    // }
                    name="trouserWaist"
                    onChange={onChange}
                    value={
                      form["trouserWaist"] === ""
                        ? ""
                        : form["trouserWaist"] ||
                          (measurement && measurement.trouserWaist)
                    }
                  />
                </p>
                <p>
                  Hips:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.trouserHips
                    //     ? measurement.trouserHips
                    //     : ""
                    // }
                    name="trouserHips"
                    onChange={onChange}
                    value={
                      form["trouserHips"] === ""
                        ? ""
                        : form["trouserHips"] ||
                          (measurement && measurement.trouserHips)
                    }
                  />
                </p>
                <p>
                  Thigh:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.trouserThigh
                    //     ? measurement.trouserThigh
                    //     : ""
                    // }
                    name="trouserThigh"
                    onChange={onChange}
                    value={
                      form["trouserThigh"] === ""
                        ? ""
                        : form["trouserThigh"] ||
                          (measurement && measurement.trouserThigh)
                    }
                  />
                </p>
                <p>
                  Fly:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.trouserFly
                    //     ? measurement.trouserFly
                    //     : ""
                    // }
                    name="trouserFly"
                    onChange={onChange}
                    value={
                      form["trouserFly"] === ""
                        ? ""
                        : form["trouserFly"] ||
                          (measurement && measurement.trouserFly)
                    }
                  />
                </p>
                <p>
                  Length:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.trouserLength
                    //     ? measurement.trouserLength
                    //     : ""
                    // }
                    name="trouserLength"
                    onChange={onChange}
                    value={
                      form["trouserLength"] === ""
                        ? ""
                        : form["trouserLength"] ||
                          (measurement && measurement.trouserLength)
                    }
                  />
                </p>
                <p>
                  Bottom/Ankle/Width:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.trouserBottomWidth
                    //     ? measurement.trouserBottomWidth
                    //     : ""
                    // }
                    name="trouserBottomWidth"
                    onChange={onChange}
                    value={
                      form["trouserBottomWidth"] === ""
                        ? ""
                        : form["trouserBottomWidth"] ||
                          (measurement && measurement.trouserBottomWidth)
                    }
                  />
                </p>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Header as="h4" className="ui blue ribbon label">
                  Dress Measurements
                </Header>
                <p>
                  Full Length:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.longDressFull
                    //     ? measurement.longDressFull
                    //     : ""
                    // }
                    name="longDressFull"
                    onChange={onChange}
                    value={
                      form["longDressFull"] === ""
                        ? ""
                        : form["longDressFull"] ||
                          (measurement && measurement.longDressFull)
                    }
                  />
                </p>
                <p>
                  Short Length:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.shortDressFull
                    //     ? measurement.shortDressFull
                    //     : ""
                    // }
                    name="shortDressFull"
                    onChange={onChange}
                    value={
                      form["shortDressFull"] === ""
                        ? ""
                        : form["shortDressFull"] ||
                          (measurement && measurement.shortDressFull)
                    }
                  />
                </p>
                <p>
                  Width / Circumference:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.circumferenceDress
                    //     ? measurement.circumferenceDress
                    //     : ""
                    // }
                    name="circumferenceDress"
                    onChange={onChange}
                    value={
                      form["circumferenceDress"] === ""
                        ? ""
                        : form["circumferenceDress"] ||
                          (measurement && measurement.circumferenceDress)
                    }
                  />
                </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>
                <Header as="h4" className="ui blue ribbon label">
                  Skirt
                </Header>
                <p>
                  Full Length:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.longSkirtFull
                    //     ? measurement.longSkirtFull
                    //     : ""
                    // }
                    name="longSkirtFull"
                    onChange={onChange}
                    value={
                      form["longSkirtFull"] === ""
                        ? ""
                        : form["longSkirtFull"] ||
                          (measurement && measurement.longSkirtFull)
                    }
                  />
                </p>
                <p>
                  Short Length:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.shortSkirtFull
                    //     ? measurement.shortSkirtFull
                    //     : ""
                    // }
                    name="shortSkirtFull"
                    onChange={onChange}
                    value={
                      form["shortSkirtFull"] === ""
                        ? ""
                        : form["shortSkirtFull"] ||
                          (measurement && measurement.shortSkirtFull)
                    }
                  />
                </p>
                <p>
                  Length of Slit:{" "}
                  <Input
                    style={{ width: "50px" }}
                    size="mini"
                    transparent
                    placeholder="......"
                    // value={
                    //   measurement && measurement.skirtSlitLength
                    //     ? measurement.skirtSlitLength
                    //     : ""
                    // }
                    name="skirtSlitLength"
                    onChange={onChange}
                    value={
                      form["skirtSlitLength"] === ""
                        ? ""
                        : form["skirtSlitLength"] ||
                          (measurement && measurement.skirtSlitLength)
                    }
                  />
                </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Button
        primary
        floated="right"
        style={{ marginBottom: "1rem" }}
        content="Save"
        icon="save"
        labelPosition="right"
      />

      <Button
        primary
        floated="right"
        content="Edit"
        icon="edit"
        style={{ marginBottom: "1rem" }}
        labelPosition="right"
      />

      <Button
        as={Link}
        to={"/inventory/?order=true&itemId=" + itemId._id.toString()}
        positive
        floated="right"
        content="Order"
        icon="edit"
        style={{ marginBottom: "1rem" }}
        labelPosition="right"
      />
    </Form>
  );
}

export default CustomerDetails;
