import { ImageSwiper } from './image-swiper'
import styles from '@/styles/ImageStack.module.scss'
import { Luckiest_Guy } from 'next/font/google'
import { useEffect, useState } from 'react'

const imageList = [
  '/Arials-mit-Rahmen.png',
  '/Zauberer.1.png',
  '/Rahmen-Jonlgeure.png',
]

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

export default function ImageStack() {
  const images = imageList.join(', ')
  const [cardSize, setCardSize] = useState({ width: 480, height: 480 })

  useEffect(() => {
    const updateCardSize = () => {
      const width = window.innerWidth
      if (width <= 375) {
        setCardSize({ width: 180, height: 180 })
      } else if (width <= 430) {
        setCardSize({ width: 200, height: 200 })
      } else if (width <= 480) {
        setCardSize({ width: 220, height: 220 })
      } else if (width <= 768) {
        setCardSize({ width: 280, height: 280 })
      } else if (width <= 900) {
        setCardSize({ width: 320, height: 320 })
      } else {
        setCardSize({ width: 480, height: 480 })
      }
    }

    updateCardSize()
    window.addEventListener('resize', updateCardSize)
    return () => window.removeEventListener('resize', updateCardSize)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.cardContainer}>
        <ImageSwiper 
          images={images}
          cardWidth={cardSize.width}
          cardHeight={cardSize.height}
          className="w-full h-full"
        />
      </div>
      <div className={`${styles.textSection} ${luckiestGuy.className}`}>
        <h2>Welcome to the world of Circuskinder</h2>
        <p>A hand-drawn Art collection that celebrates imagination, play, and gentle individuality.

Each character is a one-of-a-kind circus child, lovingly illustrated to reflect rhythm, color, and quiet magic.
From aerial acrobats to balancing bees, every figure has its own story, full of movement, joy, and expression.

We believe in the beauty of diversity and the power of wonder.
Pure art on Bitcoin.
It's a colorful place, and there's always room for one more in the ring.
</p>
        {/* <button>Connect Wallet</button> */}
      </div>
    </section>
  )
}
 

