import styles from '@/styles/Footer.module.scss'
import { Luckiest_Guy } from 'next/font/google'

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
})

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${luckiestGuy.className}`}>
      <p>
        © 2025 VieiraDev| 
        <a href="#">Magic Eden</a> • 
        <a href="#">Discord</a> • 
        <a href="https://x.com/MareiPallas">Twitter</a>
      </p>
    </footer>
  )
}
