import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'tailwindcss/tailwind.css';

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

const InspectionForm = () => {
  const [inspectionData, setInspectionData] = useState<InspectionData>({
    name: '',
    lift: '',
    hours: '',
    date: '',
    tires: '',
    horn: '',
    battery: '',
    controls: '',
    brakes: '',
    steering: '',
    hydraulics: '',
    overheadGuard: '',
    charger: '',
    fallArrest: '',
    loadPlateDisplayed: '',
    operatorsManualPresent: '',
    cleanForklift: '',
    deficienciesPresent: ''
  });

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


  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Check if any field is empty
    for (const key in inspectionData) {
      if (inspectionData[key as keyof InspectionData] === '') {
        alert('Please fill out all fields before submitting.');
        return;
      }
    }

    // Check if all pass/fail questions are selected
    for (const question of [
      'Tires',
      'Horn',
      'Battery',
      'Controls',
      'Brakes',
      'Steering',
      'Hydraulics',
      'Overhead Guard',
      'Charger',
      'Fall Arrest',
      'Load Plate Displayed',
      'Operators Manual Present',
      'Clean Forklift'
    ]) {
      if (inspectionData[question as keyof InspectionData] !== 'Pass' && inspectionData[question as keyof InspectionData] !== 'Fail') {
        alert('Please select "Pass" or "Fail" for all inspection questions.');
        return;
      }
    }

    // Save the inspection data to localStorage
    const submittedInspections = JSON.parse(localStorage.getItem('inspections') || '[]');
    submittedInspections.push(inspectionData);
    localStorage.setItem('inspections', JSON.stringify(submittedInspections));

    // Reset the form after submission
    setInspectionData({
      name: '',
      lift: '',
      hours: '',
      date: '',
      tires: '',
      horn: '',
      battery: '',
      controls: '',
      brakes: '',
      steering: '',
      hydraulics: '',
      overheadGuard: '',
      charger: '',
      fallArrest: '',
      loadPlateDisplayed: '',
      operatorsManualPresent: '',
      cleanForklift: '',
      deficienciesPresent: ''
    });

    // Reset the button clicks
    setPassClicked({});
    setFailClicked({});
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">New Inspection</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              name="name"
              className="block w-full border rounded p-2"
              required
              value={inspectionData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2">Lift:</label>
            <input
              type="text"
              name="lift"
              className="block w-full border rounded p-2"
              required
              value={inspectionData.lift}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2">Hours:</label>
            <input
              type="text"
              name="hours"
              className="block w-full border rounded p-2"
              required
              value={inspectionData.hours}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2">Date:</label>
            <input
              type="date"
              name="date"
              className="block w-full border rounded p-2"
              required
              value={inspectionData.date}
              onChange={handleChange}
            />
          </div>
          {/* ... Repeat for other input fields (tires, horn, battery, etc.) ... */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {[
            'Tires',
            'Horn',
            'Battery',
            'Controls',
            'Brakes',
            'Steering',
            'Hydraulics',
            'Overhead Guard',
            'Charger',
            'Fall Arrest',
            'Load Plate Displayed',
            'Operators Manual Present',
            'Clean Forklift'
          ].map((question) => (
            <div key={question}>
              <h3 className="font-bold mb-2">{question}</h3>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className={`${
                    passClicked[question] ? 'bg-green-700' : 'bg-green-500'
                  } hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                  onClick={() => handlePassFailClick(question, 'Pass')}
                >
                  Pass
                </button>
                <button
                  type="button"
                  className={`${
                    failClicked[question] ? 'bg-red-700' : 'bg-red-500'
                  } hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                  onClick={() => handlePassFailClick(question, 'Fail')}
                >
                  Fail
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <label className="block mb-2">Deficiencies Present:</label>
          <textarea
            name="deficienciesPresent"
            className="block w-full border rounded p-2"
            rows={4}
            required
            value={inspectionData.deficienciesPresent}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InspectionForm;