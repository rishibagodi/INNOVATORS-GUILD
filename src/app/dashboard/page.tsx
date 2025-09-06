'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar.js';
import { useUser } from '@/lib/user-context';
import { useCart } from '@/lib/cart-context';
import { useProducts } from '@/lib/products-context';

export default function Dashboard() {
  const { user, updateUser, isLoggedIn, logout, addPurchase } = useUser();
  const { cartItems } = useCart();
  const { getUserProducts } = useProducts();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  const [editedProfile, setEditedProfile] = useState(user);

  // Get user's created products
  const userCreatedProducts = user ? getUserProducts(user.email) : [];

  // Comprehensive country list
  const countries = [
    "", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
    "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
    "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
    "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
    "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
    "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen", "Zambia", "Zimbabwe"
  ];

  // Calculate user statistics
  const calculateStats = () => {
    if (!user) return { productsOrdered: 0, co2Saved: 0, monthsActive: 0 };

    // Products ordered (from purchase history)
    const productsOrdered = user.purchaseHistory ? user.purchaseHistory.length : 0;

    // CO2 saved (estimate: 2.5kg per eco-friendly product)
    const co2Saved = productsOrdered * 2.5;

    // Months active (since join date)
    let monthsActive = 0;
    if (user.joinDate) {
      const joinDate = new Date(user.joinDate);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - joinDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      monthsActive = Math.max(1, Math.ceil(diffDays / 30)); // At least 1 month
    } else {
      monthsActive = 1; // Default for new users
    }

    return { productsOrdered, co2Saved, monthsActive };
  };

  const stats = calculateStats();

  // Check authentication status on component mount
  useEffect(() => {
    // Give a moment for user context to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProfile(user);
  };

  const handleSave = () => {
    if (editedProfile) {
      updateUser(editedProfile);
      setIsEditing(false);
      alert('Profile updated successfully!');
    }
  };

  const handleCancel = () => {
    setEditedProfile(user);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    if (editedProfile) {
      setEditedProfile(prev => prev ? ({
        ...prev,
        [field]: value
      }) : null);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        if (isEditing && editedProfile) {
          setEditedProfile(prev => prev ? ({
            ...prev,
            profileImage: imageUrl
          }) : null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleLogout = () => {
    logout();
    alert('Logged out successfully!');
  };

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  // Demo function to add sample purchases for testing
  const addDemoData = () => {
    if (user) {
      addPurchase('eco-bottle-1');
      addPurchase('solar-charger-2');
      addPurchase('bamboo-toothbrush-3');
      alert('Added demo purchase data!');
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <div className="text-gray-600">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  // Not logged in state - show login prompt
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              <h1 className="text-3xl font-bold text-primary-600 mb-2">EcoFinds</h1>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Your Dashboard</h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="mb-6">
                  <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Sign In Required</h3>
                  <p className="text-gray-600 mb-6">
                    Please sign in to access your personalized dashboard with profile management, order history, and eco-impact tracking.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <button
                    onClick={handleLoginRedirect}
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                  >
                    Sign In to Dashboard
                  </button>
                  
                  <div className="text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <Link href="/signup" className="text-primary-600 hover:text-primary-700 font-medium">
                      Sign up here
                    </Link>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link 
                      href="/products" 
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      ← Continue browsing products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // User not found but logged in (shouldn't happen, but safety check)
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <p className="text-gray-600 mb-4">Unable to load user profile.</p>
            <button
              onClick={handleLoginRedirect}
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Return to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentProfile = isEditing ? editedProfile : user;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-gray-900">EcoFinds</h1>
              <span className="text-sm text-gray-500">User Dashboard</span>
            </div>
            <div className="flex space-x-3">
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Image Section */}
            <div className="lg:col-span-1">
              <div className="text-center">
                <div className="relative inline-block">
                  <Image
                    src={currentProfile?.profileImage || '/placeholder.png'}
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className="w-48 h-48 rounded-full object-cover border-4 border-gray-200"
                  />
                  {isEditing && (
                    <button
                      onClick={triggerFileInput}
                      className="absolute bottom-2 right-2 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors"
                      title="Change profile picture"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <h2 className="mt-4 text-2xl font-bold text-gray-900">{currentProfile?.name || 'User'}</h2>
                <p className="text-gray-600">{currentProfile?.email || 'No email'}</p>
                {isLoggedIn && (
                  <button
                    onClick={handleLogout}
                    className="mt-2 text-sm text-red-600 hover:text-red-800 transition-colors"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>

            {/* Profile Details Section */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={currentProfile?.name || ''}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-gray-900"
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{currentProfile?.name || 'Not specified'}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={currentProfile?.email || ''}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-gray-900"
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{currentProfile?.email || 'Not specified'}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={currentProfile?.phone || ''}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-gray-900"
                      placeholder="Enter phone number"
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{currentProfile?.phone || 'Not specified'}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={currentProfile?.address || ''}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-gray-900"
                      placeholder="Enter street address"
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{currentProfile?.address || 'Not specified'}</p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={currentProfile?.city || ''}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-gray-900"
                      placeholder="Enter city"
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{currentProfile?.city || 'Not specified'}</p>
                  )}
                </div>

                {/* Zip Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={currentProfile?.zipCode || ''}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-gray-900"
                      placeholder="Enter zip code"
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{currentProfile?.zipCode || 'Not specified'}</p>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  {isEditing ? (
                    <select
                      value={currentProfile?.country || ''}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-gray-900"
                    >
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country || "Select a country"}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p className="text-gray-900 py-2">{currentProfile?.country || 'Not specified'}</p>
                  )}
                </div>
              </div>

              {/* Bio Section */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                {isEditing ? (
                  <textarea
                    value={currentProfile?.bio || ''}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-gray-900 placeholder-gray-500"
                    placeholder="Tell us about yourself and your eco-friendly journey..."
                  />
                ) : (
                  <p className="text-gray-900 py-2 leading-relaxed">{currentProfile?.bio || 'No bio provided'}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* My Products Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">My Products</h3>
            <Link 
              href="/products/add"
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors text-sm"
            >
              Add New Product
            </Link>
          </div>
          
          {userCreatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {userCreatedProducts.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{product.title}</h4>
                  <p className="text-gray-600 text-xs mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-bold text-sm">${product.price}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Created: {product.createdAt ? new Date(product.createdAt).toLocaleDateString() : 'Unknown'}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h4 className="text-gray-600 font-medium mb-2">No products created yet</h4>
              <p className="text-gray-500 text-sm mb-4">Start sharing your eco-friendly products with the community!</p>
              <Link 
                href="/products/add"
                className="inline-flex items-center bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Your First Product
              </Link>
            </div>
          )}
        </div>

        {/* Additional Stats/Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600">{stats.productsOrdered}</div>
            <div className="text-gray-600">Products Ordered</div>
            <div className="text-xs text-gray-500 mt-1">Eco-friendly purchases</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600">{stats.co2Saved.toFixed(1)}kg</div>
            <div className="text-gray-600">CO₂ Saved</div>
            <div className="text-xs text-gray-500 mt-1">Environmental impact</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600">{stats.monthsActive}</div>
            <div className="text-gray-600">Months Active</div>
            <div className="text-xs text-gray-500 mt-1">Since joining EcoFinds</div>
          </div>
        </div>

        {/* Demo Data Button (for testing) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-yellow-800 mb-2">Development Mode</h4>
              <button
                onClick={addDemoData}
                className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors text-sm"
              >
                Add Demo Purchase Data
              </button>
              <p className="text-xs text-yellow-700 mt-2">This button is only visible in development mode</p>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
