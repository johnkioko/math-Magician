import React from 'react';
import calculate from '../logic/calculate';
import './App.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.clickFunction = this.clickFunction.bind(this);
  }

  // clickFunction =(e) => {
  //   this.setState((currentState) => calculate({
  //     total: currentState.total,
  //     next: currentState.next,
  //     operation: currentState.operation,
  //   }, e.target.name));
  // }

  // this.buttonClick = this.buttonClick.bind(this);
  // }

  clickFunction(event) {
    this.setState((state) => calculate(state, event.target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="grid-container">
        <div className="item0">
          {total}
          {operation}
          {next}
        </div>

        <button type="button" onClick={this.clickFunction} className="item1">
          AC
        </button>
        <button type="button" onClick={this.clickFunction} className="item1">
          +/-
        </button>
        <button type="button" onClick={this.clickFunction} className="item1">
          %
        </button>
        <button type="button" onClick={this.clickFunction} className="item4">
          ÷
        </button>
        <button type="button" onClick={this.clickFunction} className="item1">
          7
        </button>
        <button type="button" onClick={this.clickFunction} className="item1">
          8
        </button>
        <button type="button" onClick={this.clickFunction} className="item1">
          9
        </button>
        <button type="button" onClick={this.clickFunction} className="item8">
          x
        </button>
        <button type="button" onClick={this.clickFunction} className="item1">
          4
        </button>
        <button type="button" onClick={this.clickFunction} className="item1">
          5
        </button>
        <button type="button" onClick={this.clickFunction} className="item1">
          6
        </button>
        <button type="button" onClick={this.clickFunction} className="item12">
          -
        </button>
        <button type="button" onClick={this.clickFunction} className="item1">
          1
        </button>
        <button type="button" onClick={this.clickFunction} className="item1">
          2
        </button>
        <button type="button" onClick={this.clickFunction} className="item1">
          3
        </button>
        <button type="button" onClick={this.clickFunction} className="item16">
          +
        </button>
        <button
          type="button"
          onClick={this.clickFunction}
          className="item17 item1"
        >
          0
        </button>
        <button type="button" onClick={this.clickFunction} className="item1">
          .
        </button>
        <button type="button" onClick={this.clickFunction} className="item19">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
