import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";
import { JobsContext } from "../JobsContext";
import "../styles/Profile.css";

function Profile() {
  const [user] = useContext(UserContext);
  const [jobs, setJobs] = useContext(JobsContext);



  const filteredJobs = user.is_employer
    ? jobs.filter((job) => job.company === user.company)
    : jobs.filter((job) => job.user_id === user.id);
    
  return (
    <div className="profile-container">
      <h1>Welcome to your Profile, {user.first_name} {user.last_name}</h1>
      <div className="profile-buttons">
        <Link to="/edit_profile" className="btn btn-primary">
          Edit Profile
        </Link>
        {!user?.is_employer && (
          <Link to="/create_job" className="btn btn-primary">
            Create New Job
          </Link>
        )}
      </div>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))
      ) : ( 
        <p>No jobs found</p>
      )}
    </div>
  );
};

export default Profile;
