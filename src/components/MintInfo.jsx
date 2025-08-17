import { motion } from 'framer-motion'
import styles from '@/styles/MintInfo.module.scss'
import { Luckiest_Guy } from 'next/font/google'

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

export default function MintInfo() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className={styles.mintInfo}>
      <motion.div 
        className={styles.container}
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Decorative elements */}
        <div className={styles.decorativeElements}>
          <div className={styles.star1}></div>
          <div className={styles.star2}></div>
          <div className={styles.cube1}></div>
          <div className={styles.cube2}></div>
        </div>



        <motion.h2 
          className={`${styles.title} ${luckiestGuy.className}`}
          variants={fadeInUp}
        >
          MINT INFO
        </motion.h2>

        <div className={styles.infoContent}>
          <motion.div className={styles.infoItem} variants={fadeInUp}>
            <h3 className={`${styles.label} ${luckiestGuy.className}`}>MINT DATE</h3>
            <p className={`${styles.value} ${styles.soldOut} ${luckiestGuy.className}`}>31/08/2025</p>
          </motion.div>

          <motion.div className={styles.infoItem} variants={fadeInUp}>
            <h3 className={`${styles.label} ${luckiestGuy.className}`}>SUPPLY</h3>
            <p className={`${styles.value} ${luckiestGuy.className}`}>100 CIRCUSKINDER</p>
          </motion.div>

          <motion.div className={styles.infoItem} variants={fadeInUp}>
            <h3 className={`${styles.label} ${luckiestGuy.className}`}>WHITELIST (WL)</h3>
            <p className={`${styles.value} ${luckiestGuy.className}`}>50$ IN <span className={styles.btcColor}>$BTC</span></p>
          </motion.div>

          <motion.div className={styles.infoItem} variants={fadeInUp}>
            <h3 className={`${styles.label} ${luckiestGuy.className}`}>PUBLIC MINT</h3>
            <p className={`${styles.value} ${luckiestGuy.className}`}>100$ IN <span className={styles.btcColor}>$BTC</span></p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
