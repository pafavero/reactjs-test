import React from "react";
import { useState, useEffect } from 'react';

class TimeString extends React.Component {
  render = () => {
    console.log("refresh TimeString", this.props.time);
    return <p className="App-clock">
      Time: {this.props.time}
    </p>
  }
}


function Clock(){
    const [dateObj, setDate] = useState(new Date());
    
    function refreshClock() {
      console.log("call every 500 ms");
      setDate(new Date());
    }
    useEffect(() => {
      const timerId = setInterval(refreshClock, 500);
      // componentWillUnmount()
      return function cleanup() {
        clearInterval(timerId);
      };
    }, [dateObj]);
    return (
      <span>
        <TimeString time={dateObj.toLocaleTimeString()} />
      </span>
    );
  }
  export default Clock;