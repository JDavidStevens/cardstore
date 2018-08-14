import React, { Component } from 'react';
import './NavBar.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Inkin' Cute Ideas</Link>

            {/* <Link to="/">
              <img
                src="https://i.pinimg.com/originals/b1/2f/5b/b12f5b83c4d14b7c9ba0595ce22db00a.jpg"
                // {logo}
                className="App-logo"
                alt="logo"
              />
            </Link> */}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/shop" to="/shop">
              Shop
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/cart" to="/cart">
              Cart
            </NavItem>
            <NavItem
              eventKey={4}
              componentClass={Link}
              href="/login"
              to="/login"
              onClick={this.login}
            >
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      // <div>
      //   <div className="navbar-container">
      //     <div className="logo-container">
      //         <img
      //           src="https://i.pinimg.com/originals/b1/2f/5b/b12f5b83c4d14b7c9ba0595ce22db00a.jpg"
      //           // {logo}
      //           className="App-logo"
      //           alt="logo"
      //         />
      //       </Link>
      //     </div>
      //     <div className="navbar-links-container">
      //       <ul className="navbar-links">
      //         <li>
      //           <Link to="/">Home</Link>
      //         </li>
      //         <li>
      //           <Link to="/shop">Shop</Link>
      //         </li>
      //         <li>
      //           <Link to="/cart">Cart</Link>
      //         </li>
      //         <li>
      //           <Link to="/login" onClick={this.login}>
      //             Login
      //           </Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      //   <hr />
      // </div>
    );
  }
}

export default NavBar;
