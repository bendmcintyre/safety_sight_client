import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'tailwindcss/tailwind.css';

const InspectionForm = () => {
  const [inspectionData, setInspectionData] = useState({
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

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setInspectionData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePassFailClick = (question: string, value: string) => {
    handleChange({ target: { name: question, value } } as ChangeEvent<HTMLInputElement>);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // Here you'd call your inspection service with the inspection data
    // inspectionService.create(inspectionData);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">New Inspection</h2>
      <form onSubmit={handleSubmit}>
        {/* Inspection Data */}
        <div className="grid grid-cols-2 gap-4 mb-4">
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
        </div>

        {/* Inspection Questions */}
        <div className="grid grid-cols-2 gap-4 mb-4">
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
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handlePassFailClick(question, 'Pass')}
                >
                  Pass
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handlePassFailClick(question, 'Fail')}
                >
                  Fail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Deficiencies Present */}
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

        {/* Submit Button */}
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
