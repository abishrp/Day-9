import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log('Component did mount');
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component did update');
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  incrementCount = () => {
    console.log("increment");
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("render");
    return (
        
      <div>
        
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
        
      </div>
    );
  }
}

export default Counter;
