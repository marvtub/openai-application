import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: 'Marvin Aziz - OpenAI Application',
  description:
    'An interactive journey showcasing my path with AI and why I want to join OpenAI. Built with Next.js, TypeScript, and Framer Motion.',
  keywords: ['OpenAI', 'AI', 'Next.js', 'TypeScript', 'Framer Motion', 'Interactive Application'],
  authors: [{ name: 'Marvin Aziz', url: 'https://www.linkedin.com/in/marvin-aziz/' }],
  creator: 'Marvin Aziz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webtotheflow.com',
    title: 'Marvin Aziz - OpenAI Application',
    description: 'An interactive journey showcasing my path with AI and why I want to join OpenAI.',
    siteName: 'Marvin Aziz - OpenAI Application',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marvin Aziz - OpenAI Application',
    description: 'An interactive journey showcasing my path with AI and why I want to join OpenAI.',
    creator: '@marvinaziz',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
