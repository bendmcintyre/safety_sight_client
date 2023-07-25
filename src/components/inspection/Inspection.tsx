import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { InspectionContext } from './InspectionContext';

const Inspection: React.FC = () => {
  const { inspection } = useContext(InspectionContext);

  // This useEffect will run every time the inspection state changes
  useEffect(() => {
    console.log('Inspection state:', inspection);
  }, [inspection]);

  return (
    <div className="bg-background p-4">
      <h2 className="text-primary text-lg font-bold mb-4">Inspection</h2>
      {inspection.length === 0 ? (
        <p className="text-primary">No inspection found.</p>
      ) : (
        <div>
          {inspection.map((inspection) => (
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

export { Inspection };
