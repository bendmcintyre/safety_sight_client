// EditInspection.tsx

import React, { useState } from 'react';

interface InspectionItem {
  name: string;
  type: 'text' | 'date' | 'pass/fail';
}

const EditInspection: React.FC = () => {
  const [inspectionItems, setInspectionItems] = useState<InspectionItem[]>([]); 
  const [itemName, setItemName] = useState('');
  const [itemType, setItemType] = useState('text');

  const addInspectionItem = () => {
    setInspectionItems(prevItems => [...prevItems, { name: itemName, type: itemType as 'text' | 'date' | 'pass/fail' }]);
    setItemName('');
  };

  return (
    <div className="bg-background p-4">
      <h2 className="text-primary text-lg font-bold mb-4">Edit Inspection</h2>
      <div className="mb-4">
        <input 
          type="text" 
          value={itemName} 
          onChange={e => setItemName(e.target.value)} 
          placeholder="Enter item name" 
          className="border rounded p-2"
        />
        <select 
          value={itemType} 
          onChange={e => setItemType(e.target.value)} 
          className="border rounded p-2 ml-2"
        >
          <option value="text">Text</option>
          <option value="date">Date</option>
          <option value="pass/fail">Pass/Fail</option>
        </select>
        <button onClick={addInspectionItem} className="bg-blue-500 text-white rounded p-2 ml-2">Add</button>
      </div>
      {inspectionItems.map((item, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">{item.name}</label>
          {item.type === 'text' && <input type="text" className="block w-full border rounded p-2" />}
          {item.type === 'date' && <input type="date" className="block w-full border rounded p-2" />}
          {item.type === 'pass/fail' && (
            <div className="flex items-center space-x-2">
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
