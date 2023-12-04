import type { Metadata } from 'next'
import { Open_Sans  } from 'next/font/google'
import './globals.css'

const Font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clone',
  description: 'clone of Discord',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Font.className}>{children}</body>
    </html>
  )
}
 