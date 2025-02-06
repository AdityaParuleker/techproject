import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>
        <strong>Department:</strong> {job.department.title}
      </p>
      <p>
        <strong>Location:</strong> {job.location.title}
      </p>
      <p>
        <strong>Type:</strong> {job.type}
      </p>
      <button>Apply</button>
    </div>
  );
};

export default JobCard;