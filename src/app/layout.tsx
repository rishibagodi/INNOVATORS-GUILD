import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from '@/lib/cart-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EcoFinds - Sustainable Living Made Easy',
  description: 'Discover eco-friendly products and sustainable living solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
