# 📚 EcoFinds Development Guide

> *Complete technical documentation for developers working on the EcoFinds platform*

## 📖 Table of Contents

1. [Component Library](#-component-library)
2. [Authentication System](#-authentication-system)
3. [Cart Functionality](#-cart-functionality)
4. [Testing Guidelines](#-testing-guidelines)
5. [Technical Implementation](#-technical-implementation)
6. [Development Workflow](#-development-workflow)

---

## 🧩 Component Library

### Overview
EcoFinds uses a modular component architecture with reusable UI components built with React 18 and styled with Tailwind CSS.

### 1. Navbar Component

**Purpose**: Main navigation bar with authentication state and cart indicator

**Usage:**
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

**Features:**
- Dynamic authentication state display
- Cart item count badge
- Responsive mobile menu
- Brand logo and navigation links

---

### 2. ProductCard Component

**Purpose**: Display product information in a card format with interactive elements

**Usage:**
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
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | ✅ | Product ID for navigation |
| `title` | string | ✅ | Product title |
| `price` | number | ✅ | Product price |
| `imageUrl` | string | ✅ | Product image URL |

**Features:**
- Responsive design for all screen sizes
- Hover effects and smooth transitions
- Automatic navigation to product detail page
- Price formatting with currency display

---

### 3. ProductForm Component

**Purpose**: Form for adding and editing products with validation

**Usage:**
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
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onSubmit` | function | ✅ | Callback when form is submitted |

**Form Data Structure:**
```typescript
interface ProductData {
  id: string;          // Auto-generated timestamp
  title: string;       // Product name
  description: string; // Product description
  price: number;       // Product price
  category: string;    // Product category
  imageUrl: string;    // Product image URL
}
```

**Features:**
- Built-in form validation
- Category selection dropdown
- Image URL input with preview
- Price formatting and validation
- Auto-generated unique IDs

---

### 4. SearchBar Component

**Purpose**: Search input with category filters and real-time filtering

**Usage:**
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
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onSearch` | function | ✅ | Callback when search term changes |
| `onFilter` | function | ✅ | Callback when category filter changes |

**Available Categories:**
- All Products
- Electronics
- Furniture
- Books
- Clothing
- Sports
- Home & Garden

**Features:**
- Real-time search functionality
- Category-based filtering
- Responsive design with mobile optimization
- Clear search and reset filters options

---

### Component Design System

**Color Palette:**
- **Primary**: `bg-primary-600` (#059669) - Green theme
- **Hover**: `hover:bg-primary-700` - Darker green
- **Text**: `text-gray-900` for headings, `text-gray-700` for body
- **Backgrounds**: `bg-white` for cards, `bg-gray-50` for pages
- **Shadows**: `shadow-md` for cards, `shadow-lg` for hover states

**Typography:**
- **Headings**: `font-bold text-lg` to `text-2xl`
- **Body**: `text-sm` to `text-base`
- **Captions**: `text-xs text-gray-500`

**Spacing:**
- **Padding**: `p-4` to `p-6` for cards
- **Margins**: `mb-4` to `mb-6` for vertical spacing
- **Gaps**: `gap-4` to `gap-6` for grid layouts

---

### Complete Example: Product Listing Page

```jsx
'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar.js';
import SearchBar from '@/components/SearchBar.js';
import ProductCard from '@/components/ProductCard.js';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Sample products data
  const products = [
    {
      id: "1",
      title: "Bamboo Water Bottle",
      price: 24.99,
      category: "Electronics",
      imageUrl: "/placeholder.png"
    },
    // ... more products
  ];
  
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Eco-Friendly Products
        </h1>
        
        <SearchBar
          onSearch={setSearchTerm}
          onFilter={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
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
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
```

---

## 🔐 Authentication System

### Overview
EcoFinds implements a comprehensive authentication system with user registration, login, profile management, and protected routes.

### Authentication Flow

#### 1. Unauthenticated User Experience
- **Default State**: Users can browse products without authentication
- **Protected Routes**: Cart, Dashboard, and Add Product require authentication
- **Navigation**: Profile icon shows "Sign In" for unauthenticated users

#### 2. Registration Process
```tsx
// User signup with profile information
const handleSignup = async (userData) => {
  const newUser = {
    email: userData.email,
    fullName: userData.fullName,
    country: userData.country,
    joinDate: new Date().toISOString(),
    purchaseHistory: [],
    profileImage: '/placeholder.png'
  };
  
  // Save to localStorage and update context
  localStorage.setItem('user', JSON.stringify(newUser));
  setUser(newUser);
  setIsLoggedIn(true);
};
```

#### 3. Login Process
```tsx
// User login with email/password
const handleLogin = async (email, password) => {
  // Authenticate user credentials
  const user = authenticateUser(email, password);
  
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    setIsLoggedIn(true);
    
    // Clear cart for new session
    clearCart();
    
    // Redirect to products page
    router.push('/products');
  }
};
```

### Authentication Guards

#### Dashboard Protection
```tsx
// Dashboard page authentication check
export default function Dashboard() {
  const { user, isLoggedIn } = useUser();
  
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Sign In Required
          </h1>
          <p className="text-gray-600 mb-6">
            Please sign in to access your dashboard and track your eco-friendly purchases.
          </p>
          <button 
            onClick={() => router.push('/login')}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
          >
            Sign In to Dashboard
          </button>
        </div>
      </div>
    );
  }
  
  // Render authenticated dashboard
  return <AuthenticatedDashboard />;
}
```

### User Context Implementation

#### Context Structure
```tsx
interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: SignupData) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  addPurchase: (purchase: Purchase) => void;
}

interface User {
  email: string;
  fullName: string;
  country: string;
  joinDate: string;
  purchaseHistory: Purchase[];
  profileImage: string;
}
```

#### Context Provider
```tsx
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Initialize from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsLoggedIn(true);
    }
  }, []);
  
  // Context value with all methods
  const value = {
    user,
    isLoggedIn,
    login,
    signup,
    logout,
    updateUser,
    addPurchase
  };
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
```

### Dashboard Features

#### Profile Management
- **Edit Profile**: Update full name, email, and country
- **Country Selection**: Choose from 195+ countries worldwide
- **Profile Image**: Upload and display profile pictures
- **Account Settings**: Manage account preferences

#### Statistics Tracking
```tsx
// Real-time statistics calculation
const calculateStats = () => {
  const monthsActive = Math.max(1, 
    Math.floor((new Date() - new Date(user.joinDate)) / (1000 * 60 * 60 * 24 * 30))
  );
  
  const totalProducts = user.purchaseHistory.reduce((sum, purchase) => 
    sum + purchase.quantity, 0
  );
  
  const co2Saved = totalProducts * 2.5; // 2.5kg CO₂ per eco product
  
  return { monthsActive, totalProducts, co2Saved };
};
```

#### Purchase History
- **Order Tracking**: Complete history of all purchases
- **Environmental Impact**: CO₂ savings calculation per order
- **Date Tracking**: Purchase timestamps and order details

---

## 🛒 Cart Functionality

### Overview
The shopping cart system provides persistent storage, real-time updates, and seamless integration with the authentication system.

### Cart Implementation

#### Cart Context Structure
```tsx
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
}

interface CartItem {
  id: string;           // Unique cart item ID
  productId: string;    // Original product ID
  title: string;        // Product title
  price: number;        // Product price
  quantity: number;     // Selected quantity
  imageUrl: string;     // Product image
}
```

#### Cart Operations

**Adding Items to Cart:**
```tsx
const addToCart = (product) => {
  const cartItem = {
    id: `cart-${Date.now()}-${Math.random()}`,
    productId: product.id,
    title: product.title,
    price: product.price,
    quantity: 1,
    imageUrl: product.imageUrl
  };
  
  const updatedCart = [...cartItems, cartItem];
  setCartItems(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  
  // Show success notification
  alert(`Added ${product.title} to cart!`);
};
```

**Updating Quantities:**
```tsx
const updateQuantity = (cartItemId, newQuantity) => {
  if (newQuantity <= 0) {
    removeFromCart(cartItemId);
    return;
  }
  
  const updatedCart = cartItems.map(item =>
    item.id === cartItemId 
      ? { ...item, quantity: newQuantity }
      : item
  );
  
  setCartItems(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};
```

**Removing Items:**
```tsx
const removeFromCart = (cartItemId) => {
  const updatedCart = cartItems.filter(item => item.id !== cartItemId);
  setCartItems(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};
```

### Cart Persistence

#### localStorage Integration
```tsx
// Save cart to localStorage
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}, [cartItems]);

// Load cart from localStorage on app start
useEffect(() => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    setCartItems(JSON.parse(savedCart));
  }
}, []);
```

#### Session Management
- **New Users**: Start with empty cart
- **Returning Users**: Cart persists across browser sessions
- **Login Events**: Cart clears when user logs in for new session
- **Cross-Device**: Cart data is device-specific (localStorage)

### Cart UI Components

#### Cart Badge in Navbar
```tsx
// Display cart item count
const CartBadge = () => {
  const { itemCount } = useCart();
  
  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
};
```

#### Cart Page Layout
```tsx
// Complete cart page with items management
const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  
  if (cartItems.length === 0) {
    return <EmptyCartMessage />;
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      {cartItems.map(item => (
        <CartItemRow 
          key={item.id}
          item={item}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />
      ))}
      
      <CartSummary total={cartTotal} />
    </div>
  );
};
```

---

## 🧪 Testing Guidelines

### Authentication Testing

#### Test 1: Unauthenticated Dashboard Access
```bash
# Steps:
1. Open browser in incognito mode
2. Navigate to http://localhost:3000/dashboard
3. Expected: Login prompt with sign-in options
4. Verify: No user data displayed, proper redirect options
```

#### Test 2: Complete Authentication Flow
```bash
# Steps:
1. From dashboard login prompt, click "Sign In to Dashboard"
2. Fill out login form with valid credentials
3. Submit form
4. Expected: 
   - Cart clears for new session
   - User profile created with entered email
   - Redirect to products page
   - Navbar shows "Dashboard" instead of "Sign In"
```

#### Test 3: Logout and Re-access
```bash
# Steps:
1. In dashboard, click "Logout" button
2. Try to access dashboard again
3. Expected:
   - Redirect to login prompt
   - User data cleared from localStorage
   - Navbar shows "Sign In" again
```

### Cart Testing

#### Test 1: Empty Cart for New Users
```bash
# Steps:
1. Open browser in incognito mode
2. Navigate to http://localhost:3000/cart
3. Expected: Empty cart message displayed
4. Verify: No items in cart, proper empty state UI
```

#### Test 2: Adding Items to Cart
```bash
# Steps:
1. Navigate to Products page (/products)
2. Click on any product card
3. On product detail page, click "Add to Cart"
4. Expected:
   - Success alert: "Added [product] to cart!"
   - Navbar cart badge shows item count
   - Cart page shows the added item
```

#### Test 3: Cart Operations
```bash
# Steps:
1. Add multiple items from different products
2. Navigate to Cart page
3. Test quantity controls (+ and - buttons)
4. Test "Remove" button
5. Expected: All operations work and update totals correctly
```

#### Test 4: Cart Persistence
```bash
# Steps:
1. Add items to cart
2. Navigate to different pages
3. Refresh the browser
4. Check cart contents
5. Expected: Cart items remain (saved in localStorage)
```

### Component Testing

#### ProductCard Component
```javascript
// Test props and rendering
const testProduct = {
  id: "test-123",
  title: "Test Eco Product",
  price: 29.99,
  imageUrl: "/test-image.jpg"
};

// Verify:
// - Correct title display
// - Price formatting ($29.99)
// - Image loading
// - Navigation on click
```

#### SearchBar Component
```javascript
// Test search functionality
const mockProducts = [
  { title: "Bamboo Bottle", category: "Electronics" },
  { title: "Organic Shirt", category: "Clothing" }
];

// Verify:
// - Search term filtering
// - Category filtering
// - Combined filters work
// - Clear search functionality
```

### Error Handling Testing

#### Network Errors
```bash
# Test offline functionality
1. Disconnect internet
2. Try to add items to cart
3. Try to access user dashboard
4. Expected: Graceful degradation, proper error messages
```

#### Invalid Data
```bash
# Test form validation
1. Try to submit empty forms
2. Enter invalid email formats
3. Enter negative product prices
4. Expected: Proper validation messages, form doesn't submit
```

---

## ⚙️ Technical Implementation

### State Management Architecture

#### Context Providers Hierarchy
```tsx
// App layout with nested providers
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
```

#### Data Flow Pattern
```
User Action → Component Handler → Context Update → localStorage → UI Re-render
```

### Performance Optimizations

#### Memoization
```tsx
// Expensive calculations with useMemo
const filteredProducts = useMemo(() => {
  return products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
}, [products, searchTerm, selectedCategory]);
```

#### Component Optimization
```tsx
// Prevent unnecessary re-renders
const ProductCard = React.memo(({ id, title, price, imageUrl }) => {
  // Component implementation
});
```

### Data Structures

#### User Data Model
```typescript
interface User {
  email: string;
  fullName: string;
  country: string;
  joinDate: string;           // ISO date string
  purchaseHistory: Purchase[];
  profileImage: string;       // URL or base64
}

interface Purchase {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  purchaseDate: string;       // ISO date string
  co2Saved: number;          // Calculated environmental impact
}
```

#### Product Data Model
```typescript
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  sustainability: {
    co2Reduction: number;     // kg CO₂ saved per unit
    materials: string[];      // Eco-friendly materials used
    certifications: string[]; // Environmental certifications
  };
}
```

### Security Considerations

#### Client-Side Security
- **Data Validation**: All form inputs validated before processing
- **XSS Prevention**: User inputs properly sanitized
- **localStorage**: Non-sensitive data only stored locally
- **Route Protection**: Authentication guards on protected routes

#### Best Practices
```tsx
// Input sanitization example
const sanitizeInput = (input) => {
  return input.trim().replace(/[<>]/g, '');
};

// Secure data handling
const handleUserInput = (userInput) => {
  const sanitized = sanitizeInput(userInput);
  // Process sanitized input
};
```

---

## 🔄 Development Workflow

### Git Workflow

#### Branch Strategy
```bash
# Main branches
main              # Production-ready code
develop           # Integration branch
feature/*         # New features
bugfix/*          # Bug fixes
hotfix/*          # Critical production fixes
```

#### Commit Convention
```bash
# Commit message format
type(scope): description

# Examples:
feat(auth): add user registration form
fix(cart): resolve quantity update bug
docs(readme): update installation instructions
style(components): improve button hover effects
```

### Development Setup

#### Local Environment
```bash
# Development commands
npm run dev        # Start dev server with hot reload
npm run build      # Build production bundle
npm run lint       # Check code quality
npm run type-check # TypeScript type checking
```

#### Environment Variables
```bash
# Development environment
NEXT_PUBLIC_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_DEBUG_MODE=true

# Production environment
NEXT_PUBLIC_ENV=production
NEXT_PUBLIC_API_URL=https://your-domain.com
NEXT_PUBLIC_DEBUG_MODE=false
```

### Code Quality Standards

#### TypeScript Configuration
```json
// tsconfig.json highlights
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", ".next"]
}
```

#### ESLint Rules
```json
// .eslintrc.json highlights
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended"
  ],
  "rules": {
    "prefer-const": "error",
    "no-unused-vars": "error",
    "no-console": "warn"
  }
}
```

### Deployment Process

#### Vercel Deployment
```bash
# Automatic deployment on git push
git push origin main

# Manual deployment
vercel --prod
```

#### Build Optimization
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['example.com'],
    formats: ['image/webp']
  },
  experimental: {
    appDir: true
  }
};
```

---

## 📈 Performance Monitoring

### Key Metrics
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Bundle Size**: Monitor JavaScript bundle sizes
- **Loading Times**: Page load performance
- **User Experience**: Error rates and user flows

### Optimization Strategies
- **Image Optimization**: Next.js Image component with WebP
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Browser caching and CDN optimization
- **Tree Shaking**: Remove unused code from bundles

---

*This development guide covers all aspects of working with the EcoFinds platform. For additional questions or contributions, please refer to the main README.md or open an issue on GitHub.*
