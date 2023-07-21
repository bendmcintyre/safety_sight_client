import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './authentication/LoginForm';
import Register from './authentication/RegisterForm';
import InspectionHistory from './inspection/InspectionHistory';
import InspectionForm from './inspection/InspectionForm';
import ManageInspections from './manage_inspections/ManageInspections';
import ManageUsers from './manage_users/ManageUsers';
import Contact from './support/Contact';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/inspection-form" element={<InspectionForm />} />
      <Route path="/inspection-history" element={<InspectionHistory />} />
      <Route path="/manage-inspections" element={<ManageInspections />} />
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesComponent;
