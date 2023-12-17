import React, { useState } from 'react';

const initialFormData = {
  fullName: '',
  size: '',
  toppings: []
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Thank you for your order, ${formData.fullName}!`);
    setFormData(initialFormData);
  };

  const isFormValid = () => {
    return formData.fullName && formData.size;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      </label>
      <label>
        Size:
        <select name="size" value={formData.size} onChange={handleChange}>
          <option value="">Select</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </label>
      <label>
        Toppings:
        <input type="checkbox" name="toppings" value="1" onChange={handleChange} /> Pepperoni
        <input type="checkbox" name="toppings" value="2" onChange={handleChange} /> Green Peppers
        <input type="checkbox" name="toppings" value="3" onChange={handleChange} /> Pineapple
        <input type="checkbox" name="toppings" value="4" onChange={handleChange} /> Mushrooms
        <input type="checkbox" name="toppings" value="5" onChange={handleChange} /> Ham
      </label>
      <input type="submit" value="Submit" disabled={!isFormValid()} />
      {message && <p>{message}</p>}
    </form>
  );
};

export default Form;
