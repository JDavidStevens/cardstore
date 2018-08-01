import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
    let url = `${window.location.origin}/auth/callback`;

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  }

  render() {
    return (
      <div>
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/">
              <img
                src="https://i.pinimg.com/originals/b1/2f/5b/b12f5b83c4d14b7c9ba0595ce22db00a.jpg"
                // {logo}
                className="App-logo"
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar-links-container">
            <ul className="navbar-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/cart" onClick={this.login}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default NavBar;
