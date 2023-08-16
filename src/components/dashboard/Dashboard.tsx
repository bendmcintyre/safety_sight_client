import React from 'react';

import { LeftBar } from '../navbar/left-bar';
import { InspectionHistory } from '../inspection/inspection-history';
import { ManageInspection } from '../inspection/manage-inspection';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-bg dark:bg-dmbg  h-full w-full shadow-inner py-10">
        <div className="bg-s dark:bg-dmseccont text-start rounded-lg text-4xl font-bold mb-4 ">
        <h1 className="text-ons  dark:text-dmsoncont text-center">Dashboard</h1>




        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4 "> 
              <div className="grid grid-cols-8 grid-rows-2 gap-8  ">
              <LeftBar />
              <div className="col-span-4 ">
                <InspectionHistory />
               </div>
              <div className="col-span-3 ">
                <ManageInspection />
              </div> 
              </div>
            </div>
    </div>
    
    
  );
}

export {Dashboard};
