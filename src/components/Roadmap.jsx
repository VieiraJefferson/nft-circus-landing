import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/Roadmap.module.scss'
import { Luckiest_Guy } from 'next/font/google'

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

// Roadmap data for Circuskinder
const roadmapItems = [
  {
    id: 1,
    question: "What is the beginning?",
    answer: "The curtain rises, Mint Phase 1 starts 31/08/2025. The first Circuskinder artworks are minted on Bitcoin, marking the official start of the journey.Every day, a whitelist spot is raffled within the community, your chance to secure early access."
   },
  {
    id: 2,
    question: "What happens on August 31?",
    answer: "That’s when Mint Phase 1 begins, the Public Mint (Aug 31). From this day on, everyone can join the circus and claim their Circuskinder."
  },
  {
    id: 3,
    question: "What comes after the mint?",
    answer: "After the public mint, a Token for Good will be launched. It’s about access to drops, supporting artistic & social projects, and giving the community a voice in shaping the future."
  },
  {
    id: 4,
    question: "What about the BRC-20 token?  ",
    answer: " A BRC-20 token will be airdropped exclusively to Circuskinder holders. This token is designed as a “Token for Good”, and it will also extend to the next upcoming collection, connecting both worlds.   "
  },
  {
    id: 5,
    question: "What is the utility of the token?",
    answer: "The token is about creating real value: it gives access to exclusive drops and early previews, supports artistic and social projects, allows holders to take part in decisions, and strengthens the bond between art, collectors, and future collaborations. "
  }
];

export default function Roadmap() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={styles.roadmapWrapper}>
      <motion.div 
        className={styles.container}
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className={`${styles.sectionTitle} ${luckiestGuy.className}`}
          variants={fadeInUp}
        >
          ROADMAP
        </motion.h2>
        
        <div className={styles.content}>
          {/* Left side - Title */}
          <motion.div className={styles.titleSection} variants={fadeInUp}>
            <h1 className={`${styles.mainTitle} ${luckiestGuy.className}`}>
            If you love magic, <br />
            welcome to Circuskinder world.<br />
            
            </h1>
          </motion.div>

          {/* Right side - Cards */}
          <motion.div className={styles.cardsSection} variants={fadeInUp}>
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`${styles.card} ${openCard === item.id ? styles.cardOpen : ''}`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div 
                  className={styles.cardHeader}
                  onClick={() => toggleCard(item.id)}
                >
                  <h3 className={`${styles.cardTitle} ${luckiestGuy.className}`}>
                    {item.question}
                  </h3>
                  <motion.div 
                    className={styles.cardIcon}
                    animate={{ rotate: openCard === item.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className={styles.plus}>+</span>
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openCard === item.id && (
                    <motion.div
                      className={styles.cardContent}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className={styles.cardText}>
                        <p className={luckiestGuy.className}>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
