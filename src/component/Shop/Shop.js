import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';

import './Shop.css';

export default class Shop extends Component {
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
      return (
        <Grid>
          <Row className="product-container" key={index}>
            <Col xs={12} sm={6} className="product-wrapper">
              <h2 className="text">{element.product_name}</h2>
              {/* <h3>{element.product_description}</h3> */}
              <img src={element.picture} alt="" className="pic" />
              <h3>{'$' + element.price}</h3>
              <Button
                bsStyle="primary"
                onClick={() => this.props.addToShoppingCart(element)}
              >
                Add To Cart
              </Button>
            </Col>
          </Row>
        </Grid>
      );
    });
    return (
      <div className="storefront-container">
        <NavBar />
        <body className="shop-landing">{productDisplay}</body>
      </div>
    );
  }
}
