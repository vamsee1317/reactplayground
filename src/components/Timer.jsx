import React, { useEffect, useState } from 'react';

export default function Timer() {
  const [count, setCount] = useState(100);

  console.log("Component Re-rendered");

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
        
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">⏳ Countdown Timer</h1>
        <h2>Timer with UseState</h2>
        <div className="text-6xl font-mono text-purple-700">{count}</div>
      </div>
    </div>
  );
}
