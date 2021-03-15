import React from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

function HomeHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/daniel-olahh.jpg") + ")",
                }}
                className="page-header"
                data-parallax={true}
                ref={pageHeader}
            >
                <div className="filter" />
                <Container>
                    <div className="motto text-center">
                        <h1>Welcome to CarShare</h1>
                        <h3>Get to your destination now.</h3>
                        <br />
                        <Button
                            href="https://www.youtube.com/watch?v=3vkz3VcaoRg&ab_channel=zipcar"
                            className="btn-round mr-1"
                            color="neutral"
                            target="_blank"
                            outline
                        >
                            <i className="fa fa-play" />
                            Watch video
                        </Button>
                        <Link to="/login">
                        <Button
                            className="btn-round"
                            color="neutral"
                            type="button" outline
                        >
                            Start Now
                        </Button>
                    </Link>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default HomeHeader;
