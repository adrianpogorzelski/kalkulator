import React from "react";

const Nav = () => {
    return (
        <nav data-testid="nav" className="collapse navbar-collapse justify-content-end" id="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a data-testid="calculator-link" className="nav-link" href="#calculator">Kalkulator</a>
                </li>
                <li className="nav-item">
                    <a data-testid="investments-link" className="nav-link" href="#investments">Inwestycje</a>
                </li>
                <li className="nav-item">
                    <a data-testid="portal-link" className="nav-link" href="https://korzysci.portalfinansowy.pl/">Więcej korzyści...</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;