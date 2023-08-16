import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InspectionContext } from './inspection-context';

interface InspectionItem {
  name: string;
  type: 'text' | 'date' | 'pass/fail';
}

const EditInspection: React.FC = () => {
  const { id } = useParams<{id?: string}>();  // Change here
  const { getInspectionById } = useContext(InspectionContext);
  const [inspectionItems, setInspectionItems] = useState<InspectionItem[]>([]); 
  const [itemName, setItemName] = useState('');
  const [itemType, setItemType] = useState('text');

  

  useEffect(() => {
    const inspection = getInspectionById(Number(id));
    if (inspection && inspection.questions) {
      const items = inspection.questions.map(question => ({ name: question, type: 'text' as 'text' | 'date' | 'pass/fail' }));
      setInspectionItems(items);
    }
  }, [id, getInspectionById]);

  const addInspectionItem = () => {
    setInspectionItems(prevItems => [...prevItems, { name: itemName, type: itemType as 'text' | 'date' | 'pass/fail' }]);
    setItemName('');
  };

  const deleteInspectionItem = (index: number) => {
    const newItems = [...inspectionItems];
    newItems.splice(index, 1);
    setInspectionItems(newItems);
  };

  return (
    
    <div className="p-4 grid grid-cols-2 rounded-lg bg-primary">
     
      <h2 className="text-white text-3xl text-center shadow-inner rounded-lg bg-primary dark:bg-dms w-80 h-12 font-bold mb-4 col-span-2">Edit Inspection</h2>
      
      <div className="mb-4 col-span-2">
        
        <input 
          type="text" 
          value={itemName} 
          onChange={e => setItemName(e.target.value)} 
          placeholder="Enter Item Name" 
          className="peer h-full w-64 border-b border-blue-gray-200 bg-transparent pt-4 pb-1 mb-4 mr-4 font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
        />
        <select 
          value={itemType} 
          onChange={e => setItemType(e.target.value)} 
          className="peer rounded border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        >
          <option value="text">Text</option>
          <option value="date">Date</option>
          <option value="pass/fail">Pass/Fail</option>
        </select>
        <button onClick={addInspectionItem} className="bg-submit text-white rounded w-40  p-2 ml-2">Add</button>
        
        <button
         onClick={() => deleteInspectionItem(0)}
          className="bg-error text-white dark:bg-dmerrorcont dark:text-dmerroroncont rounded w-40 p-2 ml-2"
        >
          Delete
        </button>
      </div>
      {inspectionItems.map((item, index) => (
        <div key={index} className="text-white mb-4 w-60 h-1/2">
          <label className="block mb-2 ">{item.name}</label>
          {item.type === 'text' && <input type="text" className="block w-full m-4 p-4 shadow rounded bg-secondary dark:bg-dms text-white" />}
          {item.type === 'date' && <input type="date" className="block w-full m-4 p-4 shadow rounded bg-secondary dark:bg-dms text-white" />}
          {item.type === 'pass/fail' && (
            <div className="flex items-center space-x-2 w-60 h-1/2">
              <button className="bg-green-500 text-white rounded m-4 p-4">Pass</button>
              <button className="bg-red-500 text-white rounded m-4 p-4">Fail</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { EditInspection };
