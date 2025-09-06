'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  bio: string;
  profileImage: string;
}

interface UserContextType {
  user: UserProfile | null;
  updateUser: (profile: UserProfile) => void;
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('ecofinds-user');
    const storedLoginStatus = localStorage.getItem('ecofinds-logged-in');
    
    if (storedUser && storedLoginStatus === 'true') {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    } else {
      // Don't set default user data if not logged in
      // Keep user as null and isLoggedIn as false
      setUser(null);
      setIsLoggedIn(false);
    }
  }, []);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('ecofinds-user', JSON.stringify(user));
    }
  }, [user]);

  const updateUser = (profile: UserProfile) => {
    setUser(profile);
  };

  const login = (email: string, password: string) => {
    // Simulate login - in real app, this would call an API
    setIsLoggedIn(true);
    localStorage.setItem('ecofinds-logged-in', 'true');
    
    // Create default user profile if no user exists
    if (!user) {
      const defaultUser: UserProfile = {
        name: 'John Doe',
        email: email,
        phone: '+1 (555) 123-4567',
        address: '123 Eco Street',
        city: 'Green City',
        zipCode: '12345',
        country: 'United States',
        bio: 'Passionate about sustainable living and eco-friendly products. Love discovering new ways to reduce my carbon footprint.',
        profileImage: '/placeholder.png'
      };
      setUser(defaultUser);
    } else {
      // Update user email if provided during login
      const updatedUser = { ...user, email };
      setUser(updatedUser);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('ecofinds-logged-in');
    localStorage.removeItem('ecofinds-user');
    
    // Clear user data completely
    setUser(null);
  };

  return (
    <UserContext.Provider value={{
      user,
      updateUser,
      isLoggedIn,
      login,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
