import React from 'react';

export default function CourseList() {
  const courses = [
    { id: 101, name: 'ReactJs', price: 4999 },
    { id: 102, name: 'AngularJs', price: 5999 },
    { id: 103, name: 'VueJs', price: 6999 },
    { id: 104, name: 'Django', price: 7999 },
    { id: 105, name: 'Flask', price: 4999 },
  ];

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Available Courses</h2>
      <ul className="space-y-3">
        {courses.map((course) => (
          <li
            key={course.id}
            className="flex justify-between items-center px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
          >
            <span className="text-lg font-medium text-gray-700">{course.name}</span>
            <span className="text-sm font-semibold text-blue-600">₹{course.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
