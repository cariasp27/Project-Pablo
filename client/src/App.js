import React from "react";
import Moment from "react-moment";
import "moment-timezone"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Art from "./pages/Art"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/art" component={Art} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
