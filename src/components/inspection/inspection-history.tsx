import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InspectionContext } from './inspection-context';


const InspectionHistory: React.FC = () => {
  const { submittedInspections } = useContext(InspectionContext);

  return (
    <div>
      
    <div className="bg-primary dark:bg-dmseccont shadow-inner shadow-dms grid-col-2 grid-row-3">
      <h2 className="text-dmoncont bg-dmcont dark:bg-dmonsec dark:text-dmonseccont text-xl text-center py-4 font-bold mb-8 ">Inspection History</h2>
      {submittedInspections.length === 0 ? (
        <p className="text-white  ">No inspection submitted yet.</p>
      ) : (
        <div>
          
          {submittedInspections.map((inspection) => (
            <Link to={`/inspection-detail/${inspection.id}`} className=" h-16 w-72 grid grid-rows-4 grid-flex-cols grid-flow-col gap-4 text-center whitespace-normal shadow rounded-xl mb-4 p-4 bg-secondary text-primary  dark:text-white dark:bg-dmonsec dark:hover:bg-dms hover:bg-dmons hover:shadow-dmbg">
                
                <h2 className=" bg-dmsv text-primary dark:text-dmons  text-center text-lg">{inspection.name}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export { InspectionHistory };
