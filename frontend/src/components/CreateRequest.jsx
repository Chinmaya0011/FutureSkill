import React, { useState } from 'react';
import style from '../assets/Styles/CreateRequest.module.css';

const CreateRequest = () => {
  // State to manage form inputs and status messages
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with form data
    const formData = {
      title,
      description,
    };

    try {
      // Send form data to the server
      const response = await fetch('https://futureskill.onrender.com/api/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        setStatusMessage('Request submitted successfully!');
        setTitle(''); // Clear form fields
        setDescription('');
      } else {
        // Handle error
        const result = await response.json();
        setStatusMessage(`Failed to submit request: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      // Handle network error
      setStatusMessage('An error occurred while submitting the request.');
    }

    // Clear the status message after 5 seconds
    setTimeout(() => {
      setStatusMessage('');
    }, 5000);
  };

  return (
    <div className={style.createRequestContainer}>
      <h1 className={style.heading}>Create Request</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="title" className={style.label}>Title</label>
          <input
            type="text"
            id="title"
            className={style.inputTitle}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="description" className={style.label}>Description</label>
          <input
            type="text"
            id="description"
            className={style.inputDes}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={style.buttonContainer}>
          <button type="submit" className={style.submitButton}>Submit</button>
        </div>
      </form>
      <p className={style.statusMessage}>{statusMessage}</p>
    </div>
  );
};

export default CreateRequest;
