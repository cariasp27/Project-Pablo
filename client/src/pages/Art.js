import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../img/Art/Personal Collection/pic1.jpg";
import pic2 from "../img/Art/Personal Collection/pic2.jpg";
import pic3 from "../img/Art/Personal Collection/pic3.jpg";
import pic4 from "../img/Art/Personal Collection/pic4.jpg";
import pic5 from "../img/Art/Personal Collection/pic5.jpg";
import pic6 from "../img/Art/Personal Collection/pic6.jpg";
import pic7 from "../img/Art/Personal Collection/pic7.jpg";
import pic8 from "../img/Art/Personal Collection/pic8.jpg";
import pic9 from "../img/Art/Personal Collection/pic9.jpg";
import pic10 from "../img/Art/Personal Collection/pic10.jpg";
import pic11 from "../img/Art/Personal Collection/pic11.jpg";
import pic12 from "../img/Art/Personal Collection/pic12.jpg";
import pic13 from "../img/Art/Personal Collection/pic13.jpg";
import "./Art.css"


class Art extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-4">
                        <img src="https://fontmeme.com/permalink/200213/38010f7573ea26919feb7028a5588f5a.png" alt="brush-fonts" id="artlogo"></img>
                        <p>Artists will go here</p>
                    </Col>
                    <Col size="md-4" id="artholder">
                        <center><h3>Personal Art Collection</h3></center>
                        <Carousel id="carri">
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5>Pug by <a href="http://www.angelaoster.com/">Angela Oster</a></h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic2}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>SpongeBob by Savanna Jankowski</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Burger Gene</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic4}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5>Bob's Burgers Mandala</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic5}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>StarPop by mkh</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic6}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Batman Crosshatch</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic7}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5>Adventure Time Cross Stitch by Sarah Osmolski</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic8}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Binding of Isaac Cross Stitch by Sarah Osmolski</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic9}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Gaston Cross Stitch by Sarah Osmolski</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic10}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Totoro by Hayao Miyazaki</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic11}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Pikachu Vinyl by <a href="http://vinylrecordart.com/">Sergio Andujar and Rick Sans</a></h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic12}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Kingdom Hearts Vinyl by <a href="http://vinylrecordart.com/">Sergio Andujar and Rick Sans</a></h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={pic13}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Ohio Art</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col size="md-4" id="artholder">
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Art;