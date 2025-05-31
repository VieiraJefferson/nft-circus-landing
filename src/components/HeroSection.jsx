import styles from '@/styles/HeroSection.module.scss'
import { Luckiest_Guy } from 'next/font/google'
import ParallaxImage from './ParallaxImage'

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
})

export default function HeroSection() {
  return (
    <section className={`${styles.hero}`}>
<div className={styles.titleWrapper}>
  <h1 className={`${styles.titleWithImage} ${luckiestGuy.className}`}>
    Circuskinder
  </h1>
  <span className={styles.credit}>by Marei Pallas</span>
</div>
   
      {/* <img
        src="/Header.jpg"
        alt="NFT Preview"
        className={styles.preview}
      /> */}

      <div className={styles.buttons}>
        <a href="#">Whitelist</a>
        <a href="#">Discord</a>
        <a href="https://x.com/MareiPallas">Twitter</a>
      </div>
    </section>
  )
}
