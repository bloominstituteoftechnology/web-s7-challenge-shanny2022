import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

describe('Form', () => {
  test('renders Form component', () => {
    render(<Form />);

    expect(screen.getByLabelText(/Full Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Size:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Toppings:/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });
});
