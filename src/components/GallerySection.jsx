import styles from '@/styles/GallerySection.module.scss'
import { Luckiest_Guy } from 'next/font/google'

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
})

const nftImages = [
  '/Circuskinder_Afrika_01_neu.png',
  '/Circuskinder_Afrika_02_.png',
  '/Circuskinder_Musiker_02.png',
  '/Circuskinder_Altertum_04.png',
  './Circuskinder_Arabien_03.png',
  './Circuskinder_Asien_02.png',
  './Circuskinder_Asien_03.png',
  './Circuskinder_Musiker_03.png',
  './Circuskinder_Zauberer_03.png',
  '/Circuskinder_Zauberer_04.png'
]

export default function GallerySection() {
  return (
    <section className={styles.galleryWrapper}>
      <div className={`${styles.gallery} fade-up ${luckiestGuy.className}`}>
        <h2>Gallery</h2>
        <div className={styles.grid}>
          {nftImages.map((src, index) => (
            <div className={styles.card} key={index}>
              <img src={src} alt={`NFT ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
