'use client'
import ConfettiRain from '@/components/ConfettiRain'
import HeroSection from '@/components/HeroSection'
import JugglingItems from '@/components/JugglingItems'
import ParallaxImage from '@/components/ParallaxImage'
import ScrollingText from '@/components/ScrollingText'

import GallerySection from '@/components/GallerySection'

import Footer from '@/components/Footer'
import EthosSection from '@/components/EthosSection'

export default function Home() {
  return (
    <main>
      <ConfettiRain />
      <JugglingItems />
      <ScrollingText />
      <JugglingItems />
      <HeroSection />
      <ParallaxImage />
      <GallerySection />
      <EthosSection />
      
      <Footer />
    </main>
  )
}


