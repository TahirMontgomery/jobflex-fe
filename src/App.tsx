import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { Container } from "@material-ui/core";
import {
  Inbox,
  Register,
  Dashboard,
  Login,
  JobBoard,
  Applicants,
} from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import { Sidebar, Navbar } from "jb-components";
import { Worker } from "@react-pdf-viewer/core";

export default function App() {
  const { logout } = useAuth0();
  const [open, setOpen] = useState(true);
  const [route, setRoute] = useState("");

  function calcMargin() {
    return open ? "250px" : "70px";
  }

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

        <Sidebar currentRoute={route} open={open} />

        <Switch>
          <Container
            style={{
              paddingLeft: calcMargin(),
            }}
            maxWidth={"xl"}
            disableGutters
          >
            <Navbar />
            <Route path="/dashboard">
              <Dashboard setRoute={setRoute} />
            </Route>
            <Route path="/board">
              <JobBoard setRoute={setRoute} />
            </Route>
            <Route path="/applicants">
              <Applicants setRoute={setRoute} />
            </Route>
            <Route path="/inbox">
              <Inbox setRoute={setRoute} />
            </Route>
            <Route path="/"></Route>
          </Container>
        </Switch>
      </Worker>
    </div>
  );
}
