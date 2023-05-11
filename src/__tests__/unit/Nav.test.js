import { render, screen } from '@testing-library/react';
import Nav from '../../components/Nav';

test("renders", () => {
    render(<Nav />)
    const testElement = screen.getByTestId('nav');
    expect(testElement).toBeInTheDocument();

})

test("has link to Calculator", () => {
    render(<Nav />)
    const testElement = screen.getByTestId('calculator-link');
    expect(testElement).toBeInTheDocument();
    expect(testElement).toHaveAttribute('href', '#calculator');
    const text = screen.getByText('Kalkulator');
    expect(text).toBeInTheDocument();

})

test("has link to Investments", () => {
    render(<Nav />)
    const testElement = screen.getByTestId('investments-link');
    expect(testElement).toBeInTheDocument();
    expect(testElement).toHaveAttribute('href', '#investments');
    const text = screen.getByText('Inwestycje');
    expect(text).toBeInTheDocument();
})

test("has link to portal", () => {
    render(<Nav />)
    const testElement = screen.getByTestId('portal-link');
    expect(testElement).toBeInTheDocument();
    expect(testElement).toHaveAttribute('href', 'https://korzysci.portalfinansowy.pl/');
    const text = screen.getByText('Więcej korzyści...');
    expect(text).toBeInTheDocument();
})

/*
test("links have white text", () => {
    render(<Nav />);
    const calculator = screen.getByTestId('calculator-link');
    const investments = screen.getByTestId('investments-link');
    const portal = screen.getByTestId('portal-link');
    expect(calculator).toHaveClass('text-white');
    expect(investments).toHaveClass('text-white');
    expect(portal).toHaveClass('text-white');
})
*/
