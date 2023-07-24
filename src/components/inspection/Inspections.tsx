// Inspections.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Inspections: React.FC = () => {
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
      <h1>Inspections</h1>
      {inspections.map((inspection) => (
        <div key={inspection.id}>
          <h2>{inspection.name}</h2>
          <Link to={`/inspection-form/${inspection.id}`}>Start</Link>
        </div>
      ))}
    </div>
  );
};

export { Inspections };
