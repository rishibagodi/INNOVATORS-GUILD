# 🌱 EcoFinds - Sustainable Product Discovery Platform

<div align="center">

![EcoFinds Logo](public/ecofinds-logo.svg)

**Empowering eco-conscious consumers to discover and purchase sustainable products while tracking their environmental impact.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

[🚀 Live Demo](https://your-demo-url.vercel.app) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/rishibagodi/INNOVATORS-GUILD/issues) • [💡 Request Feature](https://github.com/rishibagodi/INNOVATORS-GUILD/issues)

</div>

---

## 📖 Table of Contents

- [🌟 About](#about)
- [✨ Features](#features)  
- [🔧 Prerequisites](#prerequisites)
- [⚡ Quick Start](#quick-start)
- [🛠️ Installation Guide](#installation-guide)
- [📱 Usage](#usage)
- [🎨 Tech Stack](#tech-stack)
- [📁 Project Structure](#project-structure)
- [🔧 Available Scripts](#available-scripts)
- [⚙️ Environment Setup](#environment-setup)
- [🌐 Deployment](#deployment)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

---

## 🌟 About

**EcoFinds** is a comprehensive Next.js application that revolutionizes how consumers discover and purchase eco-friendly products. Built for the INNOVATORS GUILD hackathon, this platform combines modern web technologies with sustainable living principles to create an engaging user experience.

### 🎯 Problem Statement
In today's world, finding genuine eco-friendly products and tracking environmental impact is challenging. EcoFinds bridges this gap by providing a curated platform for sustainable shopping with real-time impact tracking.

### 💡 Our Solution
A modern, responsive web application that offers:
- Curated eco-friendly product catalog
- Real-time environmental impact tracking
- Comprehensive user dashboard
- Seamless shopping experience
- Global accessibility

---

## ✨ Features

### 🔐 **Authentication & User Management**
- ✅ Secure user registration and login
- ✅ Comprehensive profile management
- ✅ Support for 195+ countries
- ✅ Session persistence and logout functionality

### 🛒 **Shopping Experience**
- ✅ Product catalog with search and filters
- ✅ Dynamic product detail pages
- ✅ Smart shopping cart with persistence
- ✅ Real-time cart updates and quantity management
- ✅ Category-based product browsing

### 📊 **Dashboard & Analytics**
- ✅ Personal sustainability dashboard
- ✅ Real-time CO₂ savings tracking
- ✅ Purchase history and statistics
- ✅ Environmental impact visualization
- ✅ Product management for sellers

### 🎨 **UI/UX Excellence**
- ✅ Responsive design (mobile-first)
- ✅ Modern gradient aesthetics
- ✅ Smooth micro-animations
- ✅ Accessibility compliance
- ✅ Professional branding

---

## 🔧 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

| Software | Version | Download Link | Purpose |
|----------|---------|---------------|---------|
| **Node.js** | 18.0+ | [Download](https://nodejs.org/) | Runtime environment |
| **npm** | 9.0+ | Comes with Node.js | Package manager |
| **Git** | Latest | [Download](https://git-scm.com/) | Version control |

### System Requirements

| OS | Minimum | Recommended |
|----|---------|-------------|
| **Windows** | Windows 10 | Windows 11 |
| **macOS** | macOS 10.15 | macOS 12+ |
| **Linux** | Ubuntu 18.04+ | Ubuntu 22.04+ |

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## ⚡ Quick Start

Get EcoFinds running in less than 5 minutes:

```bash
# 1. Clone the repository
git clone https://github.com/rishibagodi/INNOVATORS-GUILD.git

# 2. Navigate to project directory
cd INNOVATORS-GUILD

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open in browser
# Visit http://localhost:3000
```

That's it! 🎉 The application should now be running on your local machine.

---

## 🛠️ Installation Guide

### Step 1: Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/rishibagodi/INNOVATORS-GUILD.git

# Or using SSH (if configured)
git clone git@github.com:rishibagodi/INNOVATORS-GUILD.git

# Navigate to the project directory
cd INNOVATORS-GUILD
```

### Step 2: Verify Node.js Installation

```bash
# Check Node.js version (should be 18.0+)
node --version

# Check npm version (should be 9.0+)
npm --version
```

### Step 3: Install Dependencies

```bash
# Install all project dependencies
npm install

# For yarn users (alternative)
yarn install
```

**Dependencies that will be installed:**
- Next.js 15 (React framework)
- React 18 (UI library)
- TypeScript 5 (Type safety)
- Tailwind CSS 3 (Styling)
- Firebase (Backend services)

### Step 4: Environment Configuration (Optional)

```bash
# Copy environment template
cp .env.local.example .env.local

# Edit with your preferred editor
nano .env.local
# or
code .env.local
```

### Step 5: Start Development Server

```bash
# Start the development server
npm run dev

# The application will be available at:
# http://localhost:3000
```

### Step 6: Verify Installation

1. Open your browser
2. Navigate to `http://localhost:3000`
3. You should see the EcoFinds homepage
4. Try navigating to different pages to ensure everything works

---

## 📱 Usage

### For End Users

1. **🏠 Homepage**: Browse featured eco-friendly products
2. **📝 Sign Up**: Create an account to start your sustainable journey
3. **🔍 Browse Products**: Explore products by category or search
4. **🛒 Shopping Cart**: Add products and manage your cart
5. **📊 Dashboard**: Track your environmental impact and purchases

### For Developers

1. **🔄 Hot Reload**: Make changes and see them instantly
2. **🧪 Testing**: Test features across different devices
3. **🚀 Building**: Create production builds for deployment
4. **📈 Monitoring**: Use built-in development tools

---

## 🎨 Tech Stack

### **Frontend Technologies**
- **Framework**: Next.js 15 with App Router
- **Library**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Context API
- **Animations**: CSS transitions and transforms

### **Backend & Services**
- **Authentication**: Firebase Auth (configured)
- **Database**: Firestore (configured)
- **Storage**: Firebase Storage (configured)
- **Deployment**: Vercel-optimized

### **Development Tools**
- **Language**: TypeScript for type safety
- **Linting**: ESLint with Next.js rules
- **Formatting**: Prettier (recommended)
- **Build System**: Next.js build optimization

---

## 📁 Project Structure

```
INNOVATORS-GUILD/
├── 📁 public/                  # Static assets
│   ├── ecofinds-logo.svg      # Application logo
│   ├── favicon.ico            # Browser icon
│   └── placeholder.png        # Image placeholders
│
├── 📁 src/                     # Source code
│   ├── 📁 app/                 # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   ├── 📁 cart/            # Shopping cart
│   │   ├── 📁 dashboard/       # User dashboard
│   │   ├── 📁 login/           # Authentication
│   │   ├── 📁 signup/          # User registration
│   │   └── 📁 products/        # Product pages
│   │       ├── page.tsx        # Product listing
│   │       ├── 📁 [id]/        # Product details
│   │       └── 📁 add/         # Add products
│   │
│   ├── 📁 components/          # Reusable components
│   │   ├── Navbar.js           # Navigation
│   │   ├── ProductCard.js      # Product display
│   │   ├── ProductForm.js      # Product forms
│   │   └── SearchBar.js        # Search functionality
│   │
│   └── 📁 lib/                 # Utilities & context
│       ├── cart-context.tsx    # Cart state management
│       ├── user-context.tsx    # User authentication
│       ├── products-context.tsx # Product management
│       ├── currency.js         # Currency formatting
│       ├── dummy-data.js       # Sample data
│       ├── firebase.js         # Firebase config
│       └── firestore.js        # Database helpers
│
├── 📄 Configuration Files
│   ├── next.config.js          # Next.js configuration
│   ├── tailwind.config.js      # Tailwind CSS setup
│   ├── tsconfig.json           # TypeScript settings
│   ├── package.json            # Dependencies
│   └── README.md               # This file
```

---

## 🔧 Available Scripts

| Command | Description | When to Use |
|---------|-------------|-------------|
| `npm run dev` | Start development server with hot reload | Local development |
| `npm run build` | Create optimized production build | Before deployment |
| `npm run start` | Start production server | Production environment |
| `npm run lint` | Run ESLint for code quality | Code review |
| `npm run lint:fix` | Fix linting issues automatically | Code cleanup |

### Detailed Script Usage

```bash
# Development (with hot reload)
npm run dev
# Starts server at http://localhost:3000

# Production Build
npm run build
# Creates optimized build in .next/ folder

# Production Server
npm run start
# Serves the built application

# Code Quality
npm run lint
# Checks for code issues
```

---

## ⚙️ Environment Setup

### Basic Setup (No Configuration Needed)

The application works out of the box with demo data. No environment variables are required for basic functionality.

### Advanced Setup (Optional)

For full Firebase integration, create `.env.local`:

```bash
# Copy the example file
cp .env.local.example .env.local
```

Add your Firebase configuration:

```env
# Firebase Configuration (Optional)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef

# Application Settings
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### Environment Variables Explained

| Variable | Purpose | Required |
|----------|---------|----------|
| `NEXT_PUBLIC_FIREBASE_*` | Firebase integration | No (demo works without) |
| `NEXT_PUBLIC_APP_URL` | Application base URL | No |
| `NODE_ENV` | Environment mode | Auto-set |

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (if not already done)
2. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Connect your GitHub account
   - Import the repository
3. **Deploy**: Vercel will automatically build and deploy

### Deploy to Other Platforms

```bash
# Build for production
npm run build

# The build output will be in .next/ folder
# Upload this to your hosting provider
```

### Deployment Checklist

- [ ] Environment variables configured
- [ ] Build completes successfully
- [ ] All pages load correctly
- [ ] Mobile responsiveness verified
- [ ] Performance optimized

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Quick Contribution Guide

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a feature branch
4. **Make** your changes
5. **Test** thoroughly
6. **Submit** a pull request

### Development Workflow

```bash
# 1. Fork and clone
git clone https://github.com/YOUR_USERNAME/INNOVATORS-GUILD.git

# 2. Create feature branch
git checkout -b feature/your-feature-name

# 3. Make changes and test
npm run dev

# 4. Commit changes
git add .
git commit -m "Add your feature description"

# 5. Push and create PR
git push origin feature/your-feature-name
```

### Contribution Guidelines

- 📝 Follow TypeScript best practices
- 🎨 Use Tailwind CSS for styling
- 📱 Ensure mobile responsiveness
- ✅ Test across different browsers
- 📖 Update documentation if needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - you are free to:
✅ Use commercially
✅ Modify and distribute
✅ Use privately
✅ Include in other projects
```

---

## 🆘 Troubleshooting

### Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| **Port 3000 in use** | Use `npm run dev -- -p 3001` |
| **Node version error** | Update to Node.js 18+ |
| **Build fails** | Run `npm install` again |
| **Styles not loading** | Clear browser cache |

### Getting Help

- 📧 **Email**: [support@ecofinds.com](mailto:support@ecofinds.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/rishibagodi/INNOVATORS-GUILD/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/rishibagodi/INNOVATORS-GUILD/discussions)

---

## 🌟 Acknowledgments

<div align="center">

**Built with ❤️ for a sustainable future**

Special thanks to:
- 🏆 **INNOVATORS GUILD** hackathon organizers
- 🌍 Global sustainability movement
- 👥 Next.js and React communities
- 🤝 All contributors and supporters

---

### 🚀 Ready to make an impact?

[**⭐ Star this repo**](https://github.com/rishibagodi/INNOVATORS-GUILD) • [**🍴 Fork and contribute**](https://github.com/rishibagodi/INNOVATORS-GUILD/fork) • [**📢 Share with friends**](https://twitter.com/intent/tweet?text=Check%20out%20EcoFinds%20-%20Sustainable%20Product%20Discovery%20Platform)

</div>

## � Overview

**EcoFinds** is a comprehensive Next.js application that revolutionizes how consumers discover and purchase eco-friendly products. Built for the INNOVATORS GUILD hackathon, this platform combines modern web technologies with sustainable living principles to create an engaging user experience.

### ✨ Key Highlights

- **🔐 Secure Authentication**: Complete user registration and login system with profile management
- **🛒 Smart Shopping Cart**: Persistent cart functionality with real-time updates and localStorage integration
- **📊 Impact Dashboard**: Real-time tracking of environmental impact, CO₂ savings, and purchase history
- **🌍 Global Reach**: Support for 195+ countries in user profiles
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS for seamless cross-device experience
- **⚡ Performance Optimized**: Built with Next.js 15 App Router for lightning-fast page loads

## 🛠️ Technology Stack

### Core Technologies
- **Framework**: Next.js 15 with App Router
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with responsive design system
- **State Management**: React Context API with localStorage persistence
- **Backend Ready**: Firebase configuration (Authentication, Firestore, Storage)
- **Deployment**: Optimized for Vercel deployment

### Development Tools
- **Language**: TypeScript for type safety
- **Linting**: ESLint with Next.js recommended rules
- **Styling**: PostCSS with Tailwind CSS
- **Icons**: Lucide React for consistent iconography

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/INNOVATORS-GUILD.git
   cd INNOVATORS-GUILD
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your Firebase configuration
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Application Features

### 🔐 Authentication System
- **User Registration**: Complete signup with email, password, and profile information
- **Secure Login**: Email/password authentication with session persistence
- **Profile Management**: Edit profile details including country selection from 195+ options
- **Authentication Guards**: Protected routes for cart, dashboard, and product management

### 🛒 Shopping Experience
- **Product Discovery**: Browse eco-friendly products with category filtering
- **Smart Search**: Real-time search functionality across product catalog
- **Product Details**: Comprehensive product pages with detailed information
- **Cart Management**: Add, remove, and update quantities with persistent storage
- **Category Filters**: Electronics, Furniture, Books, Clothing, Sports, and more

### � User Dashboard
- **Real-time Statistics**: Track products purchased, CO₂ saved, and months active
- **Purchase History**: Complete order tracking and history
- **Profile Editing**: Update personal information and preferences
- **Environmental Impact**: Visual representation of sustainability contributions
- **Global Support**: Country selection from comprehensive list of 195+ countries

### 💚 Sustainability Focus
- **Environmental Impact Tracking**: Real-time CO₂ savings calculation
- **Eco-friendly Product Catalog**: Curated selection of sustainable products
- **Green Metrics**: Visual dashboards showing environmental contributions
- **Sustainable Living Tips**: Educational content and recommendations

## 📁 Project Architecture

```
INNOVATORS-GUILD/
├── 📄 Configuration Files
│   ├── next.config.js           # Next.js configuration
│   ├── tailwind.config.js       # Tailwind CSS setup
│   ├── tsconfig.json           # TypeScript configuration
│   └── package.json            # Dependencies and scripts
├── 📁 public/                  # Static assets
│   ├── favicon.ico
│   └── placeholder.png
├── 📁 src/                     # Source code
│   ├── 📁 app/                 # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout component
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   ├── cart/               # Shopping cart page
│   │   ├── dashboard/          # User dashboard
│   │   ├── login/              # Authentication pages
│   │   ├── signup/
│   │   └── products/           # Product catalog
│   │       ├── page.tsx        # Product listing
│   │       ├── [id]/           # Dynamic product details
│   │       └── add/            # Add new products
│   ├── 📁 components/          # Reusable UI components
│   │   ├── Navbar.js           # Navigation component
│   │   ├── ProductCard.js      # Product display card
│   │   ├── ProductForm.js      # Product creation form
│   │   └── SearchBar.js        # Search and filter component
│   └── 📁 lib/                 # Utilities and context
│       ├── cart-context.tsx    # Shopping cart state management
│       ├── user-context.tsx    # User authentication context
│       ├── dummy-data.js       # Sample product data
│       ├── firebase.js         # Firebase configuration
│       └── firestore.js        # Database helper functions
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## � Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Application Settings
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🎨 Design System

### Color Palette
- **Primary**: Green (#059669) - Representing sustainability and growth
- **Secondary**: Gray (#374151) - Professional and clean
- **Background**: Light Gray (#F9FAFB) - Soft and welcoming
- **Text**: Dark Gray (#111827) - High contrast for readability

### Component Standards
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: WCAG 2.1 compliant color contrasts and keyboard navigation
- **Consistency**: Unified spacing, typography, and interaction patterns
- **Modern UI**: Clean interfaces with subtle shadows and hover effects

## 🤝 Contributing

We welcome contributions to make EcoFinds even better! This hackathon project is open for community involvement.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Write clear, documented code
- Test thoroughly across different devices

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Built for the **INNOVATORS GUILD** hackathon
- Inspired by the global movement toward sustainable living
- Powered by the amazing Next.js and React communities

---

**Made with � for a sustainable future** | [Live Demo](https://your-demo-url.vercel.app) | [Report Bug](https://github.com/your-username/INNOVATORS-GUILD/issues) | [Request Feature](https://github.com/your-username/INNOVATORS-GUILD/issues)
