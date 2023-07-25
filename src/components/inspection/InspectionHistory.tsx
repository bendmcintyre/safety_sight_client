import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InspectionContext } from './InspectionContext';

const InspectionHistory: React.FC = () => {
  const { submittedInspections } = useContext(InspectionContext);

  return (
    <div className="bg-background p-4">
      <h2 className="text-white text-lg font-bold mb-4">Inspection History</h2>
      {submittedInspections.length === 0 ? (
        <p className="text-white">No inspection submitted yet.</p>
      ) : (
        <div>
          {submittedInspections.map((inspection) => (
            <Link to={`/inspection-detail/${inspection.id}`} className="text-white block bg-white shadow rounded mb-4 p-4">
              <div className="flex justify-between">
                <h2 className="mr-2 text-primary">{inspection.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export { InspectionHistory };
