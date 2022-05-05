import React, { Component } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getPatient } from "./../services/patientService";
import withRouter from "./utils/withRouter";

class Patient extends Component {
  state = { data: "", errors: {} };

  async componentDidMount() {
    const { data } = await getPatient(this.props.params.id);

    this.setState({ data });
  }

  render() {
    const { data: patient } = this.state;

    return (
      <div>
         <p className="text-sm-start">Name: {patient.name}</p>
        <p className="text-sm-start">ID: {patient._id}</p>
        <p className="text-sm-start">Date of Birth: {patient.dob}</p>
        <p className="text-sm-start">Phone No: {patient.phone}</p>
        <p className="text-sm-start">Sex: {patient.sex}</p>
        <p className="text-sm-start">Blood Group: {patient.bloodGroup}</p>
        <p className="text-sm-start">Height: {patient.height}</p>
        <p className="text-sm-start">Weight: {patient.weight}</p>
      </div>
    );
  }
}

export default withRouter(Patient);
