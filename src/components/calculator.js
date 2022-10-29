import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const element = e.target;
    const buttonName = element.value;
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <section className="grid-container style">
          <input
            type="input"
            value={(total || '') + (operation || '') + (next || '') || 0}
            className="w-100 bg-secondary item1"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="AC"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="+/-"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="%"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="orange"
            value="÷"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="7"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="8"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="9"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="orange"
            value="x"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="4"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="5"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="6"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="orange"
            value="-"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="1"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="2"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="3"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="orange"
            value="+"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="item0"
            value="0"
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="input"
            value="."
          />
          <input
            type="button"
            onClick={this.handleClick}
            className="orange"
            value="="
          />
        </section>
      </>
    );
  }
}

export default Calculator;
