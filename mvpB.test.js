import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Form from './Form';


test('successful order clears the form', async () => {
  const { getByLabelText, getByRole } = render(<Form />);

  const fullNameInput = getByLabelText(/Full Name:/i);
  fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });

  const submitButton = getByRole('button', { name: /Submit/i });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(fullNameInput.value).toBe(''); // check if the input is cleared
  });
}, 3000);

describe('Form', () => {
  test('renders Form component', () => {
    render(<Form />);
    expect(screen.getByText(/Order Your Pizza/i)).toBeInTheDocument();
  });
}); // Add this block of tests
