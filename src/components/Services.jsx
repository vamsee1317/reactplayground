import React from 'react';
import { Code, Paintbrush, Shield, Database, Smartphone, Cloud } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and high-performance websites using the latest technologies.',
    icon: <Code className="w-10 h-10 text-blue-600" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating user-friendly interfaces with beautiful and functional designs.',
    icon: <Paintbrush className="w-10 h-10 text-pink-500" />,
  },
  {
    title: 'Cyber Security',
    description: 'Protecting your systems and data with advanced security measures.',
    icon: <Shield className="w-10 h-10 text-red-500" />,
  },
  {
    title: 'Database Management',
    description: 'Designing, maintaining and optimizing data storage solutions.',
    icon: <Database className="w-10 h-10 text-green-500" />,
  },
  {
    title: 'Mobile App Development',
    description: 'Creating mobile apps that run seamlessly on Android and iOS.',
    icon: <Smartphone className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: 'Cloud Services',
    description: 'Offering scalable and secure cloud computing solutions.',
    icon: <Cloud className="w-10 h-10 text-purple-500" />,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
  <h1 className="text-2xl font-bold text-blue-700 m-4">Our Services</h1>
         

      {/* Services Grid */}
      <main className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 mt-10 border-t">
        <div className="text-center text-sm text-gray-500">
          © 2025 YourCompany. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
