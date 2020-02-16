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
    // constructor() {
    //     super ()
    //     this.state = {
    //         personalcollection: []
    //     }
    //     this.photoarray = this.photoarray.bind(this)
    // }
    // componentDidMount(){
    //     this.photoarray();
    // }
    // photoarray = () => {
    //     let pc =[];
    //     for(i=1; i<= 13; i++){
    //         pc.push((pic+i));
    //     }
    //     this.setState({personalcollection: pc});
    //     console.log(this.state.personalcollection);
    // }
    render() {
        return (
            <Container fluid>
                <Row><img src="https://fontmeme.com/permalink/200213/38010f7573ea26919feb7028a5588f5a.png" alt="brush-fonts" id="artlogo"></img></Row>
                <Row>
                    <Col size="md-4"><p>Artists will go here</p>
                    </Col>
                    <Col size="md-8" id="artholder">
                    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Art;