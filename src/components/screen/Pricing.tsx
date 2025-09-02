'use client'

import { FaUsers, FaGlobe, FaCode } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">The Pricing</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="group border rounded-xl p-6 flex flex-col items-center text-center shadow-sm transition hover:shadow-md hover:border-blue-300 hover:bg-blue-50">
          <FaUsers className="text-4xl text-indigo-600 mb-4 group-hover:text-blue-700 transition" />
          <h3 className="font-semibold text-lg mb-2 text-black">Company Profile</h3>
          <p className="text-sm text-gray-600 mb-4">
            Perfect for businesses looking to establish their online presence with a professional company profil website.
          </p>
          <ul className="text-sm text-gray-800 text-left space-y-1 mb-4">
            <li>• Static Content</li>
            <li>• 1 Year Domain & Hosting</li>
            <li>• Responsive Design</li>
            <li>• WhatsApp Features</li>
          </ul>
          <button className="bg-gray-100 group-hover:bg-blue-600 group-hover:text-white text-gray-800 py-2 px-6 rounded-full text-sm transition">
            Get Started
          </button>
        </div>

        {/* Card 2 */}
        <div className="group border rounded-xl p-6 flex flex-col items-center text-center shadow-sm transition hover:shadow-md hover:border-blue-300 hover:bg-blue-50">
          <FaGlobe className="text-4xl text-indigo-600 mb-4 group-hover:text-blue-700 transition" />
          <h3 className="font-semibold text-lg mb-2 text-black">Dynamic Website</h3>
          <p className="text-sm text-gray-600 mb-4">
            Advanced websites with dynamic content management, perfect for businesses that need regular updates and interactive features
          </p>
          <ul className="text-sm text-gray-800 text-left space-y-1 mb-4">
            <li>• Dynamic Content</li>
            <li>• 1 Year Domain & Hosting</li>
            <li>• Responsive Design</li>
            <li>• Visitor Dashboard</li>
            <li>• Order Management System</li>
            <li>• Chat Features</li>
            <li>• Payment System</li>
            <li>• WhatsApp Features</li>
          </ul>
          <button className="bg-gray-100 group-hover:bg-blue-600 group-hover:text-white text-gray-800 py-2 px-6 rounded-full text-sm transition">
            Get Started
          </button>
        </div>

        {/* Card 3 */}
        <div className="group border rounded-xl p-6 flex flex-col items-center text-center shadow-sm transition hover:shadow-md hover:border-blue-300 hover:bg-blue-50">
          <FaCode className="text-4xl text-indigo-600 mb-4 group-hover:text-blue-700 transition" />
          <h3 className="font-semibold text-lg mb-2 text-black">Web Application</h3>
          <p className="text-sm text-gray-600 mb-4">
            Custom web application tailored to your specific business needs and requirements
          </p>
          <ul className="text-sm text-gray-800 text-left space-y-1 mb-4">
            <li>• Please tell us what you want!</li>
          </ul>
          <button className="bg-gray-100 group-hover:bg-blue-600 group-hover:text-white text-gray-800 py-2 px-6 rounded-full text-sm transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
