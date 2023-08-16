import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { InspectionContext } from './inspection-context';

const Inspection: React.FC = () => {
  const { inspection } = useContext(InspectionContext);

  // This useEffect will run every time the inspection state changes
  useEffect(() => {
    console.log('Inspection state:', inspection);
  }, [inspection]);

  return (
    <div className="bg-dms p-4 ">
      <h2 className="text-dmoncont bg-dmcont text-2xl justify-items-center text-center rounded-lg w-40 font-bold p-4 mb-4">Inspection</h2>
      {inspection.length === 0 ? (
        <p className="text-dmoncont">No inspection found.</p>
      ) : (
        <div>
          {inspection.map((inspection) => (
            <Link to={`/inspection-form/${inspection.id}`} className="grid grid-cols-4 dark:bg-dmcont  place-items-center text-lg w-40 dark:text-dmoncont dark:hover:bg-secondary shadow-inner rounded mb-4 p-4">
                <h2 className="grid grid-rows-4 text-2xl ">{inspection.name}</h2>
              
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export { Inspection };
