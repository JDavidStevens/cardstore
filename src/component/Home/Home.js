import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
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

  render() {
    let productDisplay = this.state.products.map((element, index) => {
      return <img src={element.picture} alt="" className="pic" />;
    });

    const Slideshow = () => {
      return (
        <Slide images={productDisplay} duration={5000} transition={1000} />
      );
    };

    return (
      <div className="home-landing">
        {productDisplay}
        Like What You See? Login to Make a Purchase
      </div>
    );
  }
}
