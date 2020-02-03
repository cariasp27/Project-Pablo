import React, { Component } from "react";
import { List, ListItem, PageButton } from "../components/list.js";
import { Col, Row, Container } from "../components/Grid";
import { PaulPic, BucketPic} from "../components/imgs.js";
import LinkedInButton from "../components/linkedin.js";
import "./Home.css";
class Home extends Component {
    state = {
        blogfeed: [],
        bucketlist: [],
    }
    
    render() {
        return(
            <Container fluid>
                <Row>
                <Col size="md-3">
                    <PaulPic></PaulPic>
                    <LinkedInButton></LinkedInButton>
                    <BucketPic></BucketPic>
                </Col>
                    <Col size="md-6">
                        {/* The ListItems will be mapped out from the blogfeed array
                            the blogfeed items will be objects with a title, body, and date and topic/subject
                            upon clicking a post it will bring you to the post's passion page
                        */}
                        <List>
                            <ListItem>
                            <h1>Inital Post</h1>
                            <p>I am creating this Blog for my opinions and passions</p>
                            </ListItem>
                        </List>

                    </Col>
                    <Col size="md-3">
                        <PageButton><span>Art</span></PageButton>
                    </Col>
                    
                </Row>
            </Container>

        )
    }
}

export default Home;