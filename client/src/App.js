import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { UserProvider } from "./UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Define more routes here */}
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;
