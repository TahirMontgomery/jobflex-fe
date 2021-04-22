import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="jobflex.us.auth0.com"
      clientId="nc59Li6o2CDR6HfhjBErhllYpr4vgZ2F"
      redirectUri={`${window.location.origin}/register`}
      audience="https://jobflex.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
