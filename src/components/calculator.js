import { React, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const element = e.target;
    const buttonName = element.value;
    const result = calculate(state, buttonName);
    setState(result);
  };

  const { total, next, operation } = state;
  return (
    <Route path="/calculator">
      <>
        <section className="grid-container style">
          <input
            type="input"
            value={(total || '') + (operation || '') + (next || '') || 0}
            className="w-100 bg-secondary item1"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="AC"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="+/-"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="%"
          />
          <input
            type="button"
            onClick={handleClick}
            className="orange"
            value="÷"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="7"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="8"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="9"
          />
          <input
            type="button"
            onClick={handleClick}
            className="orange"
            value="x"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="4"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="5"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="6"
          />
          <input
            type="button"
            onClick={handleClick}
            className="orange"
            value="-"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="1"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="2"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="3"
          />
          <input
            type="button"
            onClick={handleClick}
            className="orange"
            value="+"
          />
          <input
            type="button"
            onClick={handleClick}
            className="item0"
            value="0"
          />
          <input
            type="button"
            onClick={handleClick}
            className="input"
            value="."
          />
          <input
            type="button"
            onClick={handleClick}
            className="orange"
            value="="
          />
        </section>
      </>
    </Route>
  );
};

export default Calculator;
