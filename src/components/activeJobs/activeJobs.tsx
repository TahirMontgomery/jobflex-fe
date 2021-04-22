import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./activeJobs.scss";
import { IconButton } from "@material-ui/core";
function ActiveJobs() {
  return (
    <div className="active__job">
      <div className="active__job__title">
        <h3>Software Developer</h3>
        <p>Tampa, Fl</p>
      </div>
      <span className="text">April 11, 2021</span>
      <span className="text">32 Applicants</span>
      <div className="active__job__recruiters">
        <img
          src="https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"
          alt="Display Pic"
        />
        <img
          src="https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"
          alt="Display Pic"
        />
        <img
          src="https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"
          alt="Display Pic"
        />
      </div>
      <IconButton>
        <MoreVertIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default ActiveJobs;
