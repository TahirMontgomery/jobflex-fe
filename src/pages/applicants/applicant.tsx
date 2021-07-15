import { Container, Grid, makeStyles, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import "./applicants.scss";
import pdf from "../../assets/sample.pdf";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import AutoComplete from "material-ui/AutoComplete";
interface JobListProps {
  active: Number;
  setActive: Function;
}
function JobList({ active, setActive }: JobListProps) {
  let jobs = new Array(10).fill(1);

  function checkActive(index: Number) {
    return index == active ? "active" : "";
  }

  return (
    <div>
      {jobs.map((job, index) => (
        <div key={index}>
          <div
            onClick={() => setActive(index)}
            className={`job__board__job ${checkActive(index)}`}
          >
            <div className="begin">
              <div>
                <h3>Full Stack Software Engineer</h3>
                <h5>Tampa, FL</h5>
              </div>
              <h5 className="date">Apr 20</h5>
            </div>
            <div>
              <p>32 Applicants</p>
              <p>15 Interviews</p>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

function ApplicantInfo() {
  return (
    <div className="applicant">
      <div className="applicant__header">
        <div className="applicant__name">
          <div>
            <h3>Tahir Montgomery</h3>
            <BookmarkBorderIcon
              onClick={() => console.log("hey")}
              className="favoriteIcon"
            />
            <BusinessCenterIcon className="approveIcon" />
          </div>
          <h4>Full Stack Engineer</h4>
        </div>
        <div className="actions"></div>
      </div>
      <div className="applicant__info">
        <div className="email">
          <h4>Email</h4>
          <p>email@email.com</p>
        </div>
        <hr />
        <div className="phone">
          <h4>Phone Number</h4>
          <p>(850) 559-7651</p>
        </div>
        <hr />
        <div className="address">
          <h4>Address</h4>
          <p>3534 Palm Crossing Drive</p>
          <p>Tampa, Fl 33613</p>
        </div>
        <hr />
        <div className="work">
          <h4>Work History</h4>
          <p>Backend Software Engineer</p>
          <p>Apple Inc, Los Angeles, CA</p>
          <p>Apr 2020 - December 2020</p>
        </div>
        <hr />
        <div className="education">
          <h4>Educational History</h4>
          <p>Backend Software Engineer</p>
          <p>Apple Inc, Los Angeles, CA</p>
          <p>Apr 2020 - December 2020</p>
        </div>
        <hr />
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  indicator: {
    backgroundColor: "transparent",
    marginLeft: "auto",
    "& .MuiTab-textColorInherit": {
      color: "#243042",
      fontSize: "14px",
      "&.Mui-selected": {
        color: "#6095d8",
      },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#6095d8",
    },
    "& .MuiTabs-flexContainer": {
      justifyContent: "flex-end",
    },
  },
});

interface ApplicantProps {
  setRoute: Function;
}
function Applicant({ setRoute }: ApplicantProps) {
  const [active, setActive] = useState(0);
  const [value, setValue] = useState(0);
  const route = useRouteMatch();
  const classes = useStyles();
  setRoute(route.path);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Container disableGutters maxWidth="xl">
      <Grid className="job__board" container>
        <Grid className="job__board__jobs" item md={3}>
          <JobList active={active} setActive={setActive} />
        </Grid>
        <Grid item md={9}>
          <Grid container spacing={0}>
            <Grid item md={4}>
              <ApplicantInfo />
            </Grid>
            <Grid item md={8}>
              <Tabs
                value={value}
                className={classes.indicator}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Job Information" />
                <Tab label="Resume" />
                <Tab label="Cover Letter" />
              </Tabs>
              <div hidden={value !== 0}>Item One</div>
              <div className="file" hidden={value !== 1}>
                <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={pdf} />
              </div>
              <div className="file" hidden={value !== 2}>
                <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={pdf} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Applicant;
