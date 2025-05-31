'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/ConfettiRain.module.scss'

export default function ConfettiRain() {
  const confettis = Array.from({ length: 30 })

  return (
    <div className={styles.confettiWrapper}>
      {confettis.map((_, i) => (
        <motion.div
          key={i}
          className={styles.confetti}
          style={{ left: `${Math.random() * 100}%`, backgroundColor: getRandomColor() }}
          initial={{ y: -100 }}
          animate={{ y: '110vh' }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function getRandomColor() {
  const colors = ['#fbbf24', '#f472b6', '#60a5fa', '#34d399', '#f87171']
  return colors[Math.floor(Math.random() * colors.length)]
}
