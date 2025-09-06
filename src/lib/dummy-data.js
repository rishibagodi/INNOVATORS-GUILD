// Mock data for products
export const DUMMY_PRODUCTS = [
  {
    id: '1',
    title: 'Eco-Friendly Bamboo Phone Case',
    price: 2074,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Sustainable bamboo phone case that protects your device while being kind to the environment. Lightweight and durable.'
  },
  {
    id: '2',
    title: 'Recycled Plastic Office Chair',
    price: 2489,
    category: 'Furniture',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Comfortable office chair made from 100% recycled ocean plastic. Ergonomic design for long work sessions.'
  },
  {
    id: '3',
    title: 'Sustainable Living Guide',
    price: 1659,
    category: 'Books',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Complete guide to sustainable living with practical tips for reducing your environmental footprint.'
  },
  {
    id: '4',
    title: 'Organic Cotton T-Shirt',
    price: 2904,
    category: 'Clothing',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Soft organic cotton t-shirt made with fair trade practices. Available in multiple colors.'
  },
  {
    id: '5',
    title: 'Solar Power Bank',
    price: 4149,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Portable solar power bank with 20000mAh capacity. Never run out of power while being eco-friendly.'
  },
  {
    id: '6',
    title: 'Cork Yoga Mat',
    price: 7469,
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1506629905607-b5f0b0506b9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Natural cork yoga mat with excellent grip and antimicrobial properties. Perfect for all yoga styles.'
  },
  {
    id: '7',
    title: 'Reclaimed Wood Desk',
    price: 3734,
    category: 'Furniture',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Beautiful desk made from reclaimed barn wood. Each piece is unique with its own character.'
  },
  {
    id: '8',
    title: 'Zero Waste Cookbook',
    price: 2323,
    category: 'Books',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Learn to cook delicious meals while minimizing food waste. 200+ recipes included.'
  },
  {
    id: '9',
    title: 'Hemp Hoodie',
    price: 6639,
    category: 'Clothing',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Cozy hoodie made from sustainable hemp fibers. Naturally breathable and durable.'
  },
  {
    id: '10',
    title: 'Biodegradable Tennis Balls',
    price: 1078,
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Tennis balls made from natural rubber that biodegrades after use. Pack of 3.'
  }
];

export const CATEGORIES = ['All', 'Electronics', 'Furniture', 'Books', 'Clothing', 'Sports'];

// Mock cart data
export const DUMMY_CART_ITEMS = [
  {
    id: '1',
    productId: '1',
    title: 'Eco-Friendly Bamboo Phone Case',
    price: 2074,
    quantity: 2,
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '2',
    productId: '3',
    title: 'Sustainable Living Guide',
    price: 1659,
    quantity: 1,
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '3',
    productId: '5',
    title: 'Solar Power Bank',
    price: 4149,
    quantity: 1,
    imageUrl: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];
