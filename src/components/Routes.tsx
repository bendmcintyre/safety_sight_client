import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './authentication/LoginForm';
import Register from './authentication/RegisterForm';
import Dashboard from './dashboard/Dashboard';
import InspectionDetail from './inspection/InspectionDetail';
import InspectionForm from './inspection/InspectionForm';
import InspectionList from './inspection/InspectionList';
import InspectionTypeManagement from './inspection_type_management/InspectionTypeManagement';
import UserManagement from './user_management/UserManagement';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inspection-detail" element={<InspectionDetail />} />
      <Route path="/inspection-form" element={<InspectionForm />} />
      <Route path="/inspection-list" element={<InspectionList />} />
      <Route path="/inspection-type-management" element={<InspectionTypeManagement />} />
      <Route path="/user-management" element={<UserManagement />} />
    </Routes>
  );
}

export default RoutesComponent;
