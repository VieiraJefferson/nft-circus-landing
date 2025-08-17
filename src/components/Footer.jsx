import styles from '@/styles/Footer.module.scss'
import { Luckiest_Guy } from 'next/font/google'
import { FaGlobe } from 'react-icons/fa6'

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
})

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${luckiestGuy.className}`}>
      <p>
        © 2025 VieiraDev •  
        <a href="https://magiceden.io/">Magic Eden</a> • 
        <a href="#">Discord</a> • 
        <a href="https://x.com/MareiPallas">Twitter</a> • 
        <a href="https://pallasgalaxy.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <FaGlobe /> Marei Pallas
        </a>
      </p>
    </footer>
  )
}
