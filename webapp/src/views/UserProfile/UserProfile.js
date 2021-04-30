/*import React, {useState}from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import avatar from "assets/img/faces/ProfileLogo1.PNG";
import {auth, db} from "../../firebase";
import firebase from "firebase";
import {Input, Form} from "reactstrap";
import {useAuth} from "../../contexts/AuthContext";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [license, setLicence] = useState("");
  const [NIN, setNIN] = useState("");
  const [info, setInfo] = useState("");

  const [loader, setLoader] = useState(false);

  //async function handleSubmit() {

  const handleSubmit = (e) => {

    e.preventDefault();
    setLoader(true);

    db.collection("customers")
        .doc(firebase.auth().currentUser.uid)
        .collection("information")
        .add({
          FirstName: firstName,
          LastName: lastName,
          City: city,
          PostalCode: postalCode,
          Country: country,
          License: license,
          NationalInsuranceNumber: NIN,
          Info: info,

        })
        .then(() => {
          setLoader(false);
          alert("Your profile has been updated");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });

    setFirstName("");
    setLastName("");
    setCity("");
    setPostalCode("");
    setCountry("");
    setLicence("");
    setNIN("");
    setInfo("");

  };


  return (
    <div>
      <GridContainer>

        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Update profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>

            <CardBody >
              <Form onSubmit={handleSubmit}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Input
                    labelText="Last Name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />



                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Input
                    labelText="Last Name"
                    id="lastName"
                    formControlProps={{
                      fullWidth: true
                    }}
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Input
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Input
                      labelText="Postal Code"
                      id="postalCode"
                      formControlProps={{
                        fullWidth: true
                      }}
                      type="text"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Input
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Input
                      labelText="Driver license"
                      id="license"
                      formControlProps={{
                        fullWidth: true
                      }}
                      type="text"
                      value={license}
                      onChange={(e) => setLicence(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Input
                      labelText="National Insurance number"
                      id="NIN"
                      formControlProps={{
                        fullWidth: true
                      }}
                      type="text"
                      value={NIN}
                      onChange={(e) => setNIN(e.target.value)}
                  />
                </GridItem>
              </GridContainer>


              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>

                  <Input
                      labelText="Extra information"
                      id="info"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 4
                      }}
                      type="text"
                      value={info}
                      onChange={(e) => setInfo(e.target.value)}
                  />
                </GridItem>
              </GridContainer>

              <Button color="primary" type="submit" >Update Profile</Button>
            </Form>
            </CardBody>
          </Card>
        </GridItem>



        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Get first name from database</h6>
              <h4 className={classes.cardTitle}>Get last name from database</h4>
              <p className={classes.description}>
                Here get the description from database
              </p>

            </CardBody>
          </Card>
        </GridItem>

      </GridContainer>
    </div>
  );
}*/



import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {auth, db} from "../../firebase";
import firebase from "firebase";
import {useAuth} from "../../contexts/AuthContext";

const UserProfile = (props) => {

  const { currentUser }  = useAuth()

  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [license, setLicence] = useState("");
  const [NIN, setNIN] = useState("");
  const [info, setInfo] = useState("");



  const [loader, setLoader] = useState(false);

  //async function handleSubmit() {
    function getEmail() {
        firebase.auth().onAuthStateChanged(function (user) {
            const emailuser = user.email;
        });
    }

  const handleSubmit = (e) => {

    e.preventDefault();
    setLoader(true);

    db.collection("customers")
        .doc(firebase.auth().currentUser.uid)
        .collection("information")

        .add({
          Email: email,
          Tel: tel,
          FirstName: firstName,
          LastName: lastName,
          City: city,
          PostalCode: postalCode,
          Country: country,
          Date: date,
          License: license,
          NationalInsuranceNumber: NIN,
          Info: info,

        })
        .then(() => {
          setLoader(false);
          alert("Your profile has been updated");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });

    setEmail("");
    setTel("");
    setFirstName("");
    setLastName("");
    setCity("");
    setPostalCode("");
    setCountry("");
    setDate("");
    setLicence("");
    setNIN("");
    setInfo("");

  };

  return (
      <Form onSubmit={handleSubmit}>

        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Email" className="text-white">Email</Label>
              <Input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Tel" className="text-white">Tel nr</Label>
              <Input
                  type="text"
                  name="tel"
                  id="Tel"
                  placeholder="Tel"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

          <Row form>
              <Col md={6}>
                  <FormGroup>
                      <Label for="First Name" className="text-white">First Name</Label>
                      <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                      />
                  </FormGroup>
              </Col>
              <Col md={6}>
                  <FormGroup>
                      <Label for="Last Name" className="text-white">Last Name</Label>
                      <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                      />
                  </FormGroup>
              </Col>
          </Row>

          <Row form>
              <Col md={4}>
                  <FormGroup>
                      <Label for="City" className="text-white">City</Label>
                      <Input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="City"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                      />
                  </FormGroup>
              </Col>
              <Col md={4}>
                  <FormGroup>
                      <Label for="Postal Code" className="text-white">Postal Code</Label>
                      <Input
                          type="text"
                          name="postalCode"
                          id="postalCode"
                          placeholder="Postal Code"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                      />
                  </FormGroup>
              </Col>
              <Col md={4}>
                  <FormGroup>
                      <Label for="Country" className="text-white">Country</Label>
                      <Input
                          type="text"
                          name="country"
                          id="country"
                          placeholder="Country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                      />
                  </FormGroup>
              </Col>
          </Row>


          <Row form>
              <Col md={4}>
                  <FormGroup>
                      <Label for="Date" className="text-white">Date of Birth </Label>
                      <Input
                          type="date"
                          name="date"
                          id="Date"
                          placeholder="Date of Birth"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                      />
                  </FormGroup>
              </Col>
              <Col md={4}>
                  <FormGroup>
                      <Label for="License" className="text-white">Driver License</Label>
                      <Input
                          type="text"
                          name="license"
                          id="license"
                          placeholder="Driver Licence"
                          value={license}
                          onChange={(e) => setLicence(e.target.value)}
                      />
                  </FormGroup>
              </Col>
              <Col md={4}>
                  <FormGroup>
                      <Label for="NIN" className="text-white">National Insurance Number</Label>
                      <Input
                          type="text"
                          name="NIN"
                          id="NIN"
                          placeholder="National Insurance Number"
                          value={NIN}
                          onChange={(e) => setNIN(e.target.value)}
                      />
                  </FormGroup>
              </Col>
          </Row>


          <FormGroup>
              <Label for="info" className="text-white">Meer informatie</Label>
              <Input
                  type="textarea"
                  name="info"
                  id="info"
                  placeholder="Meer Informatie"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
              />
          </FormGroup>

        <Button type="submit" color="danger" >Update Profile</Button>
      </Form>
  );
}

export default UserProfile;
