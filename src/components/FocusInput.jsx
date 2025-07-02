import React, { useRef } from 'react';

export default function FocusInput() {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    };
    console.log(inputRef);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm space-y-4">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleFocus}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-300"
                >
                    Focus Input
                </button>
            </div>
        </div>
    );
}
