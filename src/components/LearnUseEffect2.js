import React, { useState, useEffect, useRef } from 'react';


function LearnUseEffect2() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  
  // useEffect(() => {
  //   setCount((count) => {
  //     console.log('count', count);
  //     return count + 1;
  //   });
  // });

  const onChange = (e) => {setInputValue(e.target.value); setCount(count + 1);};

  return (
    <>
      <br/><br/><br/>
      <p>You type {count} times</p>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
      />
    </>
  );
}

export default LearnUseEffect2;