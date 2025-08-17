'use client'
import ConfettiRain from '@/components/ConfettiRain'
import HeroSection from '@/components/HeroSection'
import JugglingItems from '@/components/JugglingItems'
import ParallaxImage from '@/components/ParallaxImage'
import ScrollingText from '@/components/ScrollingText'

import CircularGallery from '@/components/CircularGallery'

import Footer from '@/components/Footer'
import EthosSection from '@/components/EthosSection'
import WhitelistForm from '@/components/WhitelistForm'
import ImageStack from '@/components/ImageStack'
import MintInfo from '@/components/MintInfo'
import Roadmap from '@/components/Roadmap'


export default function Home() {
  return (
    <main>
      <ConfettiRain />
      <JugglingItems />
      <ScrollingText />
      <HeroSection />     
      <CircularGallery />
      {/* <WhitelistForm /> */}
      <ImageStack/>
      <MintInfo />
      <Roadmap />
      {/* <EthosSection /> */}
      
      <Footer />
    </main>
  )
}


