import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { InspectionContext, InspectionContextType } from './inspection-context';

interface InspectionItem {
  id: number;
  name: string;
  questions: string[];
  answers?: string[];
}


const InspectionDetail: React.FC = () => {
  const { getInspectionById } = useContext<InspectionContextType>(InspectionContext);
  const [inspection, setInspection] = useState<InspectionItem | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const inspectionId = id ? parseInt(id, 10) : -1;
    if (inspectionId !== -1) {
      const inspectionData = getInspectionById(inspectionId);
      setInspection(inspectionData || null);
    }
  }, [id, getInspectionById]);

  if (!inspection) return <p>No inspection found</p>;

  const backToHistory = () => {
    navigate(-1); 
  };

  return (
  <div className="m-6">
  <button onClick={backToHistory} className="mb-4 bg-gradient-to-r from-gradient-start to-gradient-end text-white rounded px-2 py-1">Back to history</button>
  <div className="bg-secondary p-6 rounded-lg grid grid-cols-2 gap-4 text-white">
    <div><span className="font-bold">Name:</span> {inspection.name}</div>
    {inspection.questions.map((question, index) => (
      <div key={index}>
        <div><span className="font-bold">{question}:</span> {inspection.answers && inspection.answers[index]}</div>
      </div>
    ))}
  </div>
</div>

);

}

export { InspectionDetail };
