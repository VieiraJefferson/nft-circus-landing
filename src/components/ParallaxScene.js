'use client'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import '../styles/parallax.scss'

export default function ParallaxScene() {
  return (
    <>
      {/* Personagem fixo na frente */}
      <img src="/images/personagem.png" className="fixed-character" alt="Personagem" />

      <Parallax pages={4} className="parallax-wrapper">
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="scene background1" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <div className="scene background2" />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <div className="scene background3" />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.3}>
          <div className="scene background4" />
        </ParallaxLayer>
      </Parallax>
    </>
  )
}
