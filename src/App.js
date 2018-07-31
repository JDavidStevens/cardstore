import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Shop from './component/Shop';
import Cart from './component/Cart';
import Admin from './component/Admin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Home />
        <Shop />
        <Cart />
        <Admin />
      </div>
    );
  }
}

export default App;
