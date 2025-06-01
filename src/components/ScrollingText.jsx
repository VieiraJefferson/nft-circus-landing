// 'use client'
// import styles from '@/styles/ScrollingText.module.scss'
// import { Luckiest_Guy } from 'next/font/google'

// const luckiest = Luckiest_Guy({
//   subsets: ['latin'],
//   weight: '400',
// })

// const phrases = [
//   '✦ Circuskinder is a celebration of imagination',
//   '✦ Diversity in motion',
//   '✦ NFTs with soul',
//   '✦ Just art — no promises',
//   '✦ Art on Bitcoin'
// ]

// export default function ScrollingText() {
//   return (
//     <div className={`${styles.marqueeWrapper} ${luckiest.className}`}>
//       <div className={styles.marqueeTrack}>
//         {[...phrases, ...phrases].map((text, i) => (
//           <span key={i}>{text}</span>
//         ))}
//       </div>
//     </div>
//   )
// }
  
// 'use client'
// import styles from '@/styles/ScrollingText.module.scss'
// import { Luckiest_Guy } from 'next/font/google'

// const luckiest = Luckiest_Guy({
//   subsets: ['latin'],
//   weight: '400',
// })

// export default function ScrollingText() {
//   const phrase = '   ✦ comming soon   '
//   const repetitions = Array(30).fill(phrase).join(' ') // conteúdo base

//   return (
//     <div className={`${styles.marqueeWrapper} ${luckiest.className}`}>
//       <div className={styles.marqueeTrack}>
//         <span>{repetitions}</span>
//         <span>{repetitions}</span>
//       </div>
//     </div>


//   )
// }


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
