import React, { createContext, useState, ReactNode } from 'react';

interface InspectionType {
  id: number;
  name: string;
}

interface InspectionContextType {
  inspections: InspectionType[];
  setInspections: (inspections: InspectionType[]) => void;
}

const InspectionsContext = createContext<InspectionContextType>({
  inspections: [],
  setInspections: (inspections: InspectionType[]) => {},
});

interface InspectionsProviderProps {
  children: ReactNode;
}

const InspectionsProvider = ({ children }: InspectionsProviderProps) => {
  const [inspections, setInspections] = useState<InspectionType[]>([
    {
      id: 1,
      name: 'Inspection 1',
    },
    {
      id: 2,
      name: 'Inspection 2',
    },
  ]);

  return (
    <InspectionsContext.Provider value={{ inspections, setInspections }}>
      {children}
    </InspectionsContext.Provider>
  );
};

export { InspectionsContext, InspectionsProvider };


