import React, { Component } from 'react';
import Home from './component/Home/Home';
import Cart from './component/Cart/Cart';
import Shop from './component/Shop/Shop';
import Login from './component/Login/Login';
import Footer from './component/Footer/Footer';
import Admin from './component/Admin/Admin';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      shoppingCart: []
    };

    this.addToShoppingCart = this.addToShoppingCart.bind(this);
    this.removeFromShoppingCart = this.removeFromShoppingCart.bind(this);
  }

  addToShoppingCart(product) {
    this.setState({
      shoppingCart: [...this.state.shoppingCart, product]
    });
    console.log(this.state.shoppingCart);
  }

  removeFromShoppingCart(product) {
    let newShoppingCart = this.state.shoppingCart;
    newShoppingCart.splice(newShoppingCart.indexOf(product), 1);
    this.setState({
      shoppingCart: newShoppingCart
    });
    console.log(this.state.shoppingCart);
  }

  proceedToCheckout() {}

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/shop"
            render={() => {
              return <Shop addToShoppingCart={this.addToShoppingCart} />;
            }}
          />
          <Route
            path="/cart"
            render={() => {
              return (
                <Cart
                  shoppingCart={this.state.shoppingCart}
                  removeFromShoppingCart={this.removeFromShoppingCart}
                />
              );
            }}
          />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
