import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import route from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://i.pinimg.com/originals/b1/2f/5b/b12f5b83c4d14b7c9ba0595ce22db00a.jpg"
            // {logo}
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Inkin' Cute!</h1>
          <nav className="links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
          </nav>
        </header>
        <img
          src="https://i.pinimg.com/originals/9d/82/2e/9d822ee3874e8ea0a045a60388bcdf46.jpg"
          className="background"
        />
        <footer>
          <Link to="/admin">Admin</Link>
        </footer>
        {route}
      </div>
    );
  }
}

export default App;
