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
    setQuestions([...questions, { name: deleteQuestionName, type: deleteQuestionType }]);
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
    <div className="m-10 p-10 rounded-lg grid grid-cols-1 justify-items-center shadow-lg h-auto w-full border bg-primary dark:bg-dmseccont dark:border-dmoutline ">
      <div className="dark:bg-dmonsec w-full h-full text-center rounded">
      <h1 className=" text-white dark:text-dmonseccont text-xl font-bold m-4 ">Create Inspection</h1>
      </div>
      <form onSubmit={createInspection} className="grid grid-cols-2 grid-rows-12 w-full m-8">
        <div className="grid grid-cols-2 ">
        <label className="text-white dark:bg-dmonsec dark:text-dmonseccont rounded p-4 font-bold block mb-8 mr-4">
          Inspection Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-60 h-1/2 border rounded p-2 text-primary dark:bg-dmseccont dark:text-dmonseccont "
          />
        </label>
        <label className="text-white dark:bg-dmonsec dark:text-dmonseccont rounded p-4 font-bold block mb-8 mr-4">
          Add Field:
          <input
            type="text"
            value={newQuestionName}
            onChange={(e) => setNewQuestionName(e.target.value)}
            className="block w-60 h-1/2 border rounded p-2 mb-8 mr-4 text-primary dark:bg-dmseccont dark:text-dmonseccont"
          />
        </label>
        <select
          value={newQuestionType}
          onChange={(e) => setNewQuestionType(e.target.value as 'text' | 'date' | 'pass/fail')}
          className="block w-60 h-1/2 border rounded p-2 mb-8 mr-4"
        >
          <option value="text">Text</option>
          <option value="date">Date</option>
          <option value="pass/fail">Pass/Fail</option>
        </select>
        <button type="button" onClick={addQuestion} className="bg-submit dark:text-dmonseccont hover:bg-secondary w-60 h-1/2 items-center rounded shadow-background mb-8 mr-4">
          Add Field
        </button>

        <label className="text-white dark:bg-dmonsec dark:text-dmonseccont rounded p-4 font-bold block mb-8 mr-4">
          
          <button type="button" onClick={deleteQuestion} className="bg-failhover text-white dark:text-dmonseccont hover:bg-secondary w-60 h-1/2 items-center py-2 px-4 rounded shadow-background mb-8 mr-4">
          Delete Field
        </button>
        </label>
        
        <button type="submit" className="bg-submit text-white dark:text-dmonseccont hover:bg-secondary w-60 h-100 items-center py-2 px-4 rounded shadow-background mt-2">
          Create Inspection
        </button>
        </div>
        <div>
        {questions.map((question, index) => (
          <div key={index} className="inline-grid rounded shadow-inner text-center text-white dark:bg-secondary dark:text-dmonseccont mb-8 mr-4">
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
