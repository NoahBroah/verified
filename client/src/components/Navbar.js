import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ currentUser, handleLogout }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">JobVerify</Link>
      <div className="navbar-links">
        {currentUser ? (
          <>
            <Link to="/profile" className="navbar-link">Profile</Link>
            <Link to="/" onClick={handleLogout} className="navbar-link">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/signup" className="navbar-link">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

