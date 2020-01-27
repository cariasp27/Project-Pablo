import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Art" component={Art} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;