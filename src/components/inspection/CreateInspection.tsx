import React, { useState } from 'react';

const CreateInspection: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would usually make a POST request to your back-end server.
    // For the purpose of this example, we'll just log the name to the console.
    console.log(name);
  };

  return (
    <div>
      <h1>Create Inspection</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export { CreateInspection };
