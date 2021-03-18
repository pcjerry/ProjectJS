import React, { useRef, useState } from "react"
//import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Button, Card, Input, Container, Row, Col, Alert } from "reactstrap";
import { Form } from "react-bootstrap"

import HomeNavbar from "../Navbars/HomeNavbar";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/admin")
    } catch {
      setError("Failed to log in")
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
                  <Link to="/"><h3 className="title mx-auto"><i className="nc-icon nc-minimal-left" /> Sign In</h3></Link>

                  {error && <Alert variant="danger">{error}</Alert>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                      <Form.Label className="text-white">Email</Form.Label>
                      <Form.Control placeholder="Email" type="email"  ref={emailRef} required />
                    </Form.Group>

                    <Form.Group id="password">
                      <Form.Label className="text-white">Password</Form.Label>
                      <Form.Control placeholder="Password" type="password" ref={passwordRef} required />
                    </Form.Group>

                    <Button disabled={loading} block className="btn-round" color="danger" type="submit">
                      Log In
                    </Button>
                  </Form>

                  <div className="forgot">
                    <Link to="/signup">
                      <Button
                          className="btn-link"
                          color="danger"
                      >
                        Need an account? Sign Up
                      </Button>
                    </Link>
                  </div>

                  <div className="forgot">
                    <Link to="/forgot-password">
                    <Button
                        className="btn-link"
                        color="danger"
                    >
                      Forgot password?
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

