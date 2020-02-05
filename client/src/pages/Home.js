import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem, PageButtons } from "../components/list.js";
import { Col, Row, Container } from "../components/Grid";
import { PaulPic, BucketPic } from "../components/imgs.js";
import LinkedInButton from "../components/linkedin.js";
import "./Home.css";

class Home extends Component {
    constructor() {
        super()
    this.state = {
        blogfeed: [],
        bucketlist: [],
        title: "",
        section: "",
        body: "",
        
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
}   
    componentDidMount() {
        this.loadBlog();
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.title + "  Title");
        console.log(this.state.section + "  Section");
        console.log(this.state.body + "  Body");
    };

    handleFormSubmit = event => {
        console.log("this is the event" + event.value)
        event.preventDefault();
        API.addNewPost({
            title: this.state.title,
            section: this.state.section,
            body: this.state.body,
        })
            .then(res => console.log("Blog Post Posted"))
            .catch(err => console.log(err));
    }
    loadBlog = () => {
        API.getRecentBlogFeed()
            .then(res => this.setState({ blogfeed: res.data })
            )
            .catch(err => console.log(err + "you got here"));
    }

    render() {
        return (
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
                        <PageButtons></PageButtons>
                        <form className="newpost">
                            <div className="form-group">
                                <input
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="title"
                                />
                                <input
                                    name="section"
                                    value={this.state.section}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="section"
                                />
                                <input
                                name="body"
                                    value={this.state.body}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="..."
                                />
                                <button type="submit" onClick={this.handleFormSubmit} className="btn btn-success">
                                    Submit
        </button>
                            </div>
                        </form>
                    </Col>

                </Row>
            </Container>

        )
    }
}

export default Home;