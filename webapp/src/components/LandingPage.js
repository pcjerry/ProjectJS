import React from "react";
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
                                    There are a lot of advantages to car sharing such as reducing the number of vehicles on the
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
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
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
                                            Spend your time generating new ideas. You don't have to
                                            think of implementing.
                                        </p>
                                        <Button className="btn-link" color="info" href="#pablo">
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
                                            Larger, yet dramatically thinner. More powerful, but
                                            remarkably power efficient.
                                        </p>
                                        <Button className="btn-link" color="info" href="#pablo">
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
                                            Choose from a veriety of many colors resembling sugar
                                            paper pastels.
                                        </p>
                                        <Button className="btn-link" color="info" href="#pablo">
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
                                            Find unique and handmade delightful designs related items
                                            directly from our sellers.
                                        </p>
                                        <Button className="btn-link" color="info" href="#pablo">
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
                                                <CardTitle tag="h4">Henry Ford</CardTitle>
                                                <h6 className="card-category">Product Manager</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            Teamwork is so important that it is virtually impossible
                                            for you to reach the heights of your capabilities or make
                                            the money that you want without becoming very good at it.
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-just-icon btn-neutral"
                                            color="link"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-twitter"/>
                                        </Button>
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="link"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-google-plus"/>
                                        </Button>
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="link"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-linkedin"/>
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
                                            The rules have changed.<br/>
                                            There's a fine line between right and wrong.<br/>
                                            And, somewhere in the shadows,<br/>
                                            they send us in to find it.<br/>
                                            Bravo 6, going dark.<br/>
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-just-icon btn-neutral"
                                            color="link"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-twitter"/>
                                        </Button>
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="link"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-google-plus"/>
                                        </Button>
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="link"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-linkedin"/>
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
                                                <CardTitle tag="h4">Robert Orben</CardTitle>
                                                <h6 className="card-category">Developer</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            The strength of the team is each individual member. The
                                            strength of each member is the team. If you can laugh
                                            together, you can work together, silence isn’t golden,
                                            it’s deadly.
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-just-icon btn-neutral"
                                            color="link"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-twitter"/>
                                        </Button>
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="link"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-google-plus"/>
                                        </Button>
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="link"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-linkedin"/>
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
                                <Form className="contact-form">
                                    <Row>
                                        <Col md="6">
                                            <label>Name</label>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="nc-icon nc-single-02"/>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Name" type="text"/>
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
                                                <Input placeholder="Email" type="text"/>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <label>Message</label>
                                    <Input
                                        placeholder="Tell us your thoughts and feelings..."
                                        type="textarea"
                                        rows="4"
                                    />
                                    <Row>
                                        <Col className="ml-auto mr-auto" md="4">
                                            <Button className="btn-fill" color="danger" size="lg">
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
