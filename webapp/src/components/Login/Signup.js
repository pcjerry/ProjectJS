import React, { useRef, useState } from "react"
//import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Button, Card, Input, Container, Row, Col, Alert } from "reactstrap";
import { Form } from "react-bootstrap"
import {auth, db} from "../../firebase";
import firebase from "firebase/app";

import HomeNavbar from "../Navbars/HomeNavbar";

export default function Signup() {

  const { currentUser }  = useAuth()

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {

      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)

        //Email Error with Stripe
      db.collection("customers")
          .doc(firebase.auth().currentUser.uid)
          .collection("information")
          .add({
            Email: "",
            Tel: "",
            FirstName: "",
            LastName: "",
            City: "",
            PostalCode: "",
            Country: "",
            Date: "",
            License: "",
            NationalInsuranceNumber: "",
            Info: "",
    });

      history.push("/admin")

    } catch {
      setError("Failed to create an account, try another one")
    }

    setLoading(false)
  }

  return (
      <>
        {/*<HomeNavbar />*/}
        <div
            className="page-header"
            style={{
              backgroundImage: "url(" + require("assets/img/Home3.jpg") + ")",
            }}
        >
          <div className="filter" />

          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <Link to="/"><h3 className="title mx-auto"> <i className="nc-icon nc-minimal-left" /> Sign Up</h3></Link>

                  {error && <Alert variant="danger">{error}</Alert>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group id="email" >
                      <Form.Label className="text-white">Email</Form.Label>
                      <Form.Control placeholder="Email" type="email" ref={emailRef} required />
                    </Form.Group>


                    <Form.Group id="password">
                      <Form.Label className="text-white">Password</Form.Label>
                      <Form.Control placeholder="Password" type="password" ref={passwordRef} required />
                    </Form.Group>

                    <Form.Group id="password-confirm">
                      <Form.Label className="text-white">Password Confirmation</Form.Label>
                      <Form.Control  placeholder="Confirm Password" type="password" ref={passwordConfirmRef} required />
                    </Form.Group>

                    <Button disabled={loading} block className="btn-round" color="danger" type="submit">
                      Sign Up
                    </Button>
                  </Form>

                  <div className="forgot">
                    <Link to="/login">
                      <Button
                          className="btn-link"
                          color="danger"
                      >
                        Already have an account? Sign In
                      </Button>
                    </Link>
                  </div>

                </Card>
              </Col>
            </Row>
          </Container>

          <div className="footer register-footer text-center">
            <h6>
              © {new Date().getFullYear()} Car Share
            </h6>
          </div>
        </div>

      </>
  );
}

