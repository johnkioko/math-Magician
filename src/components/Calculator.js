/* eslint-disable */
import React from "react";
import "./App.css";

class Calculator extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="item0">0</div>
        <div className="item1">AC</div>
        <div className="item2 item1">+/-</div>
        <div className="item3 item1">%</div>
        <div className="item4"> ÷ </div>
        <div className="item5 item1">7</div>
        <div className="item6 item1">8</div>
        <div className="item7 item1">9</div>
        <div className="item8">x</div>
        <div className="item9 item1">4</div>
        <div className="item10 item1">5</div>
        <div className="item11 item1">6</div>
        <div className="item12">-</div>
        <div className="item13 item1">1</div>
        <div className="item14 item1">2</div>
        <div className="item15 item1">3</div>
        <div className="item16">+</div>
        <div className="item17 item1">0</div>
        <div className="item18 item1">.</div>
        <div className="item19">=</div>
      </div>
    );
  }
}

export default Calculator;
