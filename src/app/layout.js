import '../styles/global.scss'

import { Jura, Luckiest_Guy } from 'next/font/google'

// Fonte para corpo do texto
const jura = Jura({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

// Fonte decorativa para títulos
const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'Circuskinder',
  description: 'A visual journey into the imaginary',
  icons: {
    icon: '/circus-favicon.png?v=' + Date.now(),
    shortcut: '/circus-favicon.png?v=' + Date.now(),
    apple: '/circus-favicon.png?v=' + Date.now(),
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/circus-favicon.png" />
        <link rel="shortcut icon" href="/circus-favicon.png" />
        <link rel="apple-touch-icon" href="/circus-favicon.png" />
      </head>
      {/* Fonte principal do corpo será Jura */}
      <body className={jura.className}>
        {/* Você pode usar luckiestGuy.className manualmente nos títulos */}
        {children}
      </body>
    </html>
  )
}
