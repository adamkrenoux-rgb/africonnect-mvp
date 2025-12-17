import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Africonnect',
  description: 'Welcome to Africonnect',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

