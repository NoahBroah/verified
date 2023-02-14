import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateNewJob from "./components/CreateNewJob";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import { JobsProvider } from "./JobsContext";


function App() {
  return (
    
      <JobsProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/create_job" component={CreateNewJob} />
          </Switch>
        </Router>
      </JobsProvider>
    
  );
};

export default App;
