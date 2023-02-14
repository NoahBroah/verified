import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { JobsContext } from "../JobsContext";
import "../styles/CreateNewJob.css";

const CreateNewJob = () => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [verified, setVerified] = useState(false);
  const [jobs, setJobs] = useContext(JobsContext);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        job: {
          company: company,
          position: position,
          job_duties: description,
          verified: verified,
        },
      }),
    })
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((job) => setJobs([...jobs, job]));
          setCompany("")
          setPosition("");
          setDescription("");
        //   setVerified(false);
          history.push("/profile");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="create-job-container">
      <form onSubmit={handleSubmit}>
        <h2>Create New Job</h2>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* <div className="form-group">
          <input
            type="checkbox"
            name="verified"
            id="verified"
            checked={verified}
            onChange={() => setVerified(!verified)}
          />
          <label htmlFor="verified" className="checkbox-label">
            Verified
          </label>
        </div> */}

        <button type="submit" className="btn btn-primary btn-block">
          Create Job
        </button>
      </form>
    </div>
  );
};

export default CreateNewJob;
