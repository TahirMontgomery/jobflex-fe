import React, { useState } from "react";
import "./jobBoard.scss";
import { useRouteMatch } from "react-router";
import { Container, Grid, Tab, Tabs } from "@material-ui/core";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Bar, Line } from "react-chartjs-2";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import twitter from "../../assets/twitter.svg";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import VideoCallIcon from "@material-ui/icons/VideoCall";

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

const useStyles = makeStyles({
  indicator: {
    backgroundColor: "transparent",
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
  },
});

function Info() {
  const data = {
    labels: ["Interviewed", "Rejected", "Hired", "Pending"],
    datasets: [
      {
        axis: "y",
        label: "# of Votes",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "New Hires",
        data: [12, 19, 3, 5],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };

  const options2 = {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "New Candidates",
      },
    },
  };
  return (
    <div className="">
      <Grid container>
        <Grid item md={7}>
          <div className="info info__card">
            <h3 className="card__header">Details</h3>
            <div className="info__details">
              <div>
                <h5>Location: Tampa,Fl</h5>
                <h5>Status: Active</h5>
                <h5>Posted On: April 20, 2021</h5>
              </div>
              <div>
                <h5>Salary: $80,000</h5>
                <h5>Recruiter: Timmy Lee</h5>
                <h5>Expire Date: May 20, 2021</h5>
              </div>
              <h5>Job Type: Full Time</h5>
            </div>
          </div>
          <div className="info info__card">
            <h3 className="card__header">Description</h3>
            <div className="info__details">
              <div>
                <h5>Location: Tampa,Fl</h5>
                <h5>Status: Active</h5>
                <h5>Posted On: April 20, 2021</h5>
              </div>
              <div>
                <h5>Salary: $80,000</h5>
                <h5>Recruiter: Timmy Lee</h5>
                <h5>Expire Date: May 20, 2021</h5>
              </div>
              <h5>Job Type: Full Time</h5>
            </div>
            <hr />
            <h3 className="card__header">Qualifications</h3>
            <div className="info__details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                est sit amet enim egestas dictum ut id tellus. Fusce sed nisi
                vitae tortor porttitor tempus. Nam quis dolor tortor. Praesent
                dapibus ut leo at volutpat. Fusce eleifend velit at maximus
                ullamcorper. Sed ut metus tempus, ornare dolor a, ullamcorper
                turpis. Vestibulum quam odio, condimentum congue vestibulum a,
                porttitor eget felis. Vivamus eu pellentesque ipsum, sed
                tristique augue. Suspendisse eu lorem elit. Maecenas sed
                bibendum augue, id euismod massa. In ac risus metus. Aenean ut
                diam laoreet felis vulputate luctus.
              </p>
            </div>
            <hr />
            <h3 className="card__header">Benefits</h3>
            <div className="info__details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                est sit amet enim egestas dictum ut id tellus. Fusce sed nisi
                vitae tortor porttitor tempus. Nam quis dolor tortor. Praesent
                dapibus ut leo at volutpat. Fusce eleifend velit at maximus
                ullamcorper. Sed ut metus tempus, ornare dolor a, ullamcorper
                turpis. Vestibulum quam odio, condimentum congue vestibulum a,
                porttitor eget felis. Vivamus eu pellentesque ipsum, sed
                tristique augue. Suspendisse eu lorem elit. Maecenas sed
                bibendum augue, id euismod massa. In ac risus metus. Aenean ut
                diam laoreet felis vulputate luctus.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={5}>
          <div className="info2">
            <Bar type="horizontalBar" options={options} data={data} />
          </div>
          <div className="">
            <Line type="line" options={options2} data={data2} />
          </div>
          <div className="info">
            <h3 className="card__header">Hires By Site</h3>
            <div className="hire__stat">
              <img className="hire__logo" src={facebook} alt="Company Logo" />
              <h3>Facebook</h3>
              <h3>12</h3>
            </div>
            <div className="hire__stat">
              <img className="hire__logo" src={google} alt="Company Logo" />
              <h3>Google</h3>
              <h3>12</h3>
            </div>
            <div className="hire__stat">
              <img className="hire__logo" src={twitter} alt="Company Logo" />
              <h3>Twitter</h3>
              <h3>12</h3>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function ApplicantsTable() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.getValue("firstName") || ""} ${
          params.getValue("lastName") || ""
        }`,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 120,
    },
    {
      field: "title",
      headerName: "Position",
      width: 150,
      renderCell: (params) => {
        return <div>Software Engineer</div>;
      },
    },
    {
      field: "dateApplied",
      headerName: "Applied On",
      type: "date",
      width: 150,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      type: "string",
      width: 170,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        console.log(params);
        return <div>bye</div>;
      },
    },
    {
      field: "actions",
      headerName: "Action",
      width: 110,
      renderCell: (params) => {
        console.log(params);
        return <div>Action</div>;
      },
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      dateApplied: new Date(),
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      dateApplied: new Date(),
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      dateApplied: new Date(),
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
      dateApplied: new Date(),
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
      dateApplied: new Date(),
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      age: 150,
      dateApplied: new Date(),
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      dateApplied: new Date(),
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      dateApplied: new Date(),
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      dateApplied: new Date(),
    },
  ];

  return (
    <div className="info" style={{ display: "flex", minHeight: "600px" }}>
      <div style={{ background: "white", flexGrow: 1 }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} />
      </div>
    </div>
  );
}

function Milestones() {
  return (
    <div className="milestones">
      <Grid container spacing={4}>
        <Grid item md={3}>
          <div className="lane">
            <div className="lane__header color1">
              <HourglassFullIcon fontSize="large" />
              <h3>Pending</h3>
              <h3>25</h3>
            </div>
            <div className="lane__items">
              <div className="lane__item">
                <p className="applicant">Tahir Montgomery</p>
                <p className="location">Tampa, Fl</p>
                <p className="location">April 25, 2021</p>
              </div>
              <div className="lane__item">
                <p className="applicant">Tahir Montgomery</p>
                <p className="location">Tampa, Fl</p>
                <p className="location">April 25, 2021</p>
              </div>
              <div className="lane__item">
                <p className="applicant">Tahir Montgomery</p>
                <p className="location">Tampa, Fl</p>
                <p className="location">April 25, 2021</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="lane">
            <div className="lane__header color2">
              <InsertDriveFileIcon fontSize="large" />
              <h3>Screening</h3>
              <h3>25</h3>
            </div>
            <div className="lane__items">
              <div className="lane__item">
                <p className="applicant">Tahir Montgomery</p>
                <p className="location">Tampa, Fl</p>
                <p className="location">April 25, 2021</p>
              </div>
              <div className="lane__item">
                <p className="applicant">Tahir Montgomery</p>
                <p className="location">Tampa, Fl</p>
                <p className="location">April 25, 2021</p>
              </div>
              <div className="lane__item">
                <p className="applicant">Tahir Montgomery</p>
                <p className="location">Tampa, Fl</p>
                <p className="location">April 25, 2021</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="lane">
            <div className="lane__header color3">
              <ThumbDownIcon fontSize="large" />
              <h3>Rejected</h3>
              <h3>25</h3>
            </div>
            <div className="lane__items">
              <div className="lane__item">
                <p className="applicant">Tahir Montgomery</p>
                <p className="location">Tampa, Fl</p>
                <p className="location">April 25, 2021</p>
              </div>
              <div className="lane__item">
                <p className="applicant">Tahir Montgomery</p>
                <p className="location">Tampa, Fl</p>
                <p className="location">April 25, 2021</p>
              </div>
              <div className="lane__item">
                <p className="applicant">Tahir Montgomery</p>
                <p className="location">Tampa, Fl</p>
                <p className="location">April 25, 2021</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="lane">
            <div className="lane__header color4">
              <VideoCallIcon fontSize="large" />
              <h3>Interviewing</h3>
              <h3>25</h3>
            </div>
            <div className="lane__items">
              <div className="lane__item">
                <p className="applicant">Tahir Montgomery</p>
                <p className="location">Tampa, Fl</p>
                <p className="location">April 25, 2021</p>
              </div>
              <div className="lane__item">
                <p className="applicant">Tahir Montgomery</p>
                <p className="location">Tampa, Fl</p>
                <p className="location">April 25, 2021</p>
              </div>
              <div className="lane__item">
                <p className="applicant">Tahir Montgomery</p>
                <p className="location">Tampa, Fl</p>
                <p className="location">April 25, 2021</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

interface JobInfoProps {
  value: Number;
  setValue: Function;
}
function JobInfo({ value, setValue }: JobInfoProps) {
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <div className="jobInfo">
      <div className="jobInfo__header">
        <div className="title">
          <h2>Full Stack Software Engineer</h2>
          <div className="actions">
            <div>
              <p>Edit Job</p>
            </div>
            <div>
              <p>Create new</p>
            </div>
          </div>
        </div>

        <div className="jobInfo__nav">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            className={classes.indicator}
          >
            <Tab disableRipple label="Job Info" />
            <Tab disableRipple label="Applicants" />
            <Tab disableRipple label="Milestones" />
          </Tabs>
        </div>
      </div>

      <div hidden={value !== 0}>
        <Info />
      </div>
      <div hidden={value !== 1}>
        <ApplicantsTable />
      </div>
      <div hidden={value !== 2}>
        {" "}
        <Milestones />
      </div>
    </div>
  );
}

interface JobBoardProps {
  setRoute: Function;
}
function JobBoard({ setRoute }: JobBoardProps) {
  const route = useRouteMatch();
  setRoute(route.path);
  const [active, setActive] = useState(0);
  const [value, setValue] = React.useState(0);
  return (
    <Container disableGutters maxWidth="xl">
      <Grid className="job__board" container>
        <Grid className="job__board__jobs" item md={3}>
          <JobList active={active} setActive={setActive} />
        </Grid>
        <Grid item md={9}>
          <JobInfo setValue={setValue} value={value} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default JobBoard;
