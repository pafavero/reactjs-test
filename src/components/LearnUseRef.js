import React, { useState, useEffect, useRef } from 'react';


function LearnUseRefOld() {
  const [inputValue, setInputValue] = useState("");
  // WRONG 
  const [count, setCount] = useState(-1);
  // => Every time the component re-renders due to user typing into the input, the useEffect(() => setCount(count + 1)) updates the counter.
  // https://dmitripavlutin.com/react-useeffect-infinite-loop/
  // Because useEffect(() => setCount(count + 1)) is used without dependencies argument, () 

  useEffect(() => {
    setCount((count) => {
      console.log('count', count);
      return count + 1;
    });
  }); //no dependency array.

  return (
    <>
      <br/><br/><br/>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Render Count: {count}</p>
    </>
  );
}

function LearnUseRef1() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(-1);
  
  useEffect(() => {
    setCount((count) => {
      console.log('count', count);
      return count + 1;
    });
  }, [inputValue]);

  const onChange = ({ target }) => setInputValue(target.value);

  return (
    <>
      <br/><br/><br/>
      <input type="text" value={inputValue} onChange={onChange} />
      <p>Render Count: {count}</p>
    </>
  );
}

function LearnUseRef2() {
  const [inputValue, setInputValue] = useState("");
  // CORRECT
  // To avoid this, we can use the useRef Hook.
  // The idea is that updating a reference doesn't trigger re-rendering of the component.
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    // setCount(count + 1);
  });

  return (
    <>
      <br/><br/><br/>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Render Count: {count.current}</p>
    </>
  );
}


export default LearnUseRef2;