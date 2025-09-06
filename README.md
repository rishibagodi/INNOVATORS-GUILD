# EcoFinds

A Next.js + Firebase application for sustainable living and eco-friendly product discovery.

## 🌱 About

EcoFinds helps users discover eco-friendly products and sustainable living solutions. Built for hackathon with modern web technologies.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Deployment**: Vercel

## 🚀 Getting Started

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd INNOVATORS-GUILD
   npm install
   ```

2. **Set up Firebase:**
   - Create a Firebase project at https://console.firebase.google.com
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Firebase configuration values

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
└── lib/                # Firebase configuration and utilities
    ├── firebase.js      # Firebase initialization
    └── firestore.js     # Firestore helper functions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Features

- [ ] User authentication
- [ ] Product discovery
- [ ] Sustainable living tips
- [ ] User reviews and ratings
- [ ] Eco-friendly marketplace

## 📝 Environment Variables

See `.env.local.example` for required environment variables.

## 🤝 Contributing

This is a hackathon project. Feel free to contribute!

## 📄 License

MIT License
