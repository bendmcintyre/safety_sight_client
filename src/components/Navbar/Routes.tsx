import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginForm } from '../users/login';
import { RegisterForm } from '../users/register';
import { InspectionHistory } from '../inspection/inspection-history';
import { InspectionForm } from '../inspection/inspection-form';
import { EditInspection } from '../inspection/edit-inspection';
import { CreateInspection } from '../inspection/create-inspection'; 
import { ManageUsers } from '../users/manage-users';
import { Contact } from '../support/contact';
import { InspectionDetail } from '../inspection/inspection-detail';
import { Profile } from '../users/profile';
import { Dashboard } from '../dashboard/dashboard';
import { Inspection } from '../inspection/inspection';
import { Settings } from '../support/settings';
import { ManageInspection } from '../inspection/manage-inspection';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/inspection" element={<Inspection />} />
      <Route path="/inspection-form/:id" element={<InspectionForm />} />
      <Route path="/inspection-history" element={<InspectionHistory />} />
      <Route path="/inspection-detail/:id" element={<InspectionDetail />} />
      <Route path="/manage-inspection" element={<ManageInspection />} />
      <Route path="/manage-inspection/edit/:id" element={<EditInspection />} />
      <Route path="/create-inspection" element={<CreateInspection />} />
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export { RoutesComponent };

