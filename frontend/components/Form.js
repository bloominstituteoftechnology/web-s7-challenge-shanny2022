import React, { useState } from 'react';

const initialFormData = {
  fullName: '',
  // ...other form fields...
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Add this line

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      setErrorMessage('Full Name is required.'); // Set error message if form is invalid
      return;
    }
    // ...submit form data...
    setMessage(`Thank you for your order, ${formData.fullName}!`);
    setFormData(initialFormData);
  };

  const isFormValid = () => {
    // ...validate form data...
    return formData.fullName;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">
        Full Name:
      </label>
      <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />

      {errorMessage && <p>{errorMessage}</p>} {/* Display error message for fullName */}

      <label htmlFor="size">
        Size:
      </label>
      <select id="size" name="size" value={formData.size} onChange={handleChange}>
        {/* ...option elements for different sizes... */}
      </select>

      {errorMessage && <p>{errorMessage}</p>} {/* Display error message for size */}

      <input type="submit" value="Submit" disabled={!isFormValid()} />

      {message && <p>{message}</p>}
    </form>
  );
};

export default Form;
