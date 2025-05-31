'use client'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import styles from '@/styles/ParallaxImage.module.scss'

export default function ParallaxImage() {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20% visível já ativa
    triggerOnce: false,
  })

  return (
    <div className={styles.container} ref={ref}>
      <motion.img
        src="/Header.png"
        alt="Circuskinder Header"
        className={styles.image}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  )
}
