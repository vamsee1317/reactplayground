import React, { useEffect, useRef } from 'react';

export default function TimerWithRef() {
  const countRef = useRef(100);
  const headingRef = useRef(null); // Renamed for clarity

  console.log("Component Rerendered");

  useEffect(() => {
    const timer = setInterval(() => {
      countRef.current -= 1;

      if (headingRef.current) {
        headingRef.current.innerText = `⏳ Count: ${countRef.current}`;
      }

      if (countRef.current === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-red-200">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1
          ref={headingRef}
          className="text-4xl font-semibold text-red-700"
        >
          ⏳ Count: 100
        </h1>
      </div>
    </div>
  );
}
