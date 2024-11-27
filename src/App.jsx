import './App.css'
import 'aos/dist/aos.css'
import HorizontalScroll from './components/HorizontalScroll'

import CarouselSection from './features/Carousel'
import HeroSection from './features/Hero'
import { useEffect } from 'react'
import Aos from 'aos'
import TopVotedTalentSection from './features/TopVotedTalents'

function App() {
  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])
  return (
    <div className="font-poppins">
      <HeroSection />
      <CarouselSection />
      <TopVotedTalentSection />
      <HorizontalScroll />
    </div>
  )
}

export default App
