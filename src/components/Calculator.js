import React from "react";

const Calculator = () => {
    return (
        <section data-testid="calculator" className={"container bg-white my-3"}>
            <h2 data-testid="title" className={"text-center"}>Kalkulator zysku z inwestycji</h2>
            <div className={"row my-4 align-items-center"}>
                <label for="amount-input" className={"col-2 form-label"}>Wysokość inwestycji</label>
                <input data-testid="amount-input" id={"amount-input"} type="number" className={"col form-control"} />
            </div>
            <div className={"row mt-3 align-items-center"}>
                <label htmlFor="amount-input" className={"col-2 form-label"}>Wysokość inwestycji</label>
                <input data-testid="amount-input" id={"amount-input"} type="number" className={"col form-control"}/>
            </div>
        </section>
    )
}

export default Calculator;