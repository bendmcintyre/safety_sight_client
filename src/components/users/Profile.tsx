import React from 'react';
import { useAppStore } from '../../store';

const Profile: React.FC = () => {
  const user = useAppStore.use.user();

  console.log('USER:', user);

  return (
    <>
      {user ? (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-white">Profile Page</h1>
      <div className="bg-primary shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-3 text-white">User Information</h2>
        <p className="text-lg text-white">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="text-lg text-white">
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
      ) : ('')}
      </>
  );
}

export {Profile};

