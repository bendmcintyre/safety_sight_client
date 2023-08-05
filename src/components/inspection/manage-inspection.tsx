import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InspectionContext } from './inspection-context';

const ManageInspection: React.FC = () => {
  const { inspection, setInspection } = useContext(InspectionContext);

  const deleteInspection = (id: number) => {
    if (window.confirm('Are you sure you want to delete this inspection?')) {
      setInspection(inspection.filter((inspection) => inspection.id !== id));
    }
  };

  return (
    <div className="bg-primary border-dmbg hover:shadow-dms shadow-primary border  shadow-inner p-4">
      <h2 className="text-white text-lg font-bold mb-4">Manage Inspection</h2>
      <Link to="/create-inspection" className="block bg-secondary shadow-inner rounded-xl mb-4 p-4 dark:bg-dms dark:text-white dark:hover:bg-secondary ">
        Create New Inspection
      </Link>
      {inspection.length === 0 ? (
        <p className="text-white">No inspections have been created yet.</p>
      ) : (
        inspection.map((inspection) => (
          <div key={inspection.id} className="grid grid-cols-1 grid-rows-3  dark:bg-dms dark:text-white dark:hover:bg-bmbg shadow-inner hover:shadow-dms shadow-bgs rounded mb-4 p-4">
            <h2 className="mr-2">{inspection.name}</h2>
            <Link to={`/manage-inspection/edit/${inspection.id}`} className="bg-blue-500 w-32 text-white text-center shadow-inner rounded-sm  p-2 ml-2 mb-4">Edit</Link>
            <button onClick={() => deleteInspection(inspection.id)} className="bg-red-500 w-32 text-white text-center shadow-inner rounded-sm p-2 ml-2 mb-4">Delete</button>
            
          </div>
        ))
      )}
    </div>
  );
};

export { ManageInspection };
