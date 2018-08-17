import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    let pictures = this.state.products.map((element, index) => {
      return <img key={index} src={element.picture} alt="" className="pic" />;
      // return element.picture;
    });

    let Slideshow = () => {
      return <Slide images={pictures} duration={5000} transition={1000} />;
    };

    return (
      <div className="home-landing">
        {Slideshow}
        <br />
        Please
        <Button onClick={this.login} bsStyle="primary">
          Login
        </Button>
        to Make a Purchase
      </div>
    );
  }
}
