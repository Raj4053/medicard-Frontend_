import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { savePatients } from "../services/patientService";
import withRouter from "./utils/withRouter";

class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      dob: "",
      phone: "",
      sex: "",
      bloodGroup: "",
      height: "",
      weight: "",
      // alcoholDependency: false,
      // smoking: false,
      // drugDependece: false,
      // alzheimer: false,
      // pregnant: false,
    },
    errors: {},
  };

  schema = {
    //Personal Data
    name: Joi.string().min(3).max(20).required().label("Patient Name"),
    dob: Joi.date().required().label("Date of Birth"),
    sex: Joi.string().required().label("Sex"),
    phone: Joi.string().length(10).required().label("Phone Number"),

    //Genral Data
    bloodGroup: Joi.string().required().label("Blood Type"),
    height: Joi.number().required().label("Height"),
    weight: Joi.number().required().label("Weight"),
    //   alcoholDependency: Joi.boolean().required().label("Alcohol Dependency"),
    //   smoking: Joi.boolean().required().label("Smoking"),
    //   drugDependece: Joi.boolean().required().label("Drug Dependence"),
    //   alzheimer: Joi.boolean().required().label("Alzheimer"),
    //   pregnant: Joi.boolean().required().label("Pregnant"),
  };

  doSubmit = async () => {
    //Call the Server
    const { data } = await savePatients(this.state.data);
    console.log(data);

    if (data)
      this.props.navigate(
        `/patient/${data._id}`,
        { state: data },
        { replace: true }
      );
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Patient Name")}
          {this.renderInput("dob", "Date of Birth", "YYYY/MM/DD")}
          {this.renderRadio("sex", "Sex", ["M", "F", "T"])}
          {this.renderInput("phone", "Phone Number")}
          {this.renderSelect("bloodGroup", "Blood Group", [
            "A+",
            "A-",
            "B+",
            "B-",
            "AB+",
            "AB-",
            "O+",
            "O-",
          ])}
          {this.renderInput("height", "Height")}
          {this.renderInput("weight", "Weight")}
          {/* {this.renderCheck("alcoholDependency", "Alcohol Dependency")}
          {this.renderCheck("smoking", "Smoking")}
          {this.renderCheck("drugDependece", "Drug Dependence")}
          {this.renderCheck("alzheimer", "Alzheimer")}
          {this.renderCheck("pregnant", "Pregnant")} */}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default withRouter(RegisterForm);
