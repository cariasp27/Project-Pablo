import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./Art.css"

class Art extends Component {

    render() {
        return (
            <Container fluid>
                <Row><img src="https://fontmeme.com/permalink/200213/38010f7573ea26919feb7028a5588f5a.png" alt="brush-fonts" id="artlogo"></img></Row>
                <Row>
                    <Col size="md-4"><p>Artists will go here</p></Col>
                    <Col size="md-8"></Col>
                </Row>
            </Container>
        )
    }
}
export default Art;