// 'use client'
// import { motion } from 'framer-motion'
// import styles from '@/styles/JugglingItems.module.scss'

// const jugglingItems = [
//   '/juggle1.png',
//   '/juggle2.png',
//   '/juggle3.png'
// ]

// export default function JugglingItems() {
//   return (
//     <div className={styles.juggleWrapper}>
//       {jugglingItems.map((src, i) => (
//         <motion.img
//           key={i}
//           src={src}
//           alt={`juggle-${i}`}
//           className={styles.item}
//           initial={{ x: -100, y: 0, rotate: 0 }}
//           animate={{ 
//             x: [ -100, 100, -100 ],
//             y: [ 0, -50, 0 ],
//             rotate: [0, 360, 0]
//           }}
//           transition={{
//             duration: 4 + i,
//             repeat: Infinity,
//             ease: 'easeInOut',
//             delay: i * 0.5
//           }}
//         />
//       ))}
//     </div>
//   )
// }



'use client'
import { motion } from 'framer-motion'
import styles from '@/styles/JugglingItems.module.scss'

const jugglingItems = [
  '/juggle1.png',
  '/juggle2.png',
  '/juggle3.png'
]

export default function JugglingItems() {
  return (
    <div className={styles.juggleWrapper}>
      {jugglingItems.map((src, i) => (
       <motion.img
  key={i}
  src={src}
  alt={`juggle-${i}`}
  className={styles.item}
  initial={{ x: '-10%', opacity: 0 }}
  animate={{ 
    x: '110vw',
    opacity: [0, 1, 1, 0],
    rotate: 360 * 3 // gira 3 voltas completas
  }}
  transition={{
    x: {
      duration: 6 + i,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
      delay: i * 1.5
    },
    rotate: {
      duration: 2, // velocidade do giro
      repeat: Infinity,
      ease: 'linear'
    }
  }}
  style={{
    top: `${i * 50}px`,
    left: 0
  }}
/>

      ))}
    </div>
  )
}


