import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './App.css';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  function clickFunction(event) {
    setState((state) => calculate(state, event.target.innerText));
  }

  const { total, next, operation } = state;

  return (
    <>
      <main className="wrapper">
        <div className="calculator-h2">
          <h1>Let&apos;s do some math!</h1>
        </div>
        <div className="calculator">
          <div className="grid-container">
            <div className="item0">
              {total}
              {operation}
              {next}
            </div>

            <button type="button" onClick={clickFunction} className="item1">
              AC
            </button>
            <button type="button" onClick={clickFunction} className="item1">
              +/-
            </button>
            <button type="button" onClick={clickFunction} className="item1">
              %
            </button>
            <button type="button" onClick={clickFunction} className="item4">
              ÷
            </button>
            <button type="button" onClick={clickFunction} className="item1">
              7
            </button>
            <button type="button" onClick={clickFunction} className="item1">
              8
            </button>
            <button type="button" onClick={clickFunction} className="item1">
              9
            </button>
            <button type="button" onClick={clickFunction} className="item8">
              x
            </button>
            <button type="button" onClick={clickFunction} className="item1">
              4
            </button>
            <button type="button" onClick={clickFunction} className="item1">
              5
            </button>
            <button type="button" onClick={clickFunction} className="item1">
              6
            </button>
            <button type="button" onClick={clickFunction} className="item12">
              -
            </button>
            <button type="button" onClick={clickFunction} className="item1">
              1
            </button>
            <button type="button" onClick={clickFunction} className="item1">
              2
            </button>
            <button type="button" onClick={clickFunction} className="item1">
              3
            </button>
            <button type="button" onClick={clickFunction} className="item16">
              +
            </button>
            <button
              type="button"
              onClick={clickFunction}
              className="item17 item1"
            >
              0
            </button>
            <button type="button" onClick={clickFunction} className="item1">
              .
            </button>
            <button type="button" onClick={clickFunction} className="item19">
              =
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Calculator;
