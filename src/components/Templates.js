import React from "react";
import { withRouter } from "react-router";

class Templates extends React.Component {

  render() {
    const { history } = this.props;
    return (
      <div>
        <h1>Templates Search</h1>
        <div>
          <button className="btn" onClick={() => { history.push("/templates/results"); }} >View Results</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Templates);
