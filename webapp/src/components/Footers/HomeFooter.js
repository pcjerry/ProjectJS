import React from "react";
import { Row, Container } from "reactstrap";

function HomeFooter() {
    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <Row>
                    <nav className="footer-nav">
                        <ul>
                            <li>
                                <a
                                    href="https://en.wikipedia.org/wiki/Carsharing"
                                    target="_blank"
                                >
                                    Car Share
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://iiw.kuleuven.be/gent/contact"
                                    target="_blank"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.sharecar.co.id/en/pages/terms-and-conditions"
                                    target="_blank"
                                >
                                    Terms and Conditions
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()} Car Share
            </span>
                    </div>
                </Row>
            </Container>
        </footer>
    );
}

export default HomeFooter;
