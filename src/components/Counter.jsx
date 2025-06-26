import React, { useEffect, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;
    console.log(`Updated Count ${count}`);
  }, [count]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">Counter</h2>
        <p className="text-6xl font-extrabold text-indigo-600">{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-lg font-medium transition duration-300"
        >
          +1
        </button>
      </div>
    </div>
  );
}
