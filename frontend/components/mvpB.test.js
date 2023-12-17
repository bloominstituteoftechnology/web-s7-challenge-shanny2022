import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './components/Form';


test('form submission shows success message', async () => {
  render(<Form />);

  const fullNameInput = screen.getByLabelText(/Full Name:/i);
  fireEvent.change(fullNameInput, { target: { value: 'Fish' } });

  const sizeSelect = screen.getByLabelText(/Size:/i);
  fireEvent.change(sizeSelect, { target: { value: 'M' } });

  const submitButton = screen.getByRole('button', { name: /Submit/i });
  fireEvent.click(submitButton);

  expect(await screen.findByText(/Thank you for your order, Fish!/i)).toBeInTheDocument();
}, 3000); // Increase timeout to 3000ms

describe('Form', () => {
  test('renders Form component', () => {
    render(<Form />);
    expect(screen.getByText(/Order Your Pizza/i)).toBeInTheDocument();
  });
}); // Add this block of tests
