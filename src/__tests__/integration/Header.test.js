import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

test('has a Nav element', () => {
    render(<Header />)
    const testElement = screen.getByTestId('nav');
    expect(testElement).toBeInTheDocument();
});