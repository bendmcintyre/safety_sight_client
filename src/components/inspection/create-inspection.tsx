import React, { useState, useContext } from 'react';
import { InspectionContext } from './inspection-context';

interface Question {
  name: string;
  type: 'text' | 'date' | 'pass/fail';
}

const CreateInspection: React.FC = () => {
  const { inspection, setInspection } = useContext(InspectionContext);
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestionName, setNewQuestionName] = useState('');
  const [newQuestionType, setNewQuestionType] = useState<'text' | 'date' | 'pass/fail'>('text')
  const [deleteQuestionName, setDeleteQuestionName] = useState('');
  const [deleteQuestionType, setDeleteQuestionType] = useState<'text' | 'date' | 'pass/fail'>('text');

  const addQuestion = () => {
    setQuestions([...questions, { name: newQuestionName, type: newQuestionType }]);
    setNewQuestionName('');
    setNewQuestionType('text');
  };
  
  const deleteQuestion = () => {
    setQuestions([...questions]);
    setDeleteQuestionName('');
    setDeleteQuestionType('text');
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
    <div className="m-10 p-10 rounded-lg grid grid-cols-1 justify-items-center shadow-lg bg-primary dark:bg-dms">
      <h1 className="text-white text-xl font-bold mb-4 shadow-inner">Create Inspection</h1>
      <form onSubmit={createInspection} className="grid grid-cols-2 grid-rows-12">
        <div className="grid grid-cols-1">
        <label className="text-white font-bold block mb-2 ">
          Inspection Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-60 h-1/2 border rounded p-2 text-primary dark:bg-secondary dark:text-white"
          />
        </label>
        <label className="text-white font-bold block mb-2 ">
          Add Field:
          <input
            type="text"
            value={newQuestionName}
            onChange={(e) => setNewQuestionName(e.target.value)}
            className="block w-60 h-1/2 border rounded p-2 text-primary dark:bg-secondary dark:text-white"
          />
        </label>
        <select
          value={newQuestionType}
          onChange={(e) => setNewQuestionType(e.target.value as 'text' | 'date' | 'pass/fail')}
          className="block w-60 h-1/2 border rounded p-2"
        >
          <option value="text">Text</option>
          <option value="date">Date</option>
          <option value="pass/fail">Pass/Fail</option>
        </select>
        <button type="button" onClick={addQuestion} className="bg-submit text-white hover:bg-secondary w-60 h-1/2 items-center rounded shadow-background mt-2">
          Add Field
        </button>

        <label className="text-white font-bold block mb-2 ">
          Delete Field:
          <input
            type="text"
            value={deleteQuestionName}
            onChange={(e) => setDeleteQuestionName(e.target.value)}
            className="block w-60 h-1/2 border rounded p-2 text-white"
          />
        </label>
        <button type="button" onClick={deleteQuestion} className="bg-failhover text-white hover:bg-secondary w-60 h-1/2 items-center py-2 px-4 rounded shadow-background mt-2">
          Delete Field
        </button>
        <button type="submit" className="bg-submit text-white hover:bg-secondary w-60 h-100 items-center py-2 px-4 rounded shadow-background mt-2">
          Create Inspection
        </button>
        </div>
        <div>
        {questions.map((question, index) => (
          <div key={index} className="inline-grid rounded shadow-inner text-center text-white dark:bg-secondary dark:text-white">
            <p className="">Question: {question.name}</p>
            <p className="">Type: {question.type}</p>
          </div>
        ))}
        </div>
        
      </form>
    </div>
  );
};

export { CreateInspection };
