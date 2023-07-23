import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginForm } from '../authentication/LoginForm';
import { RegisterForm } from '../authentication/RegisterForm';
import { InspectionHistory } from '../inspection/InspectionHistory';
import { InspectionForm } from '../inspection/InspectionForm';
import { ManageInspections } from '../manage/ManageInspections';
import { ManageUsers } from '../manage/ManageUsers';
import { Contact } from '../support/Contact';
import { InspectionDetail } from '../inspection/InspectionDetail';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/inspection-form" element={<InspectionForm />} />
      <Route path="/inspection-history" element={<InspectionHistory />} />
      <Route path="/inspection-detail" element={<InspectionDetail />} />
      <Route path="/manage-inspections" element={<ManageInspections />} />
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export { RoutesComponent };
