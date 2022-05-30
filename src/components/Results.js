import React from "react";
import { withRouter } from "react-router";

class Results extends React.Component {

  constructor(props) {
    super(props)

    // Set initial state
    this.state = {
      templates: []
    }

    this.getTemplates = this.getTemplates.bind(this)
    this.getTemplates();
  }

  getTemplates() {
    fetch('https://mailmergev2.azurewebsites.net/list')
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          data[i] = data[i].substring(10);
        }
        this.setState({
          templates: data
        });
      });
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <h1> Templates Search</h1>
        {this.state.templates.map((template, index) => (
          <div className="result-item" key={index}>
            <h2>{template}</h2>
            <button className="btn" onClick={() => { history.push(`/details/?template=${template}`); }}>Get template&#x2192;</button>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Results);
