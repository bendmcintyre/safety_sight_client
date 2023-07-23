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
    const submittedInspections: InspectionData[] = JSON.parse(localStorage.getItem('inspections') || '[]');
    const inspectionId = id ? parseInt(id, 10) : -1;
    if (inspectionId !== -1) {
      setInspection(submittedInspections[inspectionId]);
    }
  }, [id]);

  if (!inspection) return <p>No inspection found</p>;

  const backToHistory = () => {
    navigate(-1); 
  };

  return (
    <div>
      <button onClick={backToHistory}>Back to history</button>
      <h1>{inspection.name}</h1>
      <h2>{inspection.lift}</h2>
      <h3>{inspection.date}</h3>
      {/* Display the rest of the inspection details as desired */}
      <p>Tires: {inspection.tires}</p>
      <p>Horn: {inspection.horn}</p>
      {/* Add the rest of the inspection fields... */}
    </div>
  );
}

export { InspectionDetail };
