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

    state = {
        images: [
                {img:pic1, alt: "Slide One", capt: "Pug", artist: "Angela Oster", link:"http://www.angelaoster.com/"},
                {img:pic2, alt: "Slide Two", capt: "Spongebob", artist: "Savannah Jankowski", link:""},
                {img:pic3, alt: "Slide Three" , capt: "Burger Gene" , artist: " Ashley Ross" , link: "https://www.thecuddlecult.com/"},
                {img:pic4, alt: "Slide Four" , capt: "Bob's Burger's Mandala" , artist: "Ashley Ross" , link: "https://www.thecuddlecult.com/"},
                {img:pic5, alt: "Slide Five" , capt: "Starpop" , artist: "mkh" , link: ""}, 
                {img:pic6, alt: "Slide Six" , capt: "Batman Crosshatch" , artist: "" , link: ""},
                {img:pic7, alt: "Slide Seven" , capt: "AdventureTime Cross Stitch" , artist: "Sarah Osmolski" , link: ""},
                {img:pic8, alt: "Slide Eight" , capt: "Binding of Isaac Cross Stitch" , artist: "Sarah Osmolski" , link: ""}, 
                {img:pic9, alt: "Slide Nine" , capt: "Gaston Cross Stitch" , artist: " Sarah Osmolski" , link: ""}, 
                {img:pic10, alt: "Slide Ten" , capt: "Totoro" , artist: "Hayao Miyazaki" , link: ""},
                {img:pic11, alt: "Slide Eleven" , capt: "Pikachu Vinyl" , artist: "Sergio Andujar and Rick Sans" , link: "http://vinylrecordart.com/"}, 
                {img:pic12, alt: "Slide Twelve" , capt: "Kingdom Hearts Vinyl" , artist: "Sergio Andujar and Rick Sans" , link: "http://vinylrecordart.com/"}, 
                {img:pic13, alt: "Slide Thirteen" , capt: "Ohio Art" , artist: "" , link: ""}
        ]
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-2">
                        <img src="https://fontmeme.com/permalink/200213/38010f7573ea26919feb7028a5588f5a.png" alt="brush-fonts" id="artlogo"></img>
                        <p>Artists will go here</p>
                    </Col>
                    <Col size="md-5" id="artholder">
                        <center><h3>Personal Art Collection</h3></center>
                        <Carousel id="carri">
                            {this.state.images.map(image => {
                                return (
                                    <Carousel.Item>
                                        <img
                                        className="d-block"
                                        src={image.img}
                                        alt={image.alt}
                                        />
                                        <Carousel.Caption className="cap">
                                            <h5>{image.capt} by <a target="_blank" rel="noopener noreferrer" href={image.link}>{image.artist}</a></h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })}
                            </Carousel>
                    </Col>
                    <Col size="md-5" id="artholder">
                    
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Art;