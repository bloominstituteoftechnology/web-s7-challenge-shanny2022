import React, { useEffect, useState } from 'react';
import * as yup from 'yup';

const validationErrors = {
  fullNameTooShort: 'full name must be at least 3 characters',
  fullNameTooLong: 'full name must be at most 20 characters',
  sizeIncorrect: 'size must be S or M or L'
};

const schema = yup.object().shape({
  fullName: yup.string()
    .min(3, validationErrors.fullNameTooShort)
    .max(20, validationErrors.fullNameTooLong)
    .required(),
  size: yup.string()
    .oneOf(['S', 'M', 'L'], validationErrors.sizeIncorrect)
    .required(),
  toppings: yup.array().of(yup.string().required())
});

const toppings = [
  { topping_id: '1', text: 'Pepperoni' },
  { topping_id: '2', text: 'Green Peppers' },
  { topping_id: '3', text: 'Pineapple' },
  { topping_id: '4', text: 'Mushrooms' },
  { topping_id: '5', text: 'Ham' },
];

export default function Form() {
  const [form, setForm] = useState({ fullName: '', size: '', toppings: [] });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    schema.validate(form, { abortEarly: false })
      .then(() => setErrors({}))
      .catch(err => setErrors(err.inner.reduce((acc, curr) => ({ ...acc, [curr.path]: curr.message }), {})));
  }, [form]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setForm(prev => ({ ...prev, toppings: [...prev.toppings, value] }));
      } else {
        setForm(prev => ({ ...prev, toppings: prev.toppings.filter(topping => topping !== value) }));
      }
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form>
      <h2>Order Your Pizza</h2>
      <div className="input-group">
        <div>
          <label htmlFor="fullName">Full Name</label><br />
          <input placeholder="Type full name" id="fullName" name="fullName" type="text" onChange={handleChange} />
        </div>
        {errors.fullName && <div className='error'>{errors.fullName}</div>}
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label><br />
          <select id="size" name="size" onChange={handleChange}>
            <option value="">----Choose Size----</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        {errors.size && <div className='error'>{errors.size}</div>}
      </div>

      <div className="input-group">
        {toppings.map(topping => (
          <label key={topping.topping_id}>
            <input name="toppings" value={topping.topping_id} type="checkbox" onChange={handleChange} />
            {topping.text}<br />
          </label>
        ))}
      </div>

      <input type="submit" disabled={Object.keys(errors).length > 0} />
    </form>
  );
}
