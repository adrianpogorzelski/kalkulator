import { render, screen } from '@testing-library/react';
import Calculator from '../../components/Calculator';

test('renders', () => {
    render(<Calculator />)
    const testElement = screen.getByTestId('calculator');
    expect(testElement).toBeInTheDocument();
});

test('has a white background', () => {
    render(<Calculator/>)
    const testElement = screen.getByTestId('calculator');
    expect(testElement).toHaveClass('bg-white');
});

test('has a centered title - "Kalkulator zysku z inwestycji', () => {
    render(<Calculator/>);
    const testElement = screen.getByTestId('title');
    expect(testElement).toHaveClass('text-center');
    const text = screen.getByText('Kalkulator zysku z inwestycji');
    expect(text).toBeInTheDocument();
});

test('has a form', () => {
    render(<Calculator/>);
    const testElement = screen.getByTestId('form');
    expect(testElement).toBeInTheDocument();
});

test('the form has an input: "Wysokość inwestycji"', () => {
    render(<Calculator/>);
    const label = screen.getByText('Wysokość inwestycji');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('form-label')
    const input = screen.getByTestId('amount-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('form-control')
});

test('the form has an input: "Długość inwestycji"', () => {
    fail
});

test('the form has an input: "Oprocentowanie (roczne)"', () => {
    fail
});
