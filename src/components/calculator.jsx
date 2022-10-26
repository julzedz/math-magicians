import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Calculator extends Component {
  state = {
    count: 0
  };

  style = {
    margin: '0 auto',
    width: '60%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)'
  }

  input = {
    height: '70px',
    fontSize: '32px'
  }

    item1 = {
    height: '70px',
    fontSize: '32px',
    gridColumnStart: 1,
    gridColumnEnd: 5,
  }

  item0 = {
    height: '70px',
    fontSize: '32px',
    gridColumnStart: 1,
    gridColumnEnd: 3,
  }

  render() { 
    return (
      <React.Fragment>
        <h1 className="">Calculator</h1>
        <section style={this.style} className="grid-container">
          <input
            type={"input"}
            style={this.item1}
            value={this.formatCount()}
            className="w-100 bg-secondary"
          />
          <input type="button" style={this.input} value="AC" />
          <input type="button" style={this.input} value="+/-" />
          <input type="button" style={this.input} value="%" />
          <input type="button" style={this.input} value="÷" />
          <input type="button" style={this.input} value="7" />
          <input type="button" style={this.input} value="8" />
          <input type="button" style={this.input} value="9" />
          <input type="button" style={this.input} value="x" />
          <input type="button" style={this.input} value="4" />
          <input type="button" style={this.input} value="5" />
          <input type="button" style={this.input} value="6" />
          <input type="button" style={this.input} value="-" />
          <input type="button" style={this.input} value="1" />
          <input type="button" style={this.input} value="2" />
          <input type="button" style={this.input} value="3" />
          <input type="button" style={this.input} value="+" />
          <input type="button" style={this.input} value="0" />
          <input type="button" style={this.input} value="." />
          <input type="button" style={this.input} value="=" />
        </section>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? 'Zero' : count;
  }
}
 
export default Calculator;