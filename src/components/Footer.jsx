import styles from '@/styles/Footer.module.scss'
import { Luckiest_Guy } from 'next/font/google'
import { FaXTwitter } from 'react-icons/fa6'

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
})

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${luckiestGuy.className}`}>
      <div className={styles.container}>
        {/* Left Section - Navigation Links */}
        <div className={styles.leftSection}>
          <div className={styles.navLinks}>
            <h3 className={styles.sectionTitle}>PLAY ART</h3>
            <h3 className={styles.sectionTitle}>JOIN THE CIRCUS</h3>
          </div>
          <div className={styles.navLinks}>
            <h3 className={styles.sectionTitle}>LET'S BUILD</h3>
            <h3 className={styles.sectionTitle}>TOGHETER</h3>
          </div>
          <div className={styles.buySection}>
            <h3 className={styles.buyTitle}>BRC-20 </h3>
          </div>
        </div>

        {/* Right Section - Social Media */}
        <div className={styles.rightSection}>
          <h3 className={styles.followTitle}>FOLLOW @mareipallas</h3>
          <div className={styles.socialIcons}>
            <a href="https://x.com/MareiPallas" className={`${styles.socialIcon} ${styles.twitter}`}>
              <FaXTwitter />
          
            </a>
          </div>
        </div>

        {/* Character Image */}
        <div className={styles.character}>
          <img src="/juggle1.png" alt="Circus Character" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
       
        <div className={styles.copyright}>
          <p>COPYRIGHT © 2025 CIRCUSKINDER, INC. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  )
}
