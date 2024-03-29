import React, { useRef, useState } from "react"
//import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Button, Card, Input, Container, Row, Col, Alert } from "reactstrap";
import { Form } from "react-bootstrap"

import HomeNavbar from "../Navbars/HomeNavbar";

export default function ForgotPassword() {
  const emailRef = useRef()
  const {resetPassword} = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
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
                  <Link to="/"><h3 className="title mx-auto"><i className="nc-icon nc-minimal-left" /> Forget Password</h3></Link>

                  {error && <Alert variant="danger">{error}</Alert>}
                  {message && <Alert variant="success">{message}</Alert>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                      <Form.Label className="text-white">Email</Form.Label>
                      <Form.Control placeholder="Email" type="email" ref={emailRef} required />
                    </Form.Group>

                    <Button disabled={loading} block className="btn-round" color="danger" type="submit">
                      Reset Password
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





