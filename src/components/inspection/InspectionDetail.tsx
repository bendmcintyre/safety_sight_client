import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface InspectionData {
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

const InspectionDetail: React.FC = () => {
  const [inspection, setInspection] = useState<InspectionData | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const submittedInspection: InspectionData[] = JSON.parse(localStorage.getItem('inspection') || '[]');
    const inspectionId = id ? parseInt(id, 10) : -1;
    if (inspectionId !== -1) {
      setInspection(submittedInspection[inspectionId]);
    }
  }, [id]);

  if (!inspection) return <p>No inspection found</p>;

  const backToHistory = () => {
    navigate(-1); 
  };

  return (
  <div className="m-6">
    <button onClick={backToHistory} className="mb-4 bg-gradient-to-r from-gradient-start to-gradient-end text-white rounded px-2 py-1">Back to history</button>
    <div className="bg-secondary p-6 rounded-lg grid grid-cols-2 gap-4 text-white">
      <div><span className="font-bold">Name:</span> {inspection.name}</div>
      <div><span className="font-bold">Lift:</span> {inspection.lift}</div>
      <div><span className="font-bold">Date:</span> {inspection.date}</div>
      <div><span className="font-bold">Hours:</span> {inspection.hours}</div>
      <div><span className="font-bold">Tires:</span> {inspection.tires}</div>
      <div><span className="font-bold">Horn:</span> {inspection.horn}</div>
      <div><span className="font-bold">Battery:</span> {inspection.battery}</div>
      <div><span className="font-bold">Controls:</span> {inspection.controls}</div>
      <div><span className="font-bold">Brakes:</span> {inspection.brakes}</div>
      <div><span className="font-bold">Steering:</span> {inspection.steering}</div>
      <div><span className="font-bold">Hydraulics:</span> {inspection.hydraulics}</div>
      <div><span className="font-bold">Overhead Guard:</span> {inspection.overheadGuard}</div>
      <div><span className="font-bold">Charger:</span> {inspection.charger}</div>
      <div><span className="font-bold">Fall Arrest:</span> {inspection.fallArrest}</div>
      <div><span className="font-bold">Load Plate Displayed:</span> {inspection.loadPlateDisplayed}</div>
      <div><span className="font-bold">Operators Manual Present:</span> {inspection.operatorsManualPresent}</div>
      <div><span className="font-bold">Clean Forklift:</span> {inspection.cleanForklift}</div>
      <div><span className="font-bold">Deficiencies Present:</span> {inspection.deficienciesPresent}</div>
    </div>
  </div>
);

}

export { InspectionDetail };
