import React from "react";
import { Link } from "react-router-dom";
import imageHome from "../imageHome.jpg";

function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <div className="user-home-container">
      <div className="image-wrapper">
        <img src={imageHome} alt="imageHome" className="background-image" />
      </div>
      <div className="content-wrapper">
        <div className="overlay-text">
          <h1 className="welcome-heading">Welcome to PWD Job Antenna</h1>
          <h2 className="welcome-message">Welcome, {userData.fname}!</h2>
          <p className="email">Email: {userData.email}</p>
          <button className="logout-button" onClick={logOut}>Log Out</button>
          <Link className="job-search-link" to="/jobsearch">
            <span className="link-text">Search for Jobs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserHome;


