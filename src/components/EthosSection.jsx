import styles from '@/styles/EthosSection.module.scss'
import { FaBitcoin, FaTimesCircle, FaPaintBrush } from 'react-icons/fa'
import { Luckiest_Guy } from 'next/font/google'

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
})

export default function EthosSection() {
  return (
    <section className={`${styles.ethos} ${luckiestGuy.className}`}>
      <h2>What We Stand For</h2>
      <div className={styles.items}>
        <div className={styles.card}>
          <FaTimesCircle className={styles.icon} />
          <p>No Token Launch</p>
        </div>
        {/* <div className={styles.card}>
          <FaTimesCircle className={styles.icon} />
          <p>No Discord</p>
        </div> */}
        <div className={styles.card}>
          <FaTimesCircle className={styles.icon} />
          <p>No Promises</p>
        </div>
        <div className={styles.card}>
          <FaBitcoin className={`${styles.icon} ${styles.btc}`} />
          <p>Just Art on Bitcoin</p>
        </div>
      </div>
    </section>
  )
}
