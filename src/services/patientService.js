import http from "./httpService";
import config from "../config.json";

const apiEndpoint = "/patients";

function patientUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getPatient(patientId) {
  return http.get(patientUrl(patientId));
}

export function savePatients(patient) {
  if (patient._id) {
    const body = { ...patient };
    delete body._id;
    return http.put(patientUrl(patient._id), body);
  }

  return http.post(apiEndpoint, patient);
}
