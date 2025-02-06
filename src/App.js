import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./componenets/Navbar.js";
import JobFilter from "./componenets/JobFilter.js";
import JobList from "./componenets/JobList.js";
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([]); // State to store job listings
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors
  const [filters, setFilters] = useState({ department: "", location: "" }); // State for filters

  // Fetch job data from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("https://teknorix.jobsoid.com/api/v1/jobs");
        setJobs(response.data); // Set the fetched jobs to state
        setLoading(false); // Set loading to false
      } catch (err) {
        setError(err.message); // Set error message
        setLoading(false); // Set loading to false
      }
    };

    fetchJobs();
  }, []);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Filter jobs based on department and location
  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.department === "" || job.department.title === filters.department) &&
      (filters.location === "" || job.location.title === filters.location)
    );
  });

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Current Openings</h1>
        <p>
          We are always on the lookout for talented individuals who are passionate about technology and innovation.
        </p>
        <JobFilter filters={filters} onFilterChange={handleFilterChange} />
        {loading ? (
          <p>Loading jobs...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <JobList jobs={filteredJobs} />
        )}
      </div>
    </div>
  );
};

export default App;