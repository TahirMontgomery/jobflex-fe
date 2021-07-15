import React from "react";
import "./event.scss";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function Upcoming() {
  return (
    <div className="event">
      <div className="event__date">
        <h3>3</h3>
        <h5>Apr</h5>
        <p>Tuesday</p>
      </div>
      <div className="event__details">
        <h3>Tahir Montgomery</h3>
        <h5>12:00- 12:30 PM</h5>
        <h5 className="type">Interview</h5>
        <p>
          View details
          <span>
            <ArrowRightAltIcon />
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Upcoming;
