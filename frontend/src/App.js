import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Food from "./food/pages/Food";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Food />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
