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
      'https://scontent.cdninstagram.com/vp/cf9a15bc9ce130454a3bd2d93f0d3fe8/5BEF7AD3/t51.2885-15/sh0.08/e35/s640x640/37055543_510090192745442_6436887694336327680_n.jpg',
      'https://static1.squarespace.com/static/5732755a2fe131d8f55d6919/5b4ab7a070a6ad5e776c2f10/5b4ab7a0575d1fa91f1b814b/1531623347280/MILLION_ACHIEVER_CONNIE_01.jpg?format=1000w',
      'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/38544010_10156527914532512_1696653184480575488_o.jpg?_nc_cat=0&oh=12ed676bae02b366bef8220e088fa7d1&oe=5C0A8A0C',
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/RMX'
    ];

    const picturesTwo = [
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/Pallisades',
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/RMX2.JPG',
      'https://i.ytimg.com/vi/QPf1Ch99z4w/hqdefault.jpg',
      'http://www.stampthat.com/blog/wp-content/uploads/2012/06/100_2167.jpg',
      'data:image/jpeg;base64,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'
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
