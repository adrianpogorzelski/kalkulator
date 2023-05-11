import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

test('renders', () => {
    render(<Header />)
    const testElement = screen.getByTestId('header');
    expect(testElement).toBeInTheDocument();
});

test('has green gradient background"', () => {
    render(<Header />)
    const testElement = screen.getByTestId('header');
    expect(testElement.className).toContain('bg-success');
    expect(testElement.className).toContain('bg-gradient');
});

test('has a Brand element', () => {
    render(<Header />)
    const testElement = screen.getByTestId('brand');
    expect(testElement).toBeInTheDocument();
    expect(testElement).toHaveClass('navbar-brand');
});

test('the Brand element is "Kalkulator korzyści"', () => {
    render(<Header />)
    const testElement = screen.getByText('Kalkulator korzyści');
    expect(testElement).toBeInTheDocument();
});

test('the Brand text is white', () => {
    render(<Header />)
    const testElement = screen.getByTestId('header');
    expect(testElement).toHaveClass("navbar-dark");
});

