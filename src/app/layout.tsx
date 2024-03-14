import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'La Primavera Quartet',
  description: 'La Primavera gudački kvartet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html style={{ scrollBehavior: 'smooth' }} lang="en">
      <body className='font-clash'>{children}</body>
    </html>
  )
}