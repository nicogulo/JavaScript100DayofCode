import React from 'react';
import { useState } from 'react';

function HookUsestate() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((p) => p + 1)}>+</button>
      <button onClick={() => setCount((p) => p - 1)}>-</button>
    </div>
  );
}

export default HookUsestate;
