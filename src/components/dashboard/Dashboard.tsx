import React from 'react';
import { LeftBar } from '../navbar/left-bar';
import { InspectionHistory } from '../inspection/inspection-history';
import { ManageInspection } from '../inspection/manage-inspection';

const Dashboard: React.FC = () => {
  return (
    <div className="">
    <div className="  mx-4 h-full w-full"> 
      
    <div className=" mx-4 h-full w-full shadow-inner  py-10">
   
        <h1 className="text-white bg-secondary dark:bg-primary text-start rounded-lg indent-20 text-4xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-rows-3 grid-flow-col gap-4 bg-primary ">
              
              <div className="grid grid-cols-8 grid-rows-2 gap-8 sitcky top-52">
              <LeftBar />
              <div className="col-span-4 bg-primary dark:bg-dms">
                <InspectionHistory />
                
                </div>
                <div className="col-span-3 ">
                <ManageInspection />
                </div>
                
                
              </div>
            </div>
    </div>
    </div>
    </div>
  );
}

export {Dashboard};
