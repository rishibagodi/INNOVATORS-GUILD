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
  signup: (name: string, email: string, password: string) => void;
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
    
    // Only create default user profile if no user exists and we don't have stored data
    if (!user) {
      const storedUser = localStorage.getItem('ecofinds-user');
      if (!storedUser) {
        // Create minimal default user profile for new login without signup
        const defaultUser: UserProfile = {
          name: '',
          email: email,
          phone: '',
          address: '',
          city: '',
          zipCode: '',
          country: '',
          bio: '',
          profileImage: '/placeholder.png'
        };
        setUser(defaultUser);
      }
    } else {
      // Update user email if provided during login
      const updatedUser = { ...user, email };
      setUser(updatedUser);
    }
  };

  const signup = (name: string, email: string, password: string) => {
    // Create new user profile with the provided information
    const newUser: UserProfile = {
      name: name,
      email: email,
      phone: '',
      address: '',
      city: '',
      zipCode: '',
      country: '',
      bio: '',
      profileImage: '/placeholder.png'
    };
    
    setUser(newUser);
    setIsLoggedIn(true);
    localStorage.setItem('ecofinds-logged-in', 'true');
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
      signup,
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
