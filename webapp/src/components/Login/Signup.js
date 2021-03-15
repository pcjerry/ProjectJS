import React, { useRef, useState } from "react"
//import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Button, Card, Input, Container, Row, Col, Alert } from "reactstrap";
import { Form } from "react-bootstrap"

import HomeNavbar from "../Navbars/HomeNavbar";

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }




  return (
      <>
        {/*<HomeNavbar />*/}
        <div
            className="page-header"
            style={{
              backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
            }}
        >
          <div className="filter" />

          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <Link to="/"><h3 className="title mx-auto">Sign Up</h3></Link>

                  {error && <Alert variant="danger">{error}</Alert>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control placeholder="Email" type="email" ref={emailRef} required />
                    </Form.Group>

                    <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control placeholder="Password" type="password" ref={passwordRef} required />
                    </Form.Group>

                    <Form.Group id="password-confirm">
                      <Form.Label>Password Confirmation</Form.Label>
                      <Form.Control placeholder="Confirm Password" type="password" ref={passwordConfirmRef} required />
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
