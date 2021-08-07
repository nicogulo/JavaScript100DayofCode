import React from 'react';
import { useState } from 'react';

function HookUsestate() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <p>Anda menekan sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik saya </button>
      <button onClick={() => setCount((p) => p + 1)}>+</button>
      <button onClick={() => setCount((p) => p - 1)}>-</button>
    </div>
  );
}

export default HookUsestate;
