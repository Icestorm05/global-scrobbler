import React, { FunctionComponent } from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = Loadable({
  loader: () => import("~/routes/Home/Home"),
  loading: () => <div>Loading...</div>,
});

const Routes: FunctionComponent = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

export default Routes;
