import { useEffect, useRef, useState } from "react";

function UseRef() {
  const [count, setCount] = useState(0);
  const prevCount = useRef<number>(null); // Using useRef to keep track of the previous count value (previous state)
  // prevCount is initialized to null, it will hold the previous count value after the first render
  const inputRef = useRef<HTMLInputElement>(null); // To access dom elements directly
  

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  }, []);

  return (
    <div>
      <p>Now: {count}</p>
      <p>Before: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <input ref={inputRef} placeholder="I will be focused on load" />
    </div>
  );
}

export default UseRef;