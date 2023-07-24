import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginForm } from '../users/LoginForm';
import { RegisterForm } from '../users/RegisterForm';
import { InspectionHistory } from '../inspection/InspectionHistory';
import { InspectionForm } from '../inspection/InspectionForm';
import { ManageInspections } from '../inspection/ManageInspections';
import { EditInspection } from '../inspection/EditInspection';
import { CreateInspection } from '../inspection/CreateInspection';
import { ManageUsers } from '../users/ManageUsers';
import { Contact } from '../support/Contact';
import { InspectionDetail } from '../inspection/InspectionDetail';
import { Profile } from '../users/Profile';
import { Dashboard } from '../dashboard/Dashboard'
import { Inspections } from '../inspection/Inspections';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/inspections" element={<Inspections />} />
      <Route path="/inspection-form/:id" element={<InspectionForm />} />
      <Route path="/inspection-history" element={<InspectionHistory />} />
      <Route path="/inspection-detail/:id" element={<InspectionDetail />} />
      <Route path="/manage-inspections" element={<ManageInspections />} />
      <Route path="/manage-inspections/edit/:id" element={<EditInspection />} />
      <Route path="/create-inspection" element={<CreateInspection />} />
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export { RoutesComponent };

