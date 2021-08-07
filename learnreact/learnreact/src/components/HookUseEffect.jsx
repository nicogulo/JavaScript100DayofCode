import React from 'react';
import { useState, useEffect } from 'react';

export default function HookUseEffect() {
  // const [color, setColor] = useState('#eaeaea');
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `title page ${count} kali`;
    return () => {
      document.title = 'React App';
    };
  }, [count]);
  return (
    <div>
      <div>{count}</div>
      {/* <p>Anda menekan sebanyak {count} kali</p> */}
      <button onClick={() => setCount(count + 1)}>Klik saya </button>
      <button onClick={() => setCount((p) => p + 1)}>+</button>
      <button onClick={() => setCount((p) => p - 1)}>-</button>
      <a
        rel="noopener noreferrer"
        href="https://github.com/nicogulo"
        target="_blank"
      >
        <button>pindah</button>
      </a>
    </div>
  );
}
