import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import { div, Grid, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('/api/products').then(response => {
      this.setState({
        products: response.data
      });
    });
  }

  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
    let url = `${window.location.origin}/auth/callback`;

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  }

  render() {
    const pictures = [
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/Baby.jpg',
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/Thoughts.jpg',
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/birthday.jpg'
    ];

    const picturesTwo = [
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/friendwish.jpg',
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/praying.jpg',
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/snowman.jpg',
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/wedding.jpg'
    ];

    // let pictures = this.state.products.map((element, index) => {
    //   return element.picture;
    // });

    let Slideshow = () => {
      return (
        <Slide
          className="img"
          images={pictures}
          duration={5000}
          transition={1000}
        />
      );
    };
    let SlideshowTwo = () => {
      return (
        <Slide
          className="img"
          images={picturesTwo}
          duration={5000}
          transition={1000}
        />
      );
    };

    return (
      <body className="home-landing">
        <Jumbotron className="jumbotron">
          <h1 className="title">Inkin' Cute Ideas!</h1>
          <p>Handcrafted Cards for Every Occasion</p>
        </Jumbotron>
        <Grid>
          <Col xs="12" sm="6">
            <Row>
              <div className="slideshow">{Slideshow()}</div>
            </Row>
          </Col>

          <Col xs="12" sm="5">
            <Row>
              <div className="slides2">{SlideshowTwo()}</div>
            </Row>
          </Col>
        </Grid>

        <div className="login-prompt">
          <Button onClick={this.login} bsStyle="primary">
            Login
          </Button>
          {' and shop with us!'}
        </div>
      </body>
    );
  }
}
