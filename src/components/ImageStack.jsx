import { ImageSwiper } from './image-swiper'
import styles from '@/styles/ImageStack.module.scss'
import { Luckiest_Guy } from 'next/font/google'

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

  return (
    <section className={styles.section}>
      <div className={styles.cardContainer}>
        <ImageSwiper 
          images={images}
          cardWidth={480}
          cardHeight={480}
          className="w-full h-full"
        />
      </div>
      <div className={`${styles.textSection} ${luckiestGuy.className}`}>
        <h2>Welcome to the world of Circuskinder</h2>
        <p>A hand-drawn Art collection that celebrates imagination, play, and gentle individuality.

Each character is a one-of-a-kind circus child, lovingly illustrated to reflect rhythm, color, and quiet magic.
From aerial acrobats to balancing bees, every figure has its own story, full of movement, joy, and expression.

We believe in the beauty of diversity and the power of wonder.
No roadmap, no gimmicks, just pure art on Bitcoin.
It's a colorful place, and there's always room for one more in the ring.
</p>
        {/* <button>Connect Wallet</button> */}
      </div>
    </section>
  )
}
 

