import React, { useState } from 'react';
import './calculator.css'; 

function Calculator() {
  let [operand1, setOperand1] = useState('');
  let [operand2, setOperand2] = useState('');
  let [operator, setOperator] = useState('');
  let [result, setResult] = useState(null); 

  let operatandOnChange = (event, operand) => {
    let value = event.target.value;
    operand === 'operand1' ? setOperand1(value) : setOperand2(value);
  };

  let operatorOnChange = (event) => {
    setOperator(event.target.value);
  };

  let handleCalculate = () => {
    let calculatedResult;

    switch (operator) {
      case '+':
        calculatedResult = parseFloat(operand1) + parseFloat(operand2);
        break;
      case '-':
        calculatedResult = parseFloat(operand1) - parseFloat(operand2);
        break;
      case '*':
        calculatedResult = parseFloat(operand1) * parseFloat(operand2);
        break;
      case '/':
        calculatedResult = parseFloat(operand1) / parseFloat(operand2);
        break;
      case '%':
        calculatedResult = parseFloat(operand1) % parseFloat(operand2);
        break;
      default:
        calculatedResult = 'Invalid Operator';
    }

    setResult(calculatedResult);
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <input
        type="number"
        className="operator"
        value={operand1}
        onChange={(e) => operatandOnChange(e, 'operand1')}
        placeholder="Enter first number"
      />
      <select
        className="operator"
        style={{width:'300px'}}
        value={operator}
        onChange={operatorOnChange}
      >
        <option value="">Select Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
      </select>
      <input
        type="number"
        className="operator"

        value={operand2}
        onChange={(e) => operatandOnChange(e, 'operand2')}
        placeholder="Enter second number"
      />
      <button className="calculate-btn" onClick={handleCalculate}>Calculate</button>
      {result !== null && <div className="result">Result: {result}</div>}
    </div>
  );
};

export default Calculator;
