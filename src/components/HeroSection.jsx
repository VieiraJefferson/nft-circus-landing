
"use client";
import { motion } from "framer-motion";
import styles from "@/styles/HeroSection.module.scss";
import { Luckiest_Guy } from "next/font/google";
import { FaXTwitter } from "react-icons/fa6"; // ou use outro se preferir

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

const title = "Circuskinder";

export default function HeroSection() {
  return (
    <section className={`${styles.hero}`}>
      <div className={styles.titleWrapper}>
        <motion.h1
          className={`${styles.titleWithImage} ${luckiestGuy.className}`}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              className={styles.letterSpan} // <- nova classe aqui
              style={{ display: "inline-block" }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 1.8,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
              }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 1.2,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        
      </div>

      <h2 className={`${styles.subtitle} ${luckiestGuy.className}`}>
        CIRCUSKINDER IS A HEARTFELT NFT COLLECTION CELEBRATING KIDS OF EVERY
        COLOR, SHAPE, AND STORY.
      </h2>

  

    </section>
  );
}
