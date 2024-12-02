import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  // 컴포넌트가 렌더링될 때마다 특정 작업을 수행합니다.
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    const inp = document.getElementById('inp');
    inp.value = count;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input type='text' id='inp'/>
    </div>
  );
}
