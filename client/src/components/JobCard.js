import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/JobCard.css';

const JobCard = ({ job }) => {
    useEffect(() => {
        console.log(job)
      }, []);


  return (
    <div className="job-card">
      <div className="job-card-header">
        <h2 className="job-card-title">{job.position}</h2>
        <h3 className="job-card-company">{job.company}</h3>
      </div>
      <div className="job-card-body">
        <div className="job-card-description">{job.job_duties}</div>
        <div className="job-card-details">
          <div className="job-card-verified">
            <span className="job-card-label">{job.user.first_name}</span>
          </div>
        </div>
      </div>
      <div className="job-card-footer">
        <Link to={`/jobs/${job.id}`} className="job-card-link">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
