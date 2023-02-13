import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import '../styles/Signup.css'

const Signup = () => {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmployer, setIsEmployer] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
          is_employer: isEmployer,
        },
      }),
    })
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => setUser(user));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              name="isEmployer"
              id="isEmployer"
              checked={isEmployer}
              onChange={() => setIsEmployer(!isEmployer)}
            />
            <label htmlFor="isEmployer" className="checkbox-label">
              Are you an employer?
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Signup
          </button>
        </form>

        <p className="signup-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
