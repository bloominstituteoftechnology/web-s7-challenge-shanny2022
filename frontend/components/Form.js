import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    size: '',
    toppings: []
  });

  const handleChange = (event) => {
    if (event.target.name === 'toppings') {
      setFormData({
        ...formData,
        toppings: [...formData.toppings, event.target.value]
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
      </label>
      <label>
        Size:
        <select id="size" name="size" value={formData.size} onChange={handleChange}>
          <option value="">--Please choose an option--</option>
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
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
