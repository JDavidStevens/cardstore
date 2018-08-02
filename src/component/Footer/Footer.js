import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-container">
          <footer>
            <Link to="/admin">Admin</Link>
          </footer>
        </div>
      </div>
    );
  }
}
