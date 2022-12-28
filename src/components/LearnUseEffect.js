import React, { useState, useEffect } from 'react';

class LearnUseEffectOld extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    // This works two times!!!!
    // Note how we have to duplicate the code between these two lifecycle methods in class.
    //This is because in many cases we want to perform the same side effect regardless of whether the component just mounted, or if it has been updated. 
    componentDidMount() {
      document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
      document.title = `You clicked ${this.state.count} times`;
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }

  /**
   * The same code but with useEffect
   */
  function LearnUseEffect() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  export default LearnUseEffect;