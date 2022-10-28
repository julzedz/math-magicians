import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  style = {
    margin: '50px auto',
    width: '40%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  };

  input = {
    height: '70px',
    fontSize: '18px',
    border: '.1px solid #fff',
  };

  item1 = {
    height: '70px',
    fontSize: '18px',
    gridColumnStart: 1,
    gridColumnEnd: 5,
    border: '.1px solid #fff',
  };

  item0 = {
    height: '70px',
    fontSize: '18px',
    gridColumnStart: 1,
    gridColumnEnd: 3,
    border: '.1px solid #fff',
  };

  orangeItems = {
    height: '70px',
    fontSize: '18px',
    background: '#ff9d5c',
    border: '.1px solid #fff',
  };

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
        <section style={this.style} className="grid-container">
          <input
            type="input"
            style={this.item1}
            value={(total || '') + (operation || '') + (next || '') || 0}
            className="w-100 bg-secondary result"
          />
          <input type="button" onClick={this.handleClick} style={this.input} value="AC" />
          <input type="button" onClick={this.handleClick} style={this.input} value="+/-" />
          <input type="button" onClick={this.handleClick} style={this.input} value="%" />
          <input type="button" onClick={this.handleClick} style={this.orangeItems} value="÷" />
          <input type="button" onClick={this.handleClick} style={this.input} value="7" />
          <input type="button" onClick={this.handleClick} style={this.input} value="8" />
          <input type="button" onClick={this.handleClick} style={this.input} value="9" />
          <input type="button" onClick={this.handleClick} style={this.orangeItems} value="x" />
          <input type="button" onClick={this.handleClick} style={this.input} value="4" />
          <input type="button" onClick={this.handleClick} style={this.input} value="5" />
          <input type="button" onClick={this.handleClick} style={this.input} value="6" />
          <input type="button" onClick={this.handleClick} style={this.orangeItems} value="-" />
          <input type="button" onClick={this.handleClick} style={this.input} value="1" />
          <input type="button" onClick={this.handleClick} style={this.input} value="2" />
          <input type="button" onClick={this.handleClick} style={this.input} value="3" />
          <input type="button" onClick={this.handleClick} style={this.orangeItems} value="+" />
          <input type="button" onClick={this.handleClick} style={this.item0} value="0" />
          <input type="button" onClick={this.handleClick} style={this.input} value="." />
          <input type="button" onClick={this.handleClick} style={this.orangeItems} value="=" />
        </section>
      </>
    );
  }
}

export default Calculator;
