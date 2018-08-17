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
      // 'https://scontent.cdninstagram.com/vp/cf9a15bc9ce130454a3bd2d93f0d3fe8/5BEF7AD3/t51.2885-15/sh0.08/e35/s640x640/37055543_510090192745442_6436887694336327680_n.jpg',
      // 'https://static1.squarespace.com/static/5732755a2fe131d8f55d6919/5b4ab7a070a6ad5e776c2f10/5b4ab7a0575d1fa91f1b814b/1531623347280/MILLION_ACHIEVER_CONNIE_01.jpg?format=1000w',
      // 'https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/38544010_10156527914532512_1696653184480575488_o.jpg?_nc_cat=0&oh=12ed676bae02b366bef8220e088fa7d1&oe=5C0A8A0C'
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/RMX',
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/Pallisades',
      'https://s3-us-west-2.amazonaws.com/cardstoredevmtnprjct/RMX2.JPG',
      'https://i.ytimg.com/vi/QPf1Ch99z4w/hqdefault.jpg'
    ];

    // let pictures = this.state.products.map((element, index) => {
    //   return element.picture;
    // });

    let Slideshow = () => {
      return <Slide images={pictures} duration={5000} transition={1000} />;
    };

    return (
      <body className="home-landing">
        <Jumbotron className="jumbotron">
          <h1 className="title">Inkin' Cute Ideas!</h1>
          <p>Handcrafted Cards for Every Occasion</p>
        </Jumbotron>
        <div className="home-style">
          <div className="slides">{Slideshow()}</div>
        </div>
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
