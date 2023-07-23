import React, { useState, FormEvent } from 'react';

interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  date: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    company: '',
    email: '',
    date: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Here you can handle form submission. E.g. sending data to your API.

    setFormValues({
      name: '',
      company: '',
      email: '',
      date: '',
      subject: '',
      message: '',
    });

    setFormSubmitted(true);
  };

  return (
    <div className="bg-background p-4">
      <h2 className="text-lg font-bold mb-4">Contact Page</h2>
      {formSubmitted && <p>Your contact submission was successfully submitted.</p>}
      <form onSubmit={handleFormSubmit}>
        <input name="name" type="text" required onChange={handleInputChange} placeholder="Name" className="mb-4 p-2 rounded block" value={formValues.name} />
        <input name="company" type="text" required onChange={handleInputChange} placeholder="Company" className="mb-4 p-2 rounded block" value={formValues.company} />
        <input name="email" type="email" required onChange={handleInputChange} placeholder="Email" className="mb-4 p-2 rounded block" value={formValues.email} />
        <input name="date" type="date" required onChange={handleInputChange} className="mb-4 p-2 rounded block" value={formValues.date} />
        <input name="subject" type="text" required onChange={handleInputChange} placeholder="Subject" className="mb-4 p-2 rounded block" value={formValues.subject} />
        <textarea name="message" required maxLength={2500} onChange={handleInputChange} placeholder="Message" className="mb-4 p-2 rounded block" value={formValues.message}></textarea>
        <button type="submit" className="bg-primary p-2 rounded text-white">Submit</button>
      </form>
    </div>
  );
};

export { Contact };
