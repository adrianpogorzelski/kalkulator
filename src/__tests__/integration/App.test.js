import { render, screen } from '@testing-library/react';
import App from '../../App';

test('has the Header component', () => {
  render(<App />)
  const testElement = screen.getByTestId('header');
  expect(testElement).toBeInTheDocument();
});

test('has the Calculator component', () => {
  render(<App />)
  const testElement = screen.getByTestId('calculator');
  expect(testElement).toBeInTheDocument();
});

test('has the Investments component', () => {
  render(<App />)
  const testElement = screen.getByTestId('investments');
  expect(testElement).toBeInTheDocument();
});

test('has Footer component', () => {
  render(<App />)
  const testElement = screen.getByTestId('footer');
  expect(testElement).toBeInTheDocument();
});
