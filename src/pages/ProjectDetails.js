import React from 'react';

const ProjectDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-primary-600 mb-4">Project Details</h1>
        <p className="text-lg text-gray-700 mb-6">
          <strong>Fashion Store</strong> is a modern, responsive e-commerce web application built with React 18 and Tailwind CSS. It features a beautiful UI, product catalog, filtering, cart, and checkout flow for men's and women's clothing.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Responsive design for all devices</li>
          <li>Men's and Women's clothing categories</li>
          <li>Product search, filtering, and sorting</li>
          <li>Product details with image gallery, size/color selection</li>
          <li>Shopping cart with quantity management</li>
          <li>Checkout summary (mock checkout)</li>
          <li>Modern UI/UX with Tailwind CSS and Framer Motion</li>
        </ul>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>React 18</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
          <li>React Router</li>
        </ul>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Author</h2>
        <p className="text-gray-700 mb-2">This project was generated and scaffolded by AI with your requirements.</p>
        <p className="text-gray-500 text-sm">For further customization or deployment, contact your developer or AI assistant.</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
