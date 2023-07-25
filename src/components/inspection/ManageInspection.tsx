import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InspectionContext } from './InspectionContext';

const ManageInspection: React.FC = () => {
  const { inspection, setInspection } = useContext(InspectionContext);

  const deleteInspection = (id: number) => {
    if (window.confirm('Are you sure you want to delete this inspection?')) {
      setInspection(inspection.filter((inspection) => inspection.id !== id));
    }
  };

  return (
    <div className="bg-background p-4">
      <h2 className="text-primary text-lg font-bold mb-4">Manage Inspection</h2>
      <Link to="/create-inspection" className="block bg-white shadow rounded mb-4 p-4">
        Create New Inspection
      </Link>
      {inspection.length === 0 ? (
        <p className="text-primary">No inspection found.</p>
      ) : (
        inspection.map((inspection) => (
          <div key={inspection.id} className="block bg-white shadow rounded mb-4 p-4">
            <h2 className="mr-2">{inspection.name}</h2>
            <button onClick={() => deleteInspection(inspection.id)} className="bg-red-500 text-white rounded p-2">Delete</button>
            <Link to={`/manage-inspection/edit/${inspection.id}`} className="bg-blue-500 text-white rounded p-2 ml-2">Edit</Link>
          </div>
        ))
      )}
    </div>
  );
};

export { ManageInspection };
