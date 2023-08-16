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
    <div className="bg-primary text-center dark:bg-dmseccont w-full h-full rounded-sm shadow-inner dark:shadow-dms "><h2 className=" w-full p-4 mb-4 bg-dmonsec text-dmonseccont text-xl font-bold m-auto">Manage Inspection</h2>
    
    <div className="p-4 grid grid-cols-2 ">
    
    
      
      {inspection.length === 0 ? (
        <p className="text-white text-center">No inspections have been created yet.</p>
      ) : (
        inspection.map((inspection) => (
          <div key={inspection.id} className="grid grid-cols-1 grid-rows-1  w-48 m-auto p-8 text-lg shadow-inner hover:shadow border dark:bg-dmonsec dark:text-dmonseccont dark:border-dmonseccont dark:shadow-dms dark:hover:shadow-dms dark:hover:bg-dmseccont dark:hover:text-dmons rounded mb-4">
            <h2 className="m-auto text-center mb-4  font-bold ">{inspection.name}</h2>
            <div className="grid grid- place-items-center">
            <Link to={`/manage-inspection/edit/${inspection.id}`} className="bg-edit w-32 text-white text-center text-md shadow hover:bg-edithover rounded-sm p-2  mb-4">Edit</Link>
            <button onClick={() => deleteInspection(inspection.id)} className="bg-dmerrorcont w-32 text-white text-center text-md shadow hover:bg-dmonerror rounded-sm p-2  mb-4">Delete</button>
            </div>
          </div>
        ))
      )}
      </div>
    </div>
    
  );
};

export { ManageInspection };
