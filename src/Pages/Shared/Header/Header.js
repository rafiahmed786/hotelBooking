import React from 'react';
import './Header.css'
import { Container,Nav,Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/Contexts/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" className='nav-container'>
        <Container>
        <Navbar.Brand className='links'><Nav.Link className='links p-0' as={HashLink} to='/home'>Booking.com</Nav.Link></Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-light' />
        <Navbar.Collapse className="justify-content-end ">     
          <Nav.Link><NavLink className='links m-0' to='/home'>Home</NavLink></Nav.Link>
          <Nav.Link><NavLink className='links' to='/hotels'>Hotels</NavLink></Nav.Link>
          <Nav.Link className='links p-0' as={HashLink} to='/home#about'>About</Nav.Link>
          
            {
            user?.email && <NavDropdown title={<h6 style={{color:'#fff',borderLeft:'2px solid #fff',textAlign:'center'}} className=' ps-2 fs-6 m-0 justify-content-center'>{user?.displayName}</h6>} id="navbarScrollingDropdown">

          <NavDropdown.Item><NavLink className="dropdown-item" to='/addhotel'>Add New Hotel</NavLink></NavDropdown.Item>
          <NavDropdown.Item  href='/mybooking'>MyBookings</NavDropdown.Item>
          <NavDropdown.Item  href='/allbookings'>Manage All Bookings</NavDropdown.Item>
          
        </NavDropdown>
          }          
          <div>{user?.email ? <h6 className="btn button m-0 shadow" onClick={logOut}>Sign Out</h6> :
          <NavLink className='links login-btn' to='/login'>Login</NavLink>}</div>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;