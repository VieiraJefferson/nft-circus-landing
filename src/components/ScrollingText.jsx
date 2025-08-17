


'use client'
import styles from '@/styles/ScrollingText.module.scss'
import { Luckiest_Guy } from 'next/font/google'

const luckiest = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
})

export default function ScrollingText() {
  const phrase = '✦ coming soon'
  const repetitions = new Array(30).fill(phrase)

  return (
    <>
      <div className={`${styles.marqueeWrapper} ${luckiest.className}`}>
        <div className={styles.marqueeTrack}>
          <span>
            {repetitions.map((text, index) => (
              <span className={styles.textItem} key={index}>{text}</span>
            ))}
          </span>
          <span>
            {repetitions.map((text, index) => (
              <span className={styles.textItem} key={`r2-${index}`}>{text}</span>
            ))}
          </span>
        </div>
      </div>

      {/* ESTA LINHA ESTÁ FORA DO MARQUEE WRAPPER AGORA */}
      <div className={styles.marqueeLine} />
    </>
  )
}
