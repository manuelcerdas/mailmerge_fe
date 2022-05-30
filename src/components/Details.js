import React from "react";
import { withRouter } from "react-router";
import { Redirect } from 'react-router';


class Details extends React.Component {

  finalFields = {};
  constructor(props) {
    super(props)

    const templateParam = new URLSearchParams(this.props.location.search).get("template");

    // Set initial state
    this.state = {
      templateName: templateParam,
      fields: [],
      template: "",
      finalFields: {},
      val: false
    }

    this.finalF = {};

    this.getTemplateFields = this.getTemplateFields.bind(this);
    this.getTemplateFields();

    this.getTemplate = this.getTemplate.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getTemplateFields() {
    fetch(`https://mailmergev2.azurewebsites.net/getfields/` + this.state.templateName)
      .then(response => response.json())
      .then(data => {
        this.setState({
          fields: data
        });
      });
  }

  getTemplate() {
    fetch(`https://mailmergev2.azurewebsites.net/getcode/` + this.state.templateName)
      .then(response => response.json())
      .then(data => {
        this.setState({
          template: data
        });
        this.replaceValues(this.state.finalFields);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getTemplate();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.state.finalFields[name] = value;
  }

  replaceValues(values) {
    let _template = JSON.parse(JSON.stringify(this.state.template));;
    for (let x in values) {
      const text = `{{${x}}}`;
      _template = _template.replace(text, values[x])
    }
    _template = _template.replaceAll('src="images', 'src="https://mailmergev2.azurewebsites.net/images');
    this.setState({
      template: _template,
      val: true
    });

  };

  render() {
    const { history } = this.props;

    // let _texteArea = "";
    // let _templateView = "";
    // if (this.state.template != "") {
    //   _texteArea = <textarea rows="15" cols="150" defaultValue={this.state.template} />;
    //   _templateView = <div dangerouslySetInnerHTML={{ __html: this.state.template }} />;
    // }
    if (this.state.val)
      return <Redirect to={{ pathname: '/success', data: { data: this.state.template } }} />

    return (
      <div className="detail">
        <div>
          <button onClick={() => { history.push("/templates/results"); }}> &#x2190; Back to Results</button>
          <form className='fields-form' onSubmit={this.handleSubmit}>
            {
              this.state.fields.map((item, index) => (
                <label key={index}>
                  {item}:
                  <input type="text" name={item} onChange={this.handleChange} />
                </label>
              ))
            }
            <div><input className="btn" type="submit" value="Get template" /></div>
          </form>
        </div>
        {/* {_texteArea}
        {_templateView} */}
      </div>
    );
  }
}

export default withRouter(Details);

