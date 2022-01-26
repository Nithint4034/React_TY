import React, { Component } from 'react';
import withCounter from '../hoc/withCounter';

export class CounterTwo extends Component {
  render() {
      const {count ,incrementCount ,decrementCount} = this.props
    return <div>
        <p>Count : {count}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>

    </div>;
  }
}

export default withCounter(CounterTwo);
