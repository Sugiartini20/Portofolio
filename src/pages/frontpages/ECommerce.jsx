import React from 'react';
import Navbar from '../../components/Navbar';

export default function ECommerce() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">UI/UX E-Commerce Project</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tentang Project</h2>
          <p className="text-gray-700 mb-4">
            Desain UI/UX lengkap untuk platform e-commerce modern dengan fokus pada user experience dan conversion rate.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Fitur Utama:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Product Catalog dengan Filter</li>
                <li>Shopping Cart & Checkout</li>
                <li>User Authentication</li>
                <li>Order Tracking</li>
                <li>Admin Dashboard</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Teknologi:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express.js</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              <strong>Status:</strong> Dalam Pengembangan - Segera Hadir!
            </p>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => window.history.back()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kembali ke Portfolio
          </button>
        </div>
      </div>
    </>
  );
}