import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface InspectionItem {
  id: number;
  name: string;
  questions: string[];
}

export type InspectionContextType = {
  inspection: InspectionItem[];
  setInspection: (inspection: InspectionItem[]) => void;
  getInspectionById: (id: number) => InspectionItem | undefined;
  submittedInspections: InspectionItem[];
  submitInspection: (inspection: InspectionItem) => void;
};

const InspectionContext = createContext<InspectionContextType>({
  inspection: [],
  setInspection: (inspection: InspectionItem[]) => {},
  getInspectionById: (id: number) => undefined,
  submittedInspections: [],
  submitInspection: (inspection: InspectionItem) => {},
});

interface InspectionProviderProps {
  children: ReactNode;
}

const InspectionProvider = ({ children }: InspectionProviderProps) => {
  const [inspection, setInspection] = useState<InspectionItem[]>(JSON.parse(localStorage.getItem('inspection') || '[]'));
  const [submittedInspections, setSubmittedInspections] = useState<InspectionItem[]>(JSON.parse(localStorage.getItem('submittedInspections') || '[]'));

  useEffect(() => {
    localStorage.setItem('inspection', JSON.stringify(inspection));
    localStorage.setItem('submittedInspections', JSON.stringify(submittedInspections));
  }, [inspection, submittedInspections]);

  const getInspectionById = (id: number) => {
    return inspection.find((inspection) => inspection.id === id);
  };

  const submitInspection = (inspection: InspectionItem) => {
    setSubmittedInspections([...submittedInspections, inspection]);
  };

  return (
    <InspectionContext.Provider
      value={{ inspection, setInspection, getInspectionById, submittedInspections, submitInspection }}
    >
      {children}
    </InspectionContext.Provider>
  );
};

export { InspectionContext, InspectionProvider };
