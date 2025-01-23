import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import like from '../../assets/like.png';
import cart from '../../assets/cart.png';
import phone from '../../assets/phone.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Header.css';

export default function Header({ cartCount  }) {

  return (
    <>
     <div className="top-bar">
        <div className="location">
          <span>Location: Hyderabad, India</span>
        </div>
        <div className="auth-links">
          <Link to="/signin" className="signin">Sign In</Link>
          <span>|</span>
          <Link to="/signup" className="signup">Sign Up</Link>
        </div>
      </div>
      <div className="header-top">
        <div className="logo">
          <img src={logo} alt="Ecobazar Logo" className="logo-image" />
          <Nav.Link href="/">
            <h1 className="bazar">Ecobazar</h1>
          </Nav.Link>
        </div>
        <div className='searching'>
        <div className="search-bar">
          <input  className='search' type="text" placeholder="Search" />
          <button className='btn '>Search</button>
        </div>
        <div className="icons">
        <img src={like} alt="like-logo" />
          <div className="cart-icon">
            <Link to ="/cart">
            <img src={cart} alt="cart-logo" />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>  
            )}
            </Link>
          </div>
        </div>
        </div>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <NavDropdown title="Blogs" id="blogs-dropdown">
                <NavDropdown.Item as={Link} to="/blogs">All Blogs</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blogslist">BlogList</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/myaccount">My Account</Nav.Link>

            </Nav>
            <div className="phone-number">
              <img src={phone} alt="phone-logo" />
              <span>(219) 555-0114</span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
