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
    <form>
      <h1>Order Your Pizza</h1>

      <label htmlFor="fullName">Full Name:</label>
      <input type="text" id="fullName" name="fullName" placeholder="Type full name" />

      <label htmlFor="size">Size:</label>
      <select id="size" name="size">
        <option value="">----Choose Size----</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <p>Choose your toppings:</p>
      <label>
        <input type="checkbox" name="toppings" value="pepperoni" />
        Pepperoni
      </label>
      <label>
        <input type="checkbox" name="toppings" value="greenPeppers" />
        Green Peppers
      </label>
      <label>
        <input type="checkbox" name="toppings" value="pineapple" />
        Pineapple
      </label>
      <label>
        <input type="checkbox" name="toppings" value="mushrooms" />
        Mushrooms
      </label>
      <label>
        <input type="checkbox" name="toppings" value="ham" />
        Ham
      </label>

      <button type="submit">Submit</button>

      {message && <p>{message}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
};

export default Form;
