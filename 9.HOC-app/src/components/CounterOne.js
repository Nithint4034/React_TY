import React, { Component } from 'react';
import withCounter from '../hoc/withCounter';

export class CounterOne extends Component {
  render() {
      const {count ,incrementCount ,decrementCount} = this.props
    return <div>
        <p> userName : {this.props.userName}</p>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>

    </div>;
  }
}

export default withCounter(CounterOne);