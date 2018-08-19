import React, { Component } from 'react';
import Checkout from '../Checkout/Checkout';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import './Cart.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: this.props.shoppingCart
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      shoppingCart: nextProps.shoppingCart
    });
  }

  render() {
    let shoppingCartDisplay = this.state.shoppingCart.map((element, index) => {
      return (
        <Grid>
          <Row className="shopping-cart-product-container" key={index}>
            <Col xs={12} sm={6}>
              <img src={element.image} alt="" />
              <div className="shopping-cart-info">
                <h2>{element.product_name}</h2>
                <h2>{'$' + element.price}</h2>
                <div className="shopping-cart-button-container">
                  <Checkout />
                  <Button
                    bsStyle="primary"
                    className="shopping-cart-delete-button"
                    onClick={() => this.props.removeFromShoppingCart(element)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          >
        </Grid>
      );
    });

    return (
      <div className="make-a-purchase">
        <NavBar />
        <body className="cart-landing">
          {shoppingCartDisplay[0] ? (
            shoppingCartDisplay
          ) : (
            <h1>Your shopping cart is empty</h1>
          )}
        </body>
      </div>
    );
  }
}
