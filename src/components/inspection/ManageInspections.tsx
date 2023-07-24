// ManageInspections.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ManageInspections: React.FC = () => {
  // This would usually come from a back-end server.
  const [inspections, setInspections] = useState([
    {
      id: 1,
      name: "Inspection 1",
    },
    {
      id: 2,
      name: "Inspection 2",
    },
    // Add as many inspections as you want.
  ]);

  useEffect(() => {
    // Here you would usually make a GET request to your back-end server.
    // For the purpose of this example, we'll use the initial inspections set above.
  }, []);

  return (
    <div>
      <h1>Manage Inspections</h1>
      <Link to="/create-inspection">Create New Inspection</Link>
      {inspections.map((inspection) => (
        <div key={inspection.id}>
          <h2>{inspection.name}</h2>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
};

export { ManageInspections };

