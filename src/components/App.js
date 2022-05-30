import React from "react";
import { Redirect, Switch, Route, withRouter } from "react-router";

// import Templates from "./Templates";
import Results from "./Results";
import Details from "./Details";
import Success from "./Success";

class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/results" />} />
        <Route path="/results" component={Results} />
        <Route path="/details" component={Details} />
        <Route path="/success" component={Success} />
        <Route render={() => <Redirect to="/results" />} />
      </Switch>
    );
  }
}

export default withRouter(App);
