import React, { createContext, useState, ReactNode } from 'react';

interface InspectionItem {
  id: number;
  name: string;
  questions: string[];
}

export type InspectionContextType = {
  inspection: InspectionItem[];
  setInspection: (inspection: InspectionItem[]) => void;
  getInspectionById: (id: number) => InspectionItem | undefined;
};

const InspectionContext = createContext<InspectionContextType>({
  inspection: [],
  setInspection: (inspection: InspectionItem[]) => {},
  getInspectionById: (id: number) => undefined,
});

interface InspectionProviderProps {
  children: ReactNode;
}

const InspectionProvider = ({ children }: InspectionProviderProps) => {
  const [inspection, setInspection] = useState<InspectionItem[]>([
    {
      id: 1,
      name: 'Inspection 1',
      questions: [],
    },
    {
      id: 2,
      name: 'Inspection 2',
      questions: [],
    },
  ]);

  const getInspectionById = (id: number) => {
    return inspection.find((inspection) => inspection.id === id);
  };

  return (
    <InspectionContext.Provider value={{ inspection, setInspection, getInspectionById }}>
      {children}
    </InspectionContext.Provider>
  );
};

export { InspectionContext, InspectionProvider };
