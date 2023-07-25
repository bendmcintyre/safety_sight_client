import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { InspectionContext, InspectionContextType } from './InspectionContext';

interface InspectionItem {
  id: number;
  name: string;
  questions: string[];
  answers?: string[];
}

const InspectionForm = () => {
  const { inspection, submitInspection } = useContext<InspectionContextType>(InspectionContext);
  const [inspectionData, setInspectionData] = useState<{ [key: string]: string }>({});
  const [passClicked, setPassClicked] = useState<Record<string, boolean>>({});
  const [failClicked, setFailClicked] = useState<Record<string, boolean>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setInspectionData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePassFailClick = (question: string, value: string) => {
    setInspectionData((prevData) => ({ ...prevData, [question]: value }));

    // Update button clicks for the current question
    setPassClicked((prevClicked) => ({ ...prevClicked, [question]: value === 'Pass' }));
    setFailClicked((prevClicked) => ({ ...prevClicked, [question]: value === 'Fail' }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Check if any field is empty
    for (const key in inspectionData) {
      if (inspectionData[key] === '') {
        alert('Please fill out all fields before submitting.');
        return;
      }
    }

    // Check if all pass/fail questions are selected
    for (const question of inspection.map((item) => item.name)) {
      if (inspectionData[question] !== 'Pass' && inspectionData[question] !== 'Fail') {
        alert('Please select "Pass" or "Fail" for all inspection questions.');
        return;
      }
    }

    // Convert inspectionData to an array of InspectionItem
    const updatedInspection: InspectionItem[] = inspection.map((item) => ({
      id: item.id,
      name: item.name,
      questions: item.questions,
      answers: [], // Initialize an empty array for the answers
    }));

    // Update the answers for each question
    for (const question of inspection.map((item) => item.name)) {
      for (const updatedQuestion of updatedInspection) {
        if (updatedQuestion.name === question) {
          // Push the answer into the answers array
          updatedQuestion.answers!.push(inspectionData[question]);
        }
      }
    }

    // Submit the updated inspection
    submitInspection(updatedInspection[0]);

    // Reset the form after submission
    setInspectionData({});
    setPassClicked({});
    setFailClicked({});
  };

  return (
    <div className="m-10 p-10 rounded-lg shadow-lg bg-secondary">
      <h2 className="text-white text-lg font-bold mb-4">New Inspection</h2>
      <form className="bg-secondary shadow-background" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-white font-bold block mb-2 ">Inspection Name:</label>
          <input
            type="text"
            name="inspectionName"
            className="block w-full h-full border rounded p-2"
            value={inspectionData.inspectionName || ''}
            onChange={handleChange}
          />
        </div>
        {inspection.map((inspectionItem: InspectionItem) => (
          <div key={inspectionItem.id}>
            <h3 className="font-bold mb-2 text-white">{inspectionItem.name}</h3>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className={`${
                  passClicked[inspectionItem.name] ? 'bg-passhover' : 'bg-pass1'
                } hover:bg-passhover text-white font-bold py-2 px-4 rounded`}
                onClick={() => handlePassFailClick(inspectionItem.name, 'Pass')}
              >
                Pass
              </button>
              <button
                type="button"
                className={`${
                  failClicked[inspectionItem.name] ? 'bg-failhover' : 'bg-fail1'
                } hover:bg-failhover text-white font-bold py-2 px-4 rounded `}
                onClick={() => handlePassFailClick(inspectionItem.name, 'Fail')}
              >
                Fail
              </button>
            </div>
          </div>
        ))}
        <div className="mb-4">
          <label className="text-white font-bold block mb-2 ">Deficiencies present:</label>
          <textarea
            name="deficienciesPresent"
            className="block w-full h-full border rounded p-2"
            value={inspectionData.deficienciesPresent || ''}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-submit text-white hover:bg-secondary items-center py-2 px-4 rounded shadow-background "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export { InspectionForm };
