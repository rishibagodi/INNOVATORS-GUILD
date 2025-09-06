import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from '@/lib/cart-context'
import { UserProvider } from '@/lib/user-context'

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
        <UserProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  )
}
