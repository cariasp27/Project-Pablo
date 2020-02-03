import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./Home.css";
import PaulPic from "../components/paulpic.js"
import LinkedInButton from "../components/linkedin.js"
class Home extends Component {
    state = {
        blogfeed: [],
        bucketlist: [],
    }
    
    render() {
        return(
            <Container fluid>
                <Row>
                <Col size="md-3" id="lftcol">
                    <PaulPic></PaulPic>
                    <LinkedInButton></LinkedInButton>
                </Col>
                    <Col size="md-6">
                        <h1>Hi I'm Paul</h1>

                    </Col>
                    <Col size="md-3"></Col>
                    
                </Row>
            </Container>

        )
    }
}

export default Home;