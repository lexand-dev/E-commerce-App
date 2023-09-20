import type { Metadata } from 'next'
import { ShoppingCartProvider } from '../Context'
import { CheckoutSideMenu } from '../components/CheckoutSideMenu'
import NavBar from '../components/NavBar'
import { ProductDetail } from '../components/ProductDetail'
import './globals.css'



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <ShoppingCartProvider>
      <body className="flex flex-col mt-20 items-center">
      <NavBar />
        {children}
        <ProductDetail />
        <CheckoutSideMenu />
      </body>
      </ShoppingCartProvider>
    </html>
  )
}
