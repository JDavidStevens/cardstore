import React, { Component } from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Home from './component/Home/Home';
import Cart from './component/Cart/Cart';
import Shop from './component/Shop/Shop';
import Login from './component/Login/Login';
import Footer from './component/Footer/Footer';
import Admin from './component/Admin/Admin';
import { Route, Switch } from 'react-router-dom';
// import route from './route';

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
        <NavBar />

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
        <Footer />
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img
      //       src="https://i.pinimg.com/originals/b1/2f/5b/b12f5b83c4d14b7c9ba0595ce22db00a.jpg"
      //       // {logo}
      //       className="App-logo"
      //       alt="logo"
      //     />
      //     <h1 className="App-title">Inkin' Cute Ideas!</h1>
      //     <nav className="links">
      //       <Link to="/">Home</Link>
      //       <Link to="/shop">Shop</Link>
      //       <Link to="/cart">Cart</Link>
      //     </nav>
      //   </header>
      //   <img
      //     src="https://i.pinimg.com/originals/9d/82/2e/9d822ee3874e8ea0a045a60388bcdf46.jpg"
      //     className="background"
      //   />
      //   <footer>
      //     <Link to="/admin">Admin</Link>
      //   </footer>
      //   {route}
      // </div>
    );
  }
}

export default App;
