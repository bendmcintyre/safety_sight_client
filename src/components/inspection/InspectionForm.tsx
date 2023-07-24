import React, { useState, ChangeEvent, FormEvent } from 'react';

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
    const camelCaseQuestion = toCamelCase(question);
    setInspectionData((prevData) => ({ ...prevData, [camelCaseQuestion]: value }));

    // Update button clicks for the current question
    setPassClicked((prevClicked) => ({ ...prevClicked, [question]: value === 'Pass' }));
    setFailClicked((prevClicked) => ({ ...prevClicked, [question]: value === 'Fail' }));
  };

  const handleSubmit = (event: FormEvent) => {
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
      const camelCaseQuestion = toCamelCase(question);
      if (
        inspectionData[camelCaseQuestion as keyof InspectionData] !== 'Pass' &&
        inspectionData[camelCaseQuestion as keyof InspectionData] !== 'Fail'
      ) {
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

  const toCamelCase = (str: string) =>
    str
      .split(' ')
      .map((word, index) => (index ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word.toLowerCase()))
      .join('');

  return (
    <div className="m-10 p-10 rounded-lg shadow-lg bg-secondary
    ">
      <h2 className="text-white  text-lg font-bold mb-4">New Inspection</h2>
      <form className="bg-secondary shadow-background" onSubmit={(event) => handleSubmit(event)}>   
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-white font-bold block mb-2">Name:</label>
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
            <label className="text-white font-bold block mb-2 ">Lift:</label>
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
            <label className="text-white font-bold block mb-2">Hours:</label>
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
            <label className="text-white font-bold block mb-2">Date:</label>
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
        <div className="grid grid-cols-5 sm:grid-cols-5 gap-4 mb-4 ">
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
            <div key={question} >
              <h3 className="font-bold mb-2 text-white">{question}</h3>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className={`${
                    passClicked[question] ? 'bg-passhover' : 'bg-pass1'
                  } hover:bg-passhover text-white font-bold py-2 px-4 rounded`}
                  onClick={() => handlePassFailClick(question, 'Pass')}
                >
                  Pass
                </button>
                <button
                  type="button"
                  className={`${
                    failClicked[question] ? 'bg-failhover' : 'bg-fail1'
                  } hover:bg-failhover text-white font-bold py-2 px-4 rounded `}
                  onClick={() => handlePassFailClick(question, 'Fail')}
                >
                  Fail
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="text-white font-bold block mb-2 ">Deficiencies present:</label>
          <textarea
            name="deficienciesPresent"
            className="block w-full h-full border rounded p-2 "
            required
            value={inspectionData.deficienciesPresent}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="bg-submit text-white hover:bg-secondary items-center py-2 px-4 rounded shadow-background ">
          Submit
        </button>
      </form>
    </div>
  );
};

export {InspectionForm};
