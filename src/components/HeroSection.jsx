// 'use client'
// import { easeInOut, motion } from 'framer-motion'
// import styles from '@/styles/HeroSection.module.scss'
// import { Luckiest_Guy } from 'next/font/google'
// import ParallaxImage from './ParallaxImage'

// const luckiestGuy = Luckiest_Guy({
//   subsets: ['latin'],
//   weight: '400',
// })

// const title = "Circuskinder"

// export default function HeroSection() {
//   return (
//     <section className={`${styles.hero}`}>
//       <div className={styles.titleWrapper}>
//         <motion.h1
//           className={`${styles.titleWithImage} ${luckiestGuy.className}`}
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.05,
//               },
//             },
//           }}
//         >
//          {title.split('').map((letter, index) => (
//   <motion.span
//     key={index}
//     variants={{
//       hidden: { opacity: 0, y: 30, scale: 1.6 },
//       visible: { opacity: 1, y: 0, scale: 1 },
//     }}
//     transition={{ duration: 2, easeInOut }}
//   >
//     {letter}
//   </motion.span>
// ))}
//         </motion.h1>

//         <span className={styles.credit}>by Marei Pallas</span>
//       </div>

//       <h2 className={`${styles.subtitle} ${luckiestGuy.className}`}>
//         CIRCUSKINDER IS A HEARTFELT NFT COLLECTION CELEBRATING KIDS OF EVERY COLOR, SHAPE, AND STORY.
//       </h2>

//       {/* <img
//         src="/Header.jpg"
//         alt="NFT Preview"
//         className={styles.preview}
//       /> */}

//       <div className={styles.buttons}>
//         <a href="#">Whitelist</a>
//         <a href="#">Discord</a>
//         <a href="https://x.com/MareiPallas">Twitter</a>
//       </div>
//     </section>
//   )
// }
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

        <span className={styles.credit}>by Marei Pallas</span>
      </div>

      <h2 className={`${styles.subtitle} ${luckiestGuy.className}`}>
        CIRCUSKINDER IS A HEARTFELT NFT COLLECTION CELEBRATING KIDS OF EVERY
        COLOR, SHAPE, AND STORY.
      </h2>

      <div className={styles.buttons}>
        <a href="#">Whitelist</a>
        <a href="#">Discord</a>
        <a href="https://x.com/MareiPallas">
          <FaXTwitter style={{ marginRight: "0.4rem" }} />
        </a>
      </div>
    </section>
  );
}
