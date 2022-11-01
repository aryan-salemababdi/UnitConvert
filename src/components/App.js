import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {

  const [result, setResult] = useState(0);

  const [convertNumber, setConvertNumber] = useState(0);

  const [inputNumber, setInputNumber] = useState(0);

  const [baseNumber, setBaseNumber] = useState(0);


  const button = () => {

    setResult((inputNumber * baseNumber) / convertNumber)

    console.log(result)
  }

  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        <Input
          label="Amount"
          onChange={(number) => {
            setInputNumber(number)
          }}
        />

        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select
            items={units}
            label="From"
            onChange={(selects) => {
              setBaseNumber(selects)
            }}
          />
          <Select
            items={units}
            label="To"
            onChange={(selects) => {
              setConvertNumber(selects)
            }}
          />

          <button onClick={button}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
