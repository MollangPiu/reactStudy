import React, { useState, useCallback } from 'react';

function ChildComponent({ onClick }) {
  console.log('ChildComponent 리렌더링');
  return <button onClick={onClick}>Click me!</button>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // useCallback을 사용하지 않은 버전
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // useCallback을 사용한 버전
  // const incrementCount = useCallback(() => {
  //   setCount((prevCount) => prevCount + 1);
  // }, []);

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <ChildComponent onClick={incrementCount} />
      <p>Count: {count}</p>
    </div>
  );
}

export default ParentComponent;
