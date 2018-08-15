import React, { Component } from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-container">
          <footer>
            <Link to="/">
              <img
                src="https://i.pinimg.com/originals/b1/2f/5b/b12f5b83c4d14b7c9ba0595ce22db00a.jpg"
                // {logo}
                className="App-logo"
                alt="logo"
              />
            </Link>
            <br />
            <Link to="/admin" className="admin">
              Admin
            </Link>
          </footer>
        </div>
      </div>
    );
  }
}
