import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './authentication/LoginForm';
import Register from './authentication/RegisterForm';
import InspectionHistory from './inspection/InspectionHistory';
import InspectionForm from './inspection/InspectionForm';
import InspectionList from './inspection/InspectionList';
import InspectionTypeManagement from './inspection_type_management/InspectionTypeManagement';
import UserManagement from './user_management/UserManagement';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/inspection-form" element={<InspectionForm />} />
      <Route path="/inspection-history" element={<InspectionHistory />} />
      <Route path="/inspection-list" element={<InspectionList />} />
      <Route path="/inspection-type-management" element={<InspectionTypeManagement />} />
      <Route path="/user-management" element={<UserManagement />} />
    </Routes>
  );
}

export default RoutesComponent;
