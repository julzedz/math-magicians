import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Calculator extends Component {
  state = {
    count: 0
  };
  render() { 
    return (
      <React.Fragment>
        <h1>Calculator</h1>
        <section className='container-lg'>
          <input type={"input"} value={this.formatCount()} className='mh-100' />
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