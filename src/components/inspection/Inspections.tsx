import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InspectionsContext } from './InspectionContext';

const Inspections: React.FC = () => {
  const { inspections } = useContext(InspectionsContext);

  return (
    <div className="bg-background p-4">
      <h2 className="text-primary text-lg font-bold mb-4">Inspections</h2>
      {inspections.length === 0 ? (
        <p className="text-primary">No inspections found.</p>
      ) : (
        <div>
          {inspections.map((inspection) => (
            <Link to={`/inspection-form/${inspection.id}`} className="block bg-white shadow rounded mb-4 p-4">
              <div className="flex justify-between">
                <h2 className="mr-2">{inspection.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export { Inspections };

