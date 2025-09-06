# EcoFinds - Reusable Components

This document shows how to use the reusable components in the EcoFinds app.

## Components

### 1. Navbar.js
Navigation bar with app title and links.

```jsx
import Navbar from '@/components/Navbar.js';

function App() {
  return (
    <div>
      <Navbar />
      {/* Your page content */}
    </div>
  );
}
```

### 2. ProductCard.js
Displays a product with image, title, price, and "View Details" button.

```jsx
import ProductCard from '@/components/ProductCard.js';

function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProductCard
        id="123"
        title="Eco-Friendly Water Bottle"
        price={24.99}
        imageUrl="/images/bottle.jpg"
      />
    </div>
  );
}
```

**Props:**
- `id` (string) - Product ID for navigation
- `title` (string) - Product title
- `price` (number) - Product price
- `imageUrl` (string) - Product image URL

### 3. ProductForm.js
Form for adding/editing products with validation.

```jsx
import ProductForm from '@/components/ProductForm.js';

function AddProductPage() {
  const handleSubmit = (productData) => {
    console.log('New product:', productData);
    // Handle form submission
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
}
```

**Props:**
- `onSubmit` (function) - Callback function called when form is submitted

**Form Data Structure:**
```javascript
{
  id: "1693234567890", // Auto-generated timestamp
  title: "Product Name",
  description: "Product description",
  price: 29.99,
  category: "Electronics",
  imageUrl: "https://example.com/image.jpg"
}
```

### 4. SearchBar.js
Search input with category filters and callback functions.

```jsx
import SearchBar from '@/components/SearchBar.js';

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  return (
    <div>
      <SearchBar
        onSearch={setSearchTerm}
        onFilter={setCategory}
      />
      {/* Filtered products display */}
    </div>
  );
}
```

**Props:**
- `onSearch` (function) - Callback when search term changes
- `onFilter` (function) - Callback when category filter changes

**Categories:** All, Electronics, Furniture, Books, Clothing, Sports

## Styling

All components use Tailwind CSS with a consistent design system:

- **Primary Color:** `primary-600` (green)
- **Hover States:** `primary-700`
- **Text:** `gray-900` for headings, `gray-700` for body
- **Backgrounds:** `white` for cards, `gray-50` for pages
- **Shadows:** `shadow-md` for cards, `shadow-lg` for hover

## Usage Tips

1. **Import Path:** Always use `@/components/ComponentName.js`
2. **Props:** All props are required unless noted otherwise
3. **Callbacks:** Handle form submissions and filter changes in parent components
4. **Styling:** Components include responsive design and hover effects
5. **Navigation:** ProductCard automatically navigates to `/products/[id]`

## Example: Complete Product Listing Page

```jsx
'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar.js';
import SearchBar from '@/components/SearchBar.js';
import ProductCard from '@/components/ProductCard.js';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Your products data
  const products = [/* ... */];
  
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar
          onSearch={setSearchTerm}
          onFilter={setSelectedCategory}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
```
