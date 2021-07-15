import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import "./recentApplicant.scss";

function RecentApplicant() {
  return (
    <div className="recent__applicant">
      <div className="recent__applicant__info">
        <h3>Tahir Montgomery</h3>
        <h5>Software Developer</h5>
        <h5>April 12, 2021</h5>
      </div>
      <AssignmentIcon fontSize="large" className="applicant__icon" />
    </div>
  );
}

export default RecentApplicant;
