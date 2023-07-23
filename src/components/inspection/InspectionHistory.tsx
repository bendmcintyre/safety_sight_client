import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

interface Inspection {
  name: string;
  lift: string;
  date: string;
}

const InspectionHistory = () => {
  const [inspections, setInspections] = useState<Inspection[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const submittedInspections = JSON.parse(localStorage.getItem('inspections') || '[]');
    setInspections(submittedInspections);
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredInspections = inspections.filter(
    (inspection) =>
      inspection.name.toLowerCase().includes(search.toLowerCase()) ||
      inspection.lift.toLowerCase().includes(search.toLowerCase()) ||
      inspection.date.includes(search)
  );

  return (
    <div className="bg-background  p-4">
      <h2 className="text-primary text-lg font-bold mb-4">Inspection History</h2>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />

      {filteredInspections.length === 0 ? (
        <p className="text-primary">No inspections submitted yet.</p>
      ) : (
        <ul>
          {filteredInspections.map((inspection, index) => (
            <li key={index}>
              <Link to={`/inspection-detail/${index}`}>
                <p>Name: {inspection.name}</p>
                <p>Lift: {inspection.lift}</p>
                <p>Date: {inspection.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { InspectionHistory };
