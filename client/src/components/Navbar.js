import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { JobsContext } from '../JobsContext';
import '../styles/Navbar.css';
import { UserContext } from "../UserContext";

function Navbar() {
  const [user, setUser] = useContext(UserContext)
  const [jobs, setJobs] = useContext(JobsContext)
  console.log(user)
  console.log(jobs)

   ;
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then((resp) => {
        if (resp.ok) {
          setUser(null);
          alert("You have been logged out");
        }
      });
    }
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">JobVerify</Link>
      <div className="navbar-links">
        {user ? (
          user.is_employer ? 
          <>
            <Link to="/profile" className="navbar-link">Profile</Link>
            <Link to="/" onClick={handleLogout} className="navbar-link">Logout</Link>
          </>
          :
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

