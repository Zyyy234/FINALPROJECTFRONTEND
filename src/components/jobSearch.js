import React, { useState } from "react";
import { Link } from "react-router-dom";

function JobSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobListings, setJobListings] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform job search logic here
    // You can use API calls or mock data for demonstration
    const results = [
      { id: 1, title: "Job 1", description: "Description 1" },
      { id: 2, title: "Job 2", description: "Description 2" },
      { id: 3, title: "Job 3", description: "Description 3" },
    ];
    setJobListings(results);
  };

  return (
    <div>
      <h2>Job Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {jobListings.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <button>Apply</button>
        </div>
      ))}
      
        <Link className="home-button" to="/userDetails">Go Back to User Home</Link>
      </div>
  );
}

export default JobSearch;


