import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InspectionContext } from './InspectionContext';

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

  const deleteInspectionItem = () => {
    setInspectionItems(prevItems => [...prevItems]);
    setItemName(''); 
  }

  return (
    <div className="bg-background p-4 ">
      <h2 className="text-primary text-lg w-60 h-1/2 font-bold mb-4">Edit Inspection</h2>
      <div className="mb-4">
        <input 
          type="text" 
          value={itemName} 
          onChange={e => setItemName(e.target.value)} 
          placeholder="Enter item name" 
          className="border rounded p-2 w-60 h-1/2"
        />
        <select 
          value={itemType} 
          onChange={e => setItemType(e.target.value)} 
          className="border rounded p-2 ml-2 "
        >
          <option value="text">Text</option>
          <option value="date">Date</option>
          <option value="pass/fail">Pass/Fail</option>
        </select>
        <button onClick={addInspectionItem} className="bg-blue-500 text-white rounded w-60 h-1/2 p-2 ml-2">Add</button>
        <button onClick={deleteInspectionItem} className="bg-red-500 text-white rounded w-60 h-1/2 p-2 ml-2">Delete</button>
        
      </div>
      {inspectionItems.map((item, index) => (
        <div key={index} className="text-white mb-4 w-60 h-1/2">
          <label className="block mb-2 ">{item.name}</label>
          {item.type === 'text' && <input type="text" className="block w-full border rounded p-2 text-black" />}
          {item.type === 'date' && <input type="date" className="block w-full border rounded p-2 text-black" />}
          {item.type === 'pass/fail' && (
            <div className="flex items-center space-x-2 w-60 h-1/2">
              <button className="bg-green-500 text-white rounded p-2">Pass</button>
              <button className="bg-red-500 text-white rounded p-2">Fail</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { EditInspection };
