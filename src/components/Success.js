import React from "react";
import { withRouter } from "react-router";



class Success extends React.Component {

    constructor(props) {
        super(props)
        console.log(props);
    }

    render() {
        const { history } = this.props;
        const rawHTML = history.location.data.data;
        return (
            <div className="success">
            <button onClick={() => { history.push("/templates/results"); }}> &#x2190; Back to Results</button>
            <div className="template" dangerouslySetInnerHTML={{ __html: rawHTML }} />
            <textarea rows="15" cols="150" defaultValue={rawHTML} />
            </div>
         
        );
    }
}

export default withRouter(Success);