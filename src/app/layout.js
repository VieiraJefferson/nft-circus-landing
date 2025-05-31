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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Fonte principal do corpo será Jura */}
      <body className={jura.className}>
        {/* Você pode usar luckiestGuy.className manualmente nos títulos */}
        {children}
      </body>
    </html>
  )
}
