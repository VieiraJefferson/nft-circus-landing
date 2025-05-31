'use client'
import styles from '@/styles/ScrollingText.module.scss'
import { Luckiest_Guy } from 'next/font/google'

const luckiest = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
})

export default function ScrollingText() {
  const phrase = '✦ Circuskinder is Comming soon!    • Diversity in motion    •    NFTs with soul • Just art — no promises   •    Art on Bitcoin ✦'

  return (
    <div className={`${styles.marqueeWrapper} ${luckiest.className}`}>
      <div className={styles.marqueeTrack}>
        <span>{phrase}</span>
        <span>{phrase}</span>
        <span>{phrase}</span>
        <span>{phrase}</span>
      </div>
    </div>
  )
}
