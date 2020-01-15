import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage, Restaurant } from "./pages";
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
