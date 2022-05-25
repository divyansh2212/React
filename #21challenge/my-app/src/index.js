import React from 'react';
import ReactDOM from 'react-dom';
import * as calculator from "./Calculator";
import './index.css';

ReactDOM.render(
  <>
    <ul>
      <li>Sum of two numbers is {calculator.add(4, 5)}.</li>
      <li>Multiplication of two numbers is {calculator.multiplication(4, 5)}.</li>
      <li>Subtraction of two numbers is {calculator.subtract(4, 5)}.</li>
      <li>Absolute subtraction of two numbers is {calculator.absDiff(4, 5)}.</li>
    </ul>
  </>, document.getElementById("root")
)
