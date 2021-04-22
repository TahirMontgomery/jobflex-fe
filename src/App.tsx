import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { Container } from "@material-ui/core";
import { Register, Dashboard, Login } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import { Sidebar, Navbar } from "jb-components";

export default function App() {
  const { logout } = useAuth0();
  const [open, setOpen] = useState(true);
  const [route, setRoute] = useState("");

  function calcMargin() {
    return open ? "250px" : "70px";
  }

  return (
    <div>
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
          <Route path="/"></Route>
        </Container>
      </Switch>
    </div>
  );
}
