import React, { Component } from "react";
import API from "../utils/API";
import Moment from "react-moment";
import moment from "moment";
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
    this.loadBlog = this.loadBlog.bind(this)
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
        console.log(this.state.blogfeed)
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
            .then(res => {
                let response = res.data;
                console.log(response)
                let tempfeed = [];
                for (let i=0; i < response.length; i++) {
                    let post = {};
                    let info = response[i];
                    post.title = info.title;
                    post.section = info.section;
                    post.body = info.body;
                    post.date = moment(info.date).format("MMMM Do YYYY");
                    tempfeed.push(post);
                    console.log(post);
                }
                this.setState({ blogfeed: tempfeed });
                console.log(this.state.blogfeed);
            })
            .catch(err => console.log(err + "you got here"));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-3">
                        {/* <PaulPic></PaulPic> */}
                        <LinkedInButton></LinkedInButton>
                        <BucketPic></BucketPic>
                    </Col>
                    <Col size="md-6">
                        {/* The ListItems will be mapped out from the blogfeed array
                            the blogfeed items will be objects with a title, body, and date and topic/subject
                            upon clicking a post it will bring you to the post's passion page
                        */}
                        {this.state.blogfeed.length ? (
                <List>
                  {this.state.blogfeed.map(post => {
                    return (
                      <ListItem key={post._id}>
                  <h1>{post.title}</h1>
                    <h2>{post.section}</h2>
                    <h5>{post.date}</h5>
                    <p>{post.body}</p>
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}

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
                                <textarea
                                id="bodybox"
                                name="body"
                                    value={this.state.body}
                                    onChange={this.handleInputChange}

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