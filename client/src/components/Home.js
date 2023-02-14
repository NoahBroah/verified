import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { UserContext } from "../UserContext";

const Home = () => {
  const [user] = useContext(UserContext);
  // console.log(user);
  return (
    <div className="home-container">
      <div className="left-column">
        <h1>Welcome to JobVerify</h1>
        <div className="left-content">
          <p>
            At JobVerify, employees can request to have their current or past
            jobs verified by their employer. This can be beneficial to employees
            as it gives an extra sense of trust being their experience. It also
            is a proactive approach to showing future employers that their
            resume experience is valid and verified.
          </p>
          <Link to="/signup" className="employee-link">
            Sign up as an employee
          </Link>
        </div>
        <div className="left-content">
          <p>
            JobVerify also benefits employers by allowing them to save time and
            cost on the hiring process. No longer will you need to pay for
            employee verification services. JobVerify allows employers to have
            easy access to already verified employment records.
          </p>
          <Link to="/signup" className="employer-link">
            Sign up as an employer
          </Link>
        </div>
      </div>
      <div className="right-column">
        <img src="https://via.placeholder.com/500x500" alt="JobVerify" />
      </div>
    </div>
  );
};

export default Home;
