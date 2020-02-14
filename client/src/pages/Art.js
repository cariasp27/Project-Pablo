import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import firstpic from "../img/Art/Personal Collection/Snapchat-2106152467.jpg";
import "./Art.css"


class Art extends Component {

    render() {
        return (
            <Container fluid>
                <Row><img src="https://fontmeme.com/permalink/200213/38010f7573ea26919feb7028a5588f5a.png" alt="brush-fonts" id="artlogo"></img></Row>
                <Row>
                    <Col size="md-4"><p>Artists will go here</p>
                    </Col>
                    <Col size="md-8" id="artholder">
                        <div id="personalcollection" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" >
                                    <img class="d-block img-fluid" src={firstpic} alt="First Slide"></img>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Art;