'use client';

import { useState } from 'react';

const CATEGORIES = ['Electronics', 'Furniture', 'Books', 'Clothing', 'Sports'];

export default function ProductForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        ...formData,
        price: parseFloat(formData.price),
        id: Date.now().toString() // Simple ID generation
      });
    }
    // Reset form
    setFormData({
      title: '',
      description: '',
      price: '',
      category: '',
      imageUrl: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Product Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400 focus:border-primary-500"
          placeholder="Enter product title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          required
          className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400 focus:border-primary-500 resize-none"
          placeholder="Enter product description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
          Price (₹)
        </label>
        <input
          type="number"
          id="price"
          name="price"
          step="1"
          min="0"
          required
          className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400 focus:border-primary-500"
          placeholder="Enter price in INR (e.g., 2500)"
          value={formData.price}
          onChange={handleChange}
        />
        <p className="mt-1 text-xs sm:text-sm text-gray-500">
          Enter price in Indian Rupees (₹)
        </p>
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select
          id="category"
          name="category"
          required
          className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 transition-all duration-200 hover:border-gray-400 focus:border-primary-500"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
          Image URL
        </label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-500"
          placeholder="https://example.com/image.jpg"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <p className="mt-1 text-sm text-gray-500">
          Leave empty to use placeholder image
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 font-medium text-lg transition-colors"
      >
        Add Product
      </button>
    </form>
  );
}
