import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import './App.css';
import RegisterForm from './components/registerForm';
import NotFound from './components/notFound';
import Patient from './components/patient';
import Checkup from './components/checkup';
import PatientForm from './components/patientForm';

function App() {
  return (
    <React.Fragment>
        <NavBar />
        <Routes>
          <Route path='/register' element={<RegisterForm/>} />
          <Route path='/patient/:id' element={<Patient />} />
          <Route path='/patient' element={<PatientForm />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Navigate replace to="/register" />} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
