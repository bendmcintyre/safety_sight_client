import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InspectionContext } from './inspection-context';


const InspectionHistory: React.FC = () => {
  const { submittedInspections } = useContext(InspectionContext);

  return (
    <div>
      
    <div className="bg-primary dark:bg-primary border-dmbg border p-4 grid-col-6 grid-row-3">
      <h2 className="text-white border text-lg font-bold mb-4 ">Inspection History</h2>
      {submittedInspections.length === 0 ? (
        <p className="text-white  ">No inspection submitted yet.</p>
      ) : (
        <div>
          
          {submittedInspections.map((inspection) => (
            <Link to={`/inspection-detail/${inspection.id}`} className=" h-16 w-72 grid grid-rows-4 grid-col-4 grid-flow-col gap-4 text-center whitespace-normal shadow-inner rounded-xl mb-4 p-4 bg-secondary text-primary  dark:text-white dark:bg-dms dark:hover:bg-secondary  hover:shadow-dms">
                <h2 className=" text-primary dark:text-white text-center text-lg">{inspection.name}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export { InspectionHistory };
