import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

// Define the type for the inspection object
interface Inspection {
  name: string;
  lift: string;
  hours: string;
  date: string;
  tires: string;
  horn: string;
  battery: string;
  controls: string;
  brakes: string;
  steering: string;
  hydraulics: string;
  overheadGuard: string;
  charger: string;
  fallArrest: string;
  loadPlateDisplayed: string;
  operatorsManualPresent: string;
  cleanForklift: string;
  deficienciesPresent: string;
}

const InspectionHistory = () => {
  const [inspections, setInspections] = useState<Inspection[]>([]);

  useEffect(() => {
    // Retrieve the submitted inspections from localStorage on component mount
    const submittedInspections = JSON.parse(localStorage.getItem('inspections') || '[]');
    setInspections(submittedInspections);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Inspection History</h2>
      {inspections.length === 0 ? (
        <p>No inspections submitted yet.</p>
      ) : (
        <ul>
          {inspections.map((inspection, index) => (
            <li key={index}>
              <p>Name: {inspection.name}</p>
              <p>Lift: {inspection.lift}</p>
              <p>Hours: {inspection.hours}</p>
              <p>Date: {inspection.date}</p>
              {/* Display other inspection details */}
              <p>Tires: {inspection.tires}</p>
              <p>Horn: {inspection.horn}</p>
              <p>Battery: {inspection.battery}</p>
              <p>Controls: {inspection.controls}</p>
              <p>Brakes: {inspection.brakes}</p>
              <p>Steering: {inspection.steering}</p>
              <p>Hydraulics: {inspection.hydraulics}</p>
              <p>Overhead Guard: {inspection.overheadGuard}</p>
              <p>Charger: {inspection.charger}</p>
              <p>Fall Arrest: {inspection.fallArrest}</p>
              <p>Load Plate Displayed: {inspection.loadPlateDisplayed}</p>
              <p>Operators Manual Present: {inspection.operatorsManualPresent}</p>
              <p>Clean Forklift: {inspection.cleanForklift}</p>
              <p>Deficiencies Present: {inspection.deficienciesPresent}</p>
              {/* ... */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InspectionHistory;
