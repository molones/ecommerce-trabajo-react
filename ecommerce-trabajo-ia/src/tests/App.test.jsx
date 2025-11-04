import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/your store name/i); // Replace with actual header text
  expect(headerElement).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  const footerElement = screen.getByText(/copyright/i); // Replace with actual footer text
  expect(footerElement).toBeInTheDocument();
});

test('renders product grid', () => {
  render(<App />);
  const productGridElement = screen.getByTestId('product-grid'); // Ensure ProductGrid has this test ID
  expect(productGridElement).toBeInTheDocument();
});