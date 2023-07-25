import React, { useState, useContext } from 'react';
import { InspectionContext } from './InspectionContext';

interface Question {
  name: string;
  type: 'text' | 'date' | 'pass/fail';
}

const CreateInspection: React.FC = () => {
  const { inspection, setInspection } = useContext(InspectionContext);
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestionName, setNewQuestionName] = useState('');
  const [newQuestionType, setNewQuestionType] = useState<'text' | 'date' | 'pass/fail'>('text');

  const addQuestion = () => {
    setQuestions([...questions, { name: newQuestionName, type: newQuestionType }]);
    setNewQuestionName('');
    setNewQuestionType('text');
  };

  const createInspection = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === '') {
      alert('Inspection Name is required.');
      return;
    }
    setInspection([
      ...inspection,
      { id: inspection.length + 1, name, questions: questions.map((q) => q.name) },
    ]);
    setName('');
    setQuestions([]);
  };

  return (
    <div className="m-10 p-10 rounded-lg shadow-lg bg-primary">
      <h1 className="text-white text-lg font-bold mb-4">Create Inspection</h1>
      <form onSubmit={createInspection}>
        <label className="text-white font-bold block mb-2 ">
          Inspection Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full h-full border rounded p-2 text-primary"
          />
        </label>
        {questions.map((question, index) => (
          <div key={index}>
            <p className="text-white">Question: {question.name}</p>
            <p className="text-white">Type: {question.type}</p>
          </div>
        ))}
        <label className="text-white font-bold block mb-2 ">
          Name:
          <input
            type="text"
            value={newQuestionName}
            onChange={(e) => setNewQuestionName(e.target.value)}
            className="block w-full h-full border rounded p-2 text-primary"
          />
        </label>
        <select
          value={newQuestionType}
          onChange={(e) => setNewQuestionType(e.target.value as 'text' | 'date' | 'pass/fail')}
          className="block w-full h-full border rounded p-2"
        >
          <option value="text">Text</option>
          <option value="date">Date</option>
          <option value="pass/fail">Pass/Fail</option>
        </select>
        <button type="button" onClick={addQuestion} className="bg-submit text-white hover:bg-secondary items-center py-2 px-4 rounded shadow-background mt-2">
          Add Question
        </button>
        <button type="submit" className="bg-submit text-white hover:bg-secondary items-center py-2 px-4 rounded shadow-background mt-2">
          Create Inspection
        </button>
      </form>
    </div>
  );
};

export { CreateInspection };
