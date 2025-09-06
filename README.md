# 🌱 EcoFinds - Sustainable Product Discovery Platform

> *Empowering eco-conscious consumers to discover and purchase sustainable products while tracking their environmental impact.*

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

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
- Special thanks to all contributors and sustainability advocates

---

**Made with � for a sustainable future** | [Live Demo](https://your-demo-url.vercel.app) | [Report Bug](https://github.com/your-username/INNOVATORS-GUILD/issues) | [Request Feature](https://github.com/your-username/INNOVATORS-GUILD/issues)
