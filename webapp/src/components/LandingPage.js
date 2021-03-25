import React, { useState }from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

import HomeNavbar from "components/Navbars/HomeNavbar.js";
import HomeHeader from "components/Headers/HomeHeader.js";
import HomeFooter from "components/Footers/HomeFooter.js";

function LandingPage() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("ContactForm")
            .add({
                Name: name,
                Email: email,
                Message: message,
                Time: new Date(),
            })
            .then(() => {
                setLoader(false);
                alert("Thank you for your kind feedback!");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <>
            <HomeNavbar/>
            <HomeHeader/>
            <div className="main">
                <div className="section text-center">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="title">Let's talk about Car Share</h2>
                                <h5 className="description">
                                    Car sharing is the process whereby existing car owners make their vehicles available
                                    for others to rent for short periods. Car sharing is a form of person-to-person
                                    lending or collaborative consumption, as part of the sharing economy.
                                </h5>
                                <br/>
                                <h5 className="description">
                                    There are a lot of advantages to car sharing such as reducing the number of vehicles
                                    on the
                                    road, kilometres driven and overall car ownership. Fewer vehicles on the road
                                    reduces congestion and CO2 emissions going into the atmosphere. It also reduces the
                                    need for additional parking – allowing for the greater expansion of green spaces.
                                    Reduced car ownership is a step in the right direction towards helping to protect
                                    the environment.
                                </h5>
                                <br/>

                                <Button
                                    className="btn-round"
                                    color="info"
                                    href="https://www.enterprisecarshare.com/us/en/faq.html"
                                    target="_blank"
                                >
                                    See Details
                                </Button>

                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col md="3">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <i className="nc-icon nc-album-2"/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Beautiful Gallery</h4>
                                        <p className="description">
                                            Check out here our gallery of available cars
                                            and awesome selfies of our customers
                                        </p>
                                        <Button className="btn-link" color="info" href="#">
                                            See more
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <i className="nc-icon nc-bulb-63"/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">New Ideas</h4>
                                        <p>
                                            Help us to get new ideas to improve our services in the future
                                            by filling the contact form below
                                        </p>
                                        <Button className="btn-link" color="info" href="#">
                                            See more
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <i className="nc-icon nc-chart-bar-32"/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Statistics</h4>
                                        <p>
                                            Who doesn't love statistics, we'll be displaying you the real statistic to
                                            tell you more about our services
                                        </p>
                                        <Button className="btn-link" color="info" href="#">
                                            See more
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <i className="nc-icon nc-sun-fog-29"/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Delightful design</h4>
                                        <p>
                                            Our customer services are here to help,
                                            we are here to solve all your questions and problems
                                        </p>
                                        <Button className="btn-link" color="info" href="#">
                                            See more
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-dark text-center">
                    <Container>
                        <h2 className="title">Let's talk about us</h2>
                        <Row>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                src={require("assets/img/faces/jerry.jpg")}
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Jerry Xiong</CardTitle>
                                                <h6 className="card-category">Frontend Developer</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            Industrial engineer in the field of connected systems,
                                            who has designed and programmed the frontend of the website,
                                            specialised in Reactjs and connection with the databases.

                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-just-icon btn-neutral"
                                            color="link"
                                            href="https://twitter.com/home"
                                        >
                                            <i className="fa fa-twitter"/>
                                        </Button>
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="link"
                                            href="#https://www.google.com/"
                                        >
                                            <i className="fa fa-google-plus"/>
                                        </Button>
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="link"
                                            href="#https://github.com/pcjerry/ProjectJS"
                                        >
                                            <i className="fa fa-github" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                src={require("assets/img/faces/arne.jpg")}
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Arne Hellin</CardTitle>
                                                <h6 className="card-category">Backend developer</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            Industrial engineer in the field of software engineering,
                                            focuses on the backend of the website
                                            as setting up different databases,
                                            specialised in Springboot, MYSQL.
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-just-icon btn-neutral"
                                            color="link"
                                            href="https://twitter.com/ArneHellin"
                                        >
                                            <i className="fa fa-twitter"/>
                                        </Button>
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="link"
                                            href="#https://www.google.com/"
                                        >
                                            <i className="fa fa-google-plus"/>
                                        </Button>
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="link"
                                            href="https://github.com/pcjerry/ProjectJS"
                                        >
                                            <i className="fa fa-github" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                src={require("assets/img/faces/niels.jpg")}
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Niels Van Landschoot</CardTitle>
                                                <h6 className="card-category">Android App Developer</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            Industrial engineer in the field of software engineering,
                                            focuses on the android application
                                            both the frontend and the backend,
                                            specialised in Android Studio.
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-just-icon btn-neutral"
                                            color="link"
                                            href="#https://twitter.com/home"
                                        >
                                            <i className="fa fa-twitter"/>
                                        </Button>
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="link"
                                            href="#https://www.google.com/"
                                        >
                                            <i className="fa fa-google-plus"/>
                                        </Button>
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="link"
                                            href="https://github.com/pcjerry/ProjectJS"
                                        >
                                            <i className="fa fa-github" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>



                <div className="section landing-section">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="text-center">Keep in touch?</h2>
                                <Form className="contact-form" onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md="6">
                                            <label>Name</label>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="nc-icon nc-single-02"/>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                                            </InputGroup>
                                        </Col>

                                        <Col md="6">
                                            <label>Email</label>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="nc-icon nc-email-85"/>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                            </InputGroup>
                                        </Col>
                                    </Row>

                                    <label>Message</label>
                                    <Input
                                        placeholder="Tell us what you think about us..."
                                        type="textarea"
                                        rows="4"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <Row>
                                        <Col className="ml-auto mr-auto" md="4">
                                            <Button className="btn-fill" color="danger" size="lg" type="submit">
                                                Send Message
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>


            <HomeFooter/>
        </>
    );
}

export default LandingPage;
