import React, { useState } from "react";
import "./App.css";

const FormingInputs = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const calculatePower = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      const power = Math.pow(num1, num2);
      setResult(power);
    } else {
      setResult("Invalid numbers");
    }
  };

  const handleNumber1Change = (e) => {
    setNumber1(e.target.value);
  };

  const handleNumber2Change = (e) => {
    setNumber2(e.target.value);
  };

  return (
    <div>
      <div className="input-elements">
        <h1>First Input</h1>
        <input type="text" value={number1} onChange={handleNumber1Change} />
        <br />
        <h1>Second Input</h1>
        <input type="text" value={number2} onChange={handleNumber2Change} />
        <br />
        <h1>Result</h1>
        <input type="text" value={result} disabled />
        <br />
        <button type="submit" onClick={calculatePower}>
          Submitu
        </button>
      </div>
    </div>
  );
};

export default FormingInputs;