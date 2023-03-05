import { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button className={classes.btn} onClick={increment}>Increment</button>
      <button className={classes.red} onClick={decrement}>Decrement</button>
      <h1>{counter}</h1>
    </div>
  );
};

export default Counter;
