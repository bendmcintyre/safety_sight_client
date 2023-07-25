import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

interface Inspection {
  name: string;
  lift: string;
  date: string;
}

const InspectionHistory = () => {
  const [inspection, setInspection] = useState<Inspection[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const submittedInspection = JSON.parse(localStorage.getItem('inspection') || '[]');
    setInspection(submittedInspection);
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredInspection = inspection.filter(
    (inspection) =>
      inspection.name.toLowerCase().includes(search.toLowerCase()) ||
      inspection.lift.toLowerCase().includes(search.toLowerCase()) ||
      inspection.date.includes(search)
  );

  return (
    <div className="bg-background p-4">
      <h2 className="text-primary text-lg font-bold mb-4">Inspection History</h2>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
        className="mb-4"
      />

      {filteredInspection.length === 0 ? (
        <p className="text-primary">No inspection submitted yet.</p>
      ) : (
        <div>
          {filteredInspection.map((inspection, index) => (
            <Link to={`/inspection-detail/${index}`} className="block bg-white shadow rounded mb-4 p-4">
              <div className="flex justify-between">
                <p className="mr-2">Name: {inspection.name}</p>
                <p className="mr-2">Lift: {inspection.lift}</p>
                <p>Date: {inspection.date}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export { InspectionHistory };
