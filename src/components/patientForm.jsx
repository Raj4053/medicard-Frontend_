import React from "react";
import Form from "./common/form";
import withRouter from "./utils/withRouter";
import Joi from "joi-browser";

class PatientForm extends Form {
  state = {
    data: {
      _id: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string().length(24).required().label("Patient Id"),
  };

  doSubmit = async () => {
    //Call the Server
    const {data} = this.state;
    const {pathname} = this.props.location;
    
    this.props.navigate(`${pathname}/${data._id}`, { state: data }, { replace: true });
  };

  render() {
    return (
      <div>
        <h1>Patient Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("_id", "Patient Id")}
          {this.renderButton("Go")}
        </form>
      </div>
    );
  }
}

export default withRouter(PatientForm);
