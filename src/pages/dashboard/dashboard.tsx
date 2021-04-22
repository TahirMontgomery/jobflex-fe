import React, { useState } from "react";
import { StatCard, Paper, ActiveJobs } from "jb-components";
import WorkIcon from "@material-ui/icons/Work";
import PersonIcon from "@material-ui/icons/Person";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import { Container, Grid } from "@material-ui/core";
import "./dashboard.scss";
import { useLocation, useRouteMatch } from "react-router";

function Jobs() {
  let jobList: Number[] = new Array(5).fill(1);

  return (
    <div>
      {jobList.map((job, index) => (
        <ActiveJobs key={index} />
      ))}
    </div>
  );
}

interface DashboardProps {
  setRoute: Function;
}
function Dashboard({ setRoute }: DashboardProps) {
  const route = useRouteMatch();
  setRoute(route.path);
  return (
    <Container className="dashboard" maxWidth="xl">
      <Grid className="stats" container spacing={7}>
        <Grid item md={3}>
          <StatCard
            value={12}
            text="Active Jobs"
            logo={<WorkIcon style={{ fontSize: 50 }} />}
            color="#6095D8"
          />
        </Grid>
        <Grid item md={3}>
          <StatCard
            value={12}
            text="Recent Applicants"
            logo={<PersonIcon style={{ fontSize: 50 }} />}
            color="#F06449"
          />
        </Grid>
        <Grid item md={3}>
          <StatCard
            value={12}
            text="Interviews Scheduled"
            logo={<ScheduleIcon style={{ fontSize: 50 }} />}
            color="#243042"
          />
        </Grid>
        <Grid item md={3}>
          <StatCard
            value={12}
            text="Recent Applicants"
            logo={<EventAvailableIcon style={{ fontSize: 50 }} />}
            color="#00C49A"
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={8}>
          <Paper title={"Active Jobs"}>
            <Jobs />
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper title={"Active"}>
            <Jobs />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
